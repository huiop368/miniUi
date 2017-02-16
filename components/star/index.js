import React, { Component, PropTypes, Children }  from 'react'
import Icon             from 'react-fa'
import classnames       from 'classnames'

export default class Star extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        defaultActiveKey  : PropTypes.string,
        activeKey   : PropTypes.string,
        size        : PropTypes.oneOf(['small', 'large']),
        starNum     : PropTypes.number,
        onChange    : PropTypes.func
    };

    static defaultProps = {
        prefixCls   : 't-star',
        size        : 'small',
        starNum     : 5
    };

    constructor (props){
        super(props)

        this.state = {
            activeKey : props.defaultActiveKey || props.activeKey || '0'
        }
    }

    componentWillReceiveProps (nextProps){
        if('activeKey' in nextProps){
            this.setState({
                activeKey : nextProps.activeKey
            })
        }
    }

    handleClickStar = (i) => {
        
        this.setActiveKey(i)
    }

    setActiveKey (activeKey){
        if (this.state.activeKey !== activeKey) {
            if (!('activeKey' in this.props)) {
                this.setState({
                    activeKey
                })
            }

            if(this.props.onChange){
                this.props.onChange(activeKey)
            }
        }
    }

    render (){
        const { prefixCls, className, size, starNum, onChange } = this.props
        const { activeKey } = this.state

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className
        })

        let stars = []
        for(let i = 0; i < starNum; i++){
            stars.push(''+(i+1))
        }

        let sizeProps = {size : 'lg'}
        if(size === 'large'){
            sizeProps = {
                size : '2x'
            }
        }

        return (
            <div className={allCls}>
                {
                    stars.map(i => {
                        const isActive = +i <= +activeKey
                        const iconCls = classnames({
                            [`${prefixCls}-star-icon`] : true,
                            [`${prefixCls}-star-o`] : !isActive,
                            [`${prefixCls}-star`] : isActive
                        })

                        return (
                            <Icon
                             {...sizeProps}
                             name="star"
                             onClick={() => this.handleClickStar(i)}
                             className={iconCls}
                             key={i} />
                        )
                    })
                }        
            </div>        
        )
    }
}
