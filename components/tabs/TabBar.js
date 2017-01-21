import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

export default class TabBar extends Component {

    // static propTypes = {

    // };

    // static defaultProps = {
        
    // };

    render (){
        const { prefixCls, children, onTabClick } = this.props
        const activeKey = this.props.activeKey

        const tabs = []

        Children.forEach(children, child => {
            if(!child){
                return
            }

            const key = child.key

            const cls = classnames({
                [`${prefixCls}-tab-active`] : activeKey === key,
                [`${prefixCls}-tab`] : true
            })

            tabs.push(
                <div role="tab" key={key} className={cls} onClick={ () => onTabClick(key) }>
                    {child.props.tab}
                </div>        
            )
        })

        return (
            <div role="tab-list" className={`${prefixCls}-bar`}>
                { tabs }
            </div>        
        )
    }
}
