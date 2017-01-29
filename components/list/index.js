import React, { Component, PropTypes, Children }  from 'react'
import classnames   from 'classnames'
import ListItem     from './ListItem'                         

export default class List extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string
    };

    static defaultProps = {
        prefixCls   : 't-list'
    };

    static item = ListItem;

    get header (){
        const { header, prefixCls } = this.props
        
        return !header ? null : <div className={`${prefixCls}-header`}>{'function' === typeof header ? header() : header}</div> 
    }

    get footer (){
        const { footer, prefixCls } = this.props
        
        return !footer ? null : <div className={`${prefixCls}-header`}>{'function' === typeof footer ? footer() : footer}</div>
    }

    render (){
        const { prefixCls, className, children, style } = this.props

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className
        })

        return (
            <div className={allCls} style={style}>
                {this.header}
                {children ? <div className={`${prefixCls}-body`}>{children}</div> : null}
                {this.footer}
            </div>        
        )
    }
}
