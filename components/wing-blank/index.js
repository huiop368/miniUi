import React, { Component, PropTypes }  from 'react'
import classnames                       from 'classnames'

export default class WhiteBlank extends Component {
    
    static PropTypes = {
        prefixCls   : PropTypes.string,
        size        : PropTypes.string
    };

    static defaultProps = {
        prefixCls   : 't-wingblank',
        size        : 'md'
    };
    
    render (){
        const { children, prefixCls, size, className, style} = this.props
        
        const allCls = classnames({
            [`${prefixCls}`] : true,
            [`${prefixCls}-${size}`] : true,
            [className] : !!className
        })

        return (<div className={allCls} style={style}>
                    { children }
                </div>)
    }
}
