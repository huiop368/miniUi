import React, { Component, PropTypes }  from 'react'
import classnames                       from 'classnames'

export default class TabPanel extends Component {

    static propTypes = {
        tab     : PropTypes.string
    };

    // static defaultProps = {
        
    // };

    render (){
        const { children, active, prefixCls } = this.props

        const cls = classnames({
            [`${prefixCls}-panel-inactive`] : !active,
            [`${prefixCls}-panel-active`] : active 
        })

        return (
            <div role="tab-panel" className={cls}>
                { children }
            </div>        
        )
    }
}
