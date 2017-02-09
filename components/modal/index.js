import React, { Component, PropTypes, Children }  from 'react'
import classnames   from 'classnames'
import Dialog       from '../_dialog'

import talert from './alert'

export default class Modal extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        transparent : PropTypes.bool,
        footer      : PropTypes.array
    };

    static defaultProps = {
        prefixCls   : 't-modal',
        footer      : [],
        transparent : false
    };

    static alert = talert;

    get footer(){
        const { prefixCls, footer } = this.props

        return footer.length ? 
                <div className={`${prefixCls}-button-group-${footer.length === 2 ? 'h' : 'v'}`}>
                    {
                        footer.map((item, i) => this.createFooterBtn(item, prefixCls, i))
                    }
                </div> : null
    }

    createFooterBtn (item, prefixCls, i){

        const onClick = (e) => {
            e.preventDefault()
            if(item.onPress){
                item.onPress()
            }
        }
        
        return (
            <a className={`${prefixCls}-button`} style={item.style || {}} href="#" key={i} onClick={onClick}>
                {item.text || 'OK'}
            </a>        
        )
    }

    render (){
        const {prefixCls, className, transparent, style, footer, ...props} = this.props

        const allCls = classnames({
            [className] : !!className,
            [`${prefixCls}-transparent`] : transparent,
            [`${prefixCls}-android`]: !!navigator.userAgent.match(/Android/i)
        })

        const diaStyle = transparent ? {width : '270px', height : 'auto', ...style} :
                            {width:'100%', height:'100%', ...style}

        //@TODO 待验证 fix touch to scroll background page on iOS
        // const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent)
        // const wrapProps = isIPhone ? { onTouchStart: e => this.isInModal(e) } : {}

        return (
            <Dialog
            prefixCls={prefixCls}
            className={allCls}
            style={diaStyle}
            footer={this.footer}
            {...props}
            />
        )
    }
}
