import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

export default class Badge extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        text        : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        dot         : PropTypes.bool,
        overflowCount : PropTypes.number
    };

    static defaultProps = {
        prefixCls       : 't-badge',
        dot             : false,
        overflowCount   : 99
    };

    render (){
        let { prefixCls, className, style, text, dot, overflowCount, children } = this.props

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className,
            [`${prefixCls}-not-a-wrapper`]: !children
        })

        const supCls = classnames({
            [`${prefixCls}-dot`] : dot,
            [`${prefixCls}-text`] : !dot
        })

        text = text > overflowCount ? `${overflowCount}+` : text

        if(dot){
            text = ''
        }

        const hidden = (!text || text === '0') && !dot

        return (
            <div className={allCls} title={text}>
                { children }
                { !hidden && <sup className={supCls} style={style}>{text}</sup>}
            </div>        
        )
    }
}
