import React, { Component, PropTypes, Children }  from 'react'
import Hammer           from 'react-hammerjs'
import Modal            from '../modal'
import Swipeout         from './Swipeout'
import classnames       from 'classnames'

export default class SwipeAction extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        left        : PropTypes.array,
        right       : PropTypes.array,
        title       : PropTypes.string,
        autoClose   : PropTypes.bool,
        disabled    : PropTypes.bool,
        coverClosable: PropTypes.bool,
        onClose     : PropTypes.func,
        onOpen      : PropTypes.func
    };

    static defaultProps = {
        prefixCls   : 't-swipe',
        left        : [],
        right       : [],
        title       : '请确认操作',
        autoClose   : false,
        disabled    : false,
        coverClosable : false,
        onClose     : () => {},
        onOpen      : () => {}
    };

    constructor (props){
        super(props)

        this.state = {
            showModal : false
        }
    }

    handleClose = () => {
        if(this.props.onClose){
            this.props.onClose()
        }

        this.setState({
            showModal : false
        })
    }

    handleLongTap = () => {
        const { onOpen, disabled } = this.props

        if(disabled) { return }   

        if(onOpen){
            onOpen()
        }

        this.setState({
            showModal : true
        })
    }

    get androidSwipe (){
        const { left, right, title, children, autoClose } = this.props
        const options = {
            recognizers : {
                press : {
                    time: 500,
                    threshold: 50
                } 
            }
        }
        
        const footer = [...left, ...right].map(item => {
            const oldPress = item.onPress || function(){}
            return {
                text : item.text,
                style : item.style,
                onPress : () => {
                    oldPress()
                    if(autoClose){
                        this.handleClose()
                    }
                }
            }
        })

        return (
            <div>
                <Hammer onPress={this.handleLongTap} options={options}>
                    { children }
                </Hammer>
                {
                    this.state.showModal ?
                        <Modal
                          animated={false}
                          title={title}
                          transparent
                          closable={false}
                          onClose={this.handleClose}
                          maskClosable
                          footer={footer}
                          visible
                        /> : null
                }
            </div>        
        )
    }

    render (){
        const { prefixCls, className, title, left, right, coverClosable,
                autoClose, disabled, onClose, onOpen, children } = this.props
        const isAndroid = !!navigator.userAgent.match(/Android/i)

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className
        }) 

        return (left.length || right.length) ? (
            <div className={allCls}>
                {
                   isAndroid ? this.androidSwipe : 
                       <Swipeout
                        prefixCls={prefixCls}
                        left={left}
                        right={right}
                        autoClose={autoClose}
                        coverClosable={coverClosable}
                        disabled={disabled}
                        onOpen={onOpen}
                        onClose={onClose}>
                        { children }
                       </Swipeout>
                }
            </div>        
        ) : (
            <div className={allCls}>{ children }</div>    
        )
    }
}
