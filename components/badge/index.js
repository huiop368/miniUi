import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

export default class Badge extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        text        : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        dot         : PropTypes.bool,
        corner      : PropTypes.bool,       // 试验属性，正方形精度高
        overflowCount : PropTypes.number
    };

    static defaultProps = {
        prefixCls       : 't-badge',
        dot             : false,
        corner          : false,
        overflowCount   : 99
    };

    componentDidMount (){
        if(this.props.corner){
            setTimeout( () => {
                const width = this.refs.badge.offsetWidth
                const height = this.refs.badge.offsetHeight
                const sup = this.refs.sup
                const h = Math.ceil((height/width) * (width/4))

                sup.style.width = `${width}px`
                sup.style.top = `${height/2-9-h}px`
                sup.style.right = `-${width/4}px`
            }, 30)
        }
    }

    render (){
        let { prefixCls, className, style, text, dot, corner, overflowCount, children } = this.props

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className,
            [`${prefixCls}-not-a-wrapper`]: !children,
            [`${prefixCls}-corner-wrapper`] : corner
        })

        const supCls = classnames({
            [`${prefixCls}-dot`] : dot,
            [`${prefixCls}-text`] : !dot && !corner,
            [`${prefixCls}-corner`] : corner
        })

        text = text > overflowCount ? `${overflowCount}+` : text

        if(dot){
            text = ''
        }

        const hidden = (!text || text === '0') && !dot

        return (
            <div className={allCls} title={text} ref="badge">
                { children }
                { !hidden && <sup className={supCls} style={style} ref="sup">{text}</sup>}
            </div>        
        )
    }
}
