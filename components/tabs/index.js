import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

import TabBar       from './TabBar'
import TabPanel     from './TabPanel'

export default class Tabs extends Component {
    static TabPanel = TabPanel;

    static propTypes = {
        prefixCls           : PropTypes.string,
        activeKey           : PropTypes.string,
        defaultActiveKey    : PropTypes.string,
        onChange            : PropTypes.func,
        onTabClick          : PropTypes.func
    };
    
    static defaultProps = {
        prefixCls : 't-tabs',
        defaultActiveKey : '1',
        onChange : () => {},
        onTabClick : () => {}
    };

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

    onTabClick = (activeKey) => {
        if (this.props.onTabClick) {
            this.props.onTabClick(activeKey)
        }
        this.setActiveKey(activeKey)
    }

    setActiveKey (activeKey){
        if (this.state.activeKey !== activeKey) {
            // 内部控制or外部控制
            if (!('activeKey' in this.props)) {
                this.setState({
                    activeKey
                })
            }

            this.props.onChange(activeKey)
        }
    }

    render (){
        const { children, prefixCls, defaultActiveKey, onChange, className } = this.props
        const { activeKey } = this.state
        
        const allCls = classnames({
            [className] : !!className,
            [prefixCls] : true
        })

        const barProps = {...this.props, activeKey : activeKey, onTabClick : this.onTabClick}

        const panels = []

        Children.forEach(children, child => {
            const key = child.key
            
            panels.push(React.cloneElement(child, {
                active : key === activeKey,
                prefixCls : prefixCls
            }))
        })
        
        return (
            <div className={allCls}>
                <TabBar {...barProps} />
                <div className={`${prefixCls}-content`}>
                    { panels }
                </div>
            </div>        
        )
    }
}
