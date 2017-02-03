import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

import FlexItem from './FlexItem'

export default class Flex extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        onClick     : PropTypes.func
    };

    static defaultProps = {
        prefixCls   : 't-flexbox',
        onClick     : () => {}
    };

    static Item = FlexItem;

    render (){
        const { prefixCls, direction, wrap, justify, align, alignContent, className, style, children } = this.props

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className,

            [`${prefixCls}-dir-row`]: direction === 'row',
            [`${prefixCls}-dir-row-reverse`]: direction === 'row-reverse',
            [`${prefixCls}-dir-column`]: direction === 'column',
            [`${prefixCls}-dir-column-reverse`]: direction === 'column-reverse',

            [`${prefixCls}-nowrap`]: wrap === 'nowrap',
            [`${prefixCls}-wrap`]: wrap === 'wrap',
            [`${prefixCls}-wrap-reverse`]: wrap === 'wrap-reverse',

            [`${prefixCls}-justify-start`]: justify === 'start',
            [`${prefixCls}-justify-end`]: justify === 'end',
            [`${prefixCls}-justify-center`]: justify === 'center',
            [`${prefixCls}-justify-between`]: justify === 'between',
            [`${prefixCls}-justify-around`]: justify === 'around', 

            [`${prefixCls}-align-top`]: align === 'top' || align === 'start',
            [`${prefixCls}-align-middle`]: align === 'middle' || align === 'center',
            [`${prefixCls}-align-bottom`]: align === 'bottom' || align === 'end',
            [`${prefixCls}-align-baseline`]: align === 'baseline',
            [`${prefixCls}-align-stretch`]: align === 'stretch',

            [`${prefixCls}-align-content-start`]: alignContent === 'start',
            [`${prefixCls}-align-content-end`]: alignContent === 'end',
            [`${prefixCls}-align-content-center`]: alignContent === 'center',
            [`${prefixCls}-align-content-between`]: alignContent === 'between',
            [`${prefixCls}-align-content-around`]: alignContent === 'around',
            [`${prefixCls}-align-content-stretch`]: alignContent === 'stretch'
        })

        return (
            <div className={allCls} style={style}>
                { children }
            </div>        
        )
    }
}
