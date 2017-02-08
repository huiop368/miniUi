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
                { closable ? <span className={`${prefixCls}-close-x`}></span> : null }
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

    render (){
        let { prefixCls, className, visible, style } = this.props

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className
        })

        style = {display : visible ? null : 'none'}

        return (
            <div>
                {this.maskEl}
                <div
                style={style}
                role="dialog"
                className={`${prefixCls}-wrap`}>
                    <div className={allCls}>
                        {this.dialogEl}
                    </div>
                </div>
            </div>        
        )
    }
}
