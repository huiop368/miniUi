import React, { Component, PropTypes }  from 'react'
import classnames                       from 'classnames'

export default class WhiteSpace extends Component {
    
    static PropTypes = {
        prefixCls   : PropTypes.string,
        size        : PropTypes.string
    };

    static defaultProps = {
        prefixCls   : 't-whitespace',
        size        : 'md'
    };
    
    render (){
        const { prefixCls, size, className, style} = this.props
        
        const allCls = classnames({
            [`${prefixCls}`] : true,
            [`${prefixCls}-${size}`] : true,
            [className] : !!className
        })

        return <div className={allCls} style={style} />
    }
}
