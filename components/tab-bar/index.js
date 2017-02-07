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
        defaultActiveKey : '1',
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

    componentWillReceiveProps(nextProps) {
        if ('activeKey' in nextProps) {
            this.setState({
                activeKey: nextProps.activeKey
            })
        }
    }

    handleTabClick = (key) => {
        if (this.props.onTabClick) {
            this.props.onTabClick(key)
        }
        this.setActiveKey(key)
    }

    setActiveKey (activeKey){
        if (this.state.activeKey !== activeKey) {
            if (!('activeKey' in this.props)) {
                this.setState({
                    activeKey
                })
            }

            this.props.onChange(activeKey)
        }
    }

    render (){
        const { prefixCls, className, children, style, onChange, onTabClick } = this.props
        const { activeKey } = this.state
        
        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className
        })

        let panels = []
        let bars = []

        Children.forEach(children, child => {
            const key = child.key
            const panelChildren = child.props.children
            const isActive = key === activeKey
            
            const panelCls = classnames({
                [`${prefixCls}-panel`] : true,
                [`${prefixCls}-panel-active`] : isActive
            })

            panels.push(
                <div className={panelCls} key={key}>        
                    {panelChildren}
                </div>
            )

            bars.push(React.cloneElement(child, {
                prefixCls   : prefixCls,
                active      : isActive,
                onTabClick  : () => this.handleTabClick(key)
            }))
        })

        return (
            <div className={allCls} style={style}>
                <div className={`${prefixCls}-content`}>
                    { panels }
                </div>
                <div className={`${prefixCls}-bar`}>
                    { bars }
                </div>
            </div>        
        )
    }
}
