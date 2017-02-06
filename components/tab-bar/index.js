import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

import TabBarItem   from './TabBarItem'

export default class TabBar extends Component {

    static propTypes = {
        prefixCls           : PropTypes.string,
        className           : PropTypes.string,
        activeKey           : PropTypes.string,
        defaultActiveKey    : PropTypes.string,
        onChange            : PropTypes.func,
        onTabClick          : PropTypes.func
    };

    static defaultProps = {
        prefixCls        : 't-tabbar',
        defaultActiveKey : 1,
        onChange         : () => {},
        onTabClick       : () => {}
    };

    static Item = TabBarItem;

    constructor (props){
        super(props)

        this.state = {
            activeKey : props.activeKey || props.defaultActiveKey
        }
    }

    render (){
        const { prefixCls, className, style, onChange, onTabClick } = this.props
        
        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className
        })

        return (
            <div className={allCls} style={style}>
                <div className={`${prefixCls}-content`}></div>
            </div>        
        )
    }
}
