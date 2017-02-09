import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

export default class Dialog extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        visible     : PropTypes.bool,
        closable    : PropTypes.bool,
        maskClosable: PropTypes.bool,
        mask        : PropTypes.bool,
        onClose     : PropTypes.func,
        afterClose  : PropTypes.func
    };

    static defaultProps = {
        prefixCls   : 't-dialog',
        visible     : false,
        mask        : true,
        closable    : true,
        maskClosable: false,
        onClose     : () => {},
        afterClose  : () => {}
    };

    get maskEl(){
        const { prefixCls, visible } = this.props

        const maskCls = classnames({
            [`${prefixCls}-mask`] : true,
            [`${prefixCls}-mask-hidden`] : !visible
        })
        return <div className={maskCls} />
    }

    get dialogEl(){
        const { prefixCls, closable, title, footer, children } = this.props
        
        return (
            <div className={`${prefixCls}-content`}>
                { closable ? <span className={`${prefixCls}-close-x`} onClick={this.close}></span> : null }
                { 
                    title ? 
                        <div className={`${prefixCls}-header`}>
                            <div className={`${prefixCls}-title`}>
                                { title }
                            </div>
                        </div> : null
                }
                <div className={`${prefixCls}-body`}>
                    { children }
                </div>
                {
                    footer ? 
                        <div className={`${prefixCls}-footer`}>
                            { footer }
                        </div> : null
                }
            </div>        
        )
    }

    close = (e) => {
        this.props.onClose(e)
    }

    handleMaskClick = (e) => {
        if(!this.props.maskClosable) return

        if(e.target === e.currentTarget){
            this.close(e)
        }
    }

    render (){
        let { prefixCls, className, visible, style, wrapProps } = this.props

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className
        })

        let wrapStyle = {display : visible ? null : 'none'}

        return (
            <div>
                {this.maskEl}
                <div
                role="dialog"
                style={wrapStyle}
                onClick={this.handleMaskClick}
                className={`${prefixCls}-wrap`}
                {...wrapProps}>
                    <div className={allCls} style={style}>
                        {this.dialogEl}
                    </div>
                </div>
            </div>
        )
    }
}
