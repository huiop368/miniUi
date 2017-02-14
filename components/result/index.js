import React, { Component, PropTypes, Children }  from 'react'
import Button           from '../button'
import classnames       from 'classnames'

export default class Result extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        title       : PropTypes.string,
        message     : PropTypes.string,
        img         : PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        buttonText  : PropTypes.string,
        buttonType  : PropTypes.string,
        buttonClick : PropTypes.func
    };

    static defaultProps = {
        prefixCls   : 't-result',
        buttonClick : () => {}
    };

    get image(){
        const { img } = this.props

        if('string' === typeof img){
            return <img src={img} width="140" height="140" /> 
        }else{
            return img 
        }
    }

    render (){
        const { prefixCls, className, title, message, img, style, buttonText, buttonType, buttonClick } = this.props

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className
        })
        return (
            <div className={allCls} style={style}>
                <div className={`${prefixCls}-pic`}>{this.image}</div>
                { title ? <div className={`${prefixCls}-title`}>{title}</div> : null }
                { message ? <div className={`${prefixCls}-message`}>{message}</div> : null }
                {
                    buttonText ? 
                        <div className={`${prefixCls}-button`}>
                            <Button type={buttonType} onClick={buttonClick}>{buttonText}</Button>
                        </div> : null
                }
            </div>        
        )
    }
}
