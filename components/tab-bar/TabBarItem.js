import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

export default class TabBarItem extends Component {

    static propTypes = {
        prefixCls           : PropTypes.string,
        className           : PropTypes.string,
        badge               : PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        title               : PropTypes.string
    };

    static defaultProps = {
        prefixCls        : 't-tabbar'
    };

    render (){
        const { prefixCls, className, badge, title, active, icon, selectedIcon, onTabClick } = this.props

        const allCls = classnames({
            [`${prefixCls}-tab`] : true,
            [`${prefixCls}-tab-active`] : active,
            [className] : !!className
        })

        const iconRef = active ? selectedIcon : icon
        const iconEl = React.isValidElement(iconRef) ? iconRef :
                <img className={`${prefixCls}-tab-image`} src={iconRef.uri || iconRef} alt={title} />

        return (
            <div className={allCls} onClick={onTabClick}>
                <div className={`${prefixCls}-tab-icon`}>
                    { 
                        iconEl
                    //badge ? <Badge text={badge} className={`${prefixCls}-tab-badge`}> {iconDom} </Badge> : iconDom
                    }
                </div>
                <p className={`${prefixCls}-tab-title`}>{title}</p>
            </div>        
        )
    }
}
