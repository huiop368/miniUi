import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

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
        align: 'middle',
        error: false,
        multipleLine: false,
        wrap: false
    };

    get thumb(){
        
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

        return (
            <div className={allCls} {...props}>
                {this.thumb}
                <div>List Item</div>
            </div>        
        )
    }
}
