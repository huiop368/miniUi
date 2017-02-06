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
        const { prefixCls, className, badge, title } = this.props

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className
        })
        return (
            <div className={allCls}>
                <div className={`${prefixCls}-icon`}>
                    { 
                    //badge ? <Badge text={badge} className={`${prefixCls}-badge`}> {iconDom} </Badge> : iconDom
                    }
                </div>
                <p className={`${prefixCls}-title`}>{title}</p>
            </div>        
        )
    }
}
