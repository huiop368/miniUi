import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

import Panel from './Panel'

const toArray = (activeKey) => {
    let curKey = activeKey
    const isArr = Array.isArray(curKey)
    
    if(!isArr){
        curKey = curKey ? [curKey] : []
    }

    return curKey
}

export default class Accordion extends Component {

    static Panel = Panel;

    static propTypes = {
        prefixCls           : PropTypes.string,
        activeKey           : PropTypes.oneOfType([PropTypes.string,PropTypes.arrayOf(PropTypes.string)]),
        defaultActiveKey    : PropTypes.oneOfType([PropTypes.string,PropTypes.arrayOf(PropTypes.string)]),
        accordion           : PropTypes.bool,
        onChange            : PropTypes.func,
        className           : PropTypes.string,
        style               : PropTypes.object
    };
    
    static defaultProps = {
        prefixCls        : 't-accordion',
        accordion        : false,
        onChange         : () => {}
    };

    constructor (props){
        super(props)

        this.state = {
            activeKey : toArray(props.defaultActiveKey || props.activeKey)
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('activeKey' in nextProps) {
            this.setState({
                activeKey: toArray(nextProps.activeKey)
            })
        }
    }

    onClickItem = (key) => {
        return () => {
            let activeKey = this.state.activeKey
             
            if(this.props.accordion){
                activeKey = activeKey[0] === key ? [] : [key]
            }else{
                activeKey = [...activeKey]
                const index = activeKey.indexOf(key)
                const isActive = index > -1

                if(isActive){
                    activeKey.splice(index, 1)    
                }else{
                    activeKey.push(key)
                }
            }

            this.setActiveKey(activeKey)
        }
    }

    setActiveKey (activeKey){
        if (!('activeKey' in this.props)) {
            this.setState({ activeKey })
        }

        this.props.onChange(this.props.accordion ? activeKey[0] : activeKey)
    }

    get panels(){
        const { children, prefixCls, accordion } = this.props
        const { activeKey } = this.state
        let panels = []

        Children.forEach(children, (child, i) => {
            if(!child) return

            const key = child.key || String(i)
            const header = child.props.header

            let isActive = false
            if (accordion) {
                isActive = activeKey[0] === key
            }else{
                isActive = activeKey.indexOf(key) > -1
            }

            const props = {
                key,
                header,
                isActive,
                prefixCls,
                children : child.props.children,
                onClickItem : this.onClickItem(key)
            }

            panels.push(React.cloneElement(child, props))
        })
        
        return panels
    }

    render (){
        const { prefixCls, className, style } = this.props

        const allCls = classnames({
           [prefixCls] : true,
           [className] : !!className
        })

        return (
            <div className={allCls} style={style}>
                { this.panels }
            </div>        
        )
    }
}
