import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

export const Brief = ({children, style}) => (
    <div className="t-list-brief" style={style}>{children}</div>   
)

export default class ListItem extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        arrow       : PropTypes.string,
        align       : PropTypes.string,
        error       : PropTypes.bool,
        multipleLine: PropTypes.bool,
        wrap        : PropTypes.bool,
        extra       : PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        thumb       : PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        onClick     : PropTypes.func
    };

    static defaultProps = {
        prefixCls   : 't-list',
        align       : 'middle',
        error       : false,
        multipleLine: false,
        wrap        : false,
        onClick     : () => {}
    };

    get thumb(){
        const { thumb, prefixCls } = this.props

        return !thumb ? null : <div className={`${prefixCls}-thumb`}>{'string' === typeof thumb ? <img src={thumb} /> : thumb }</div>
    }

    render (){
        const { prefixCls, className, error, align, wrap, disabled,
            children, multipleLine, thumb, extra, arrow, onClick, ...props } = this.props

        const allCls = classnames({
            [className]: !!className,
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-item-disabled`]: disabled,
            [`${prefixCls}-item-error`]: error,
            [`${prefixCls}-item-top`]: align === 'top',
            [`${prefixCls}-item-middle`]: align === 'middle',
            [`${prefixCls}-item-bottom`]: align === 'bottom'
        })

        const lineCls = classnames({
            [`${prefixCls}-line`]: true,
            [`${prefixCls}-line-multiple`]: multipleLine,
            [`${prefixCls}-line-wrap`]: wrap
        })

        const arrowCls = classnames({
            [`${prefixCls}-arrow`]: true,
            [`${prefixCls}-arrow-horizontal`]: arrow === 'horizontal',
            [`${prefixCls}-arrow-vertical`]: arrow === 'down' || arrow === 'up',
            [`${prefixCls}-arrow-vertical-up`]: arrow === 'up',
        })

        return (
            <div className={allCls} onClick={onClick} {...props}>
                {this.thumb}
                <div className={lineCls}>
                    { children ? <div className={`${prefixCls}-content`}>{children}</div> : null }
                    { extra ? <div className={`${prefixCls}-extra`}>{extra}</div> : null }
                    { arrow ? <div className={arrowCls} /> : null }
                </div>
            </div>        
        )
    }
}
