import React, { Component, PropTypes, Children }  from 'react'
import Hammer           from 'react-hammerjs'
import Icon             from 'react-fa'
import classnames       from 'classnames'

const STATUS = {
    init: 'init',
    pulling: 'pulling',
    enough: 'pulling-enough',
    refreshing: 'refreshing',
    refreshed: 'refreshed',
    reset: 'reset',
    error: 'error',
    loading: 'loading'
}

export default class RefreshControl extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        distanceToRefresh : PropTypes.number,
        onRefresh   : PropTypes.func
    };

    static defaultProps = {
        prefixCls         : 't-refresh-control',
        distanceToRefresh : 60,
        onRefresh         : () => {}
    };

    constructor (props){
        super(props)

        this.state = {
            status : STATUS.init,
            pullHeight : 0
        }
    }

    canRefresh (){
        return [STATUS.refreshing, STATUS.loading].indexOf(this.state.status) < 0
    }

    easing (distance) {
        let t = distance
        let b = 0
        let d = screen.availHeight
        let c = d / 2.5

        return c * Math.sin(t / d * (Math.PI / 2)) + b
    }

    handlePanStart = (e) => {
        if(!this.canRefresh()) { return }

        this._initPan = {
            deltaY : e.deltaY,
            scrollTop : this.refs.list.scrollTop
        }
    }

    handlePanMove = (e) => {
        if(!this.canRefresh()) { return }

        const scrollTop = this.refs.list.scrollTop
        const distance = e.deltaY - this._initPan.deltaY
        
        if(distance > 0 && scrollTop <= 0){
            let pullDistance = distance - this._initPan.scrollTop
            if(pullDistance < 0) {
                pullDistance = 0
                this._initPan.scrollTop = distance
            }
            const pullHeight = this.easing(pullDistance)
            if(pullHeight) e.preventDefault()

            this.setState({
                status : pullHeight > this.props.distanceToRefresh ? STATUS.enough : STATUS.pulling,
                pullHeight: pullHeight
            })
        }
    }

    handlePanEnd = (e) => {
        if(!this.canRefresh()) { return }

        const endState = {
            status : STATUS.reset,
            pullHeight: 0
        }

        if (this.state.status === STATUS.enough) {
            // refreshing
            this.setState({
                status : STATUS.refreshing,
                pullHeight: 0
            })

            let promiser = this.props.onRefresh()

            if(promiser && promiser.then){

                promiser.then(() => {
                    this.setState({
                        status : STATUS.refreshed,
                        pullHeight: 0
                    })    
                }).catch(e => {
                    this.setState({
                        status : STATUS.error,
                        pullHeight: 0
                    })    
                })
            }else{
                setTimeout( () => {
                    this.setState({
                        status : STATUS.refreshed,
                        pullHeight: 0
                    })
                }, 100)
            }

        }else{
            this.setState(endState)
        }
    }

    handleAnimationEnd = () => {
        let newState = {}
        let status = this.state.status

        if(status === STATUS.refreshed || status === STATUS.error) {
            newState.status = STATUS.init
        }

        this.setState(newState)
    }

    render (){
        const { prefixCls, className, children } = this.props

        const { pullHeight, status } = this.state

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className,
            [`${prefixCls}-${status}`] : true
        })

        const options = {
            recognizers : {
                pan : {
                    threshold: 50
                }
            }
        }

        const style = pullHeight ? {
            WebkitTransform: `translate3d(0,${pullHeight}px,0)`
        } : null

        const iconNames = {
            'refreshed' : 'check-circle-o',
            'error' : 'times-circle-o'
        }

        const txt = {
            'pulling' : '下拉刷新',
            'pulling-enough' : '松开刷新',
            'refreshed' : '刷新成功',
            'error' : '刷新失败'
        }

        return (
            <Hammer
            direction="DIRECTION_ALL"
            onPanStart={this.handlePanStart}
            onPan={this.handlePanMove}
            onPanEnd={this.handlePanEnd}
            onAnimationEnd={this.handleAnimationEnd}
            >
                <div className={allCls} ref="list">
                    <div className={`${prefixCls}-header`}>
                        { status !== 'refreshing' ?
                            <div className={`${prefixCls}-msg`}>
                                <Icon className={`${prefixCls}-msg-icon`} name={iconNames[status] || "long-arrow-down"} />
                                <span className={`${prefixCls}-txt`}>{txt[status] || ''}</span>
                            </div> : null
                        }
                        { status === 'refreshing' ?
                            <div className={`${prefixCls}-loading`}>
                                <Icon name="circle-o-notch" spin />
                                <span className={`${prefixCls}-txt`}>正在加载...</span>
                            </div> : null
                        }
                    </div>
                    <div className={`${prefixCls}-body`} style={style}>
                        { children }
                    </div>
                </div>
            </Hammer>
        )
    }
}
