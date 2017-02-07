import React, { Component, PropTypes, Children }  from 'react'
import ReactDOM                         from 'react-dom'
import classnames                       from 'classnames'

export default class Notice extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        duration    : PropTypes.number,
        iconName    : PropTypes.string,
        onClose     : PropTypes.func
    };

    static defaultProps = {
        prefixCls   : 't-toast',
        onClose     : () => {}
    };

    componentDidMount (){
        if (this.props.duration) {
            this.closeTimer = setTimeout(() => {
                this.close()
            }, this.props.duration * 1000)
        }
    }

    componentWillUnmount (){
        this.clearCloseTimer()    
    }

    clearCloseTimer() {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer)
            this.closeTimer = null
        }
    }

    close (){
        this.clearCloseTimer()    
        this.props.onClose()
    }

    render (){
        const { prefixCls, className, style, content, iconName } = this.props

        const allCls = classnames({
            [`${prefixCls}-notice`] : true,
            [className] : !!className
        })

        const wrapCls = classnames({
            [prefixCls] : true,
            [`${prefixCls}-mask`] : true
        })

        const textCls = classnames({
            [`${prefixCls}-text`] : true,
            [`${prefixCls}-text-icon`] : !!iconName
        })

        const textInfoCls = classnames({
            [`${prefixCls}-text-info`] : !!iconName
        })

        return (
            <div className={wrapCls}>
                <div className={allCls} style={style}>
                    <div className={`${prefixCls}-notice-content`}>
                        <div className={textCls}>
                            { iconName && <span></span> }
                            <div className={textInfoCls}>
                                { content }
                            </div>
                        </div>
                    </div>    
                </div>        
            </div>
        )
    }
}

export const createInstance = (props = {}) => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const notice = ReactDOM.render(<Notice {...props} />, div)

    return {
        destroy (){
            ReactDOM.unmountComponentAtNode(div)
            document.body.removeChild(div)
        }
    }
}
