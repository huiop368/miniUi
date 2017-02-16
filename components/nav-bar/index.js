import React, { Component, PropTypes, Children }  from 'react'
import Icon         from 'react-fa'
import classnames   from 'classnames'

export default class NavBar extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        mode        : PropTypes.string,
        iconName    : PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
        onLeftClick : PropTypes.func
    };

    static defaultProps = {
        prefixCls    : 't-navbar',
        mode         : 'light',
        iconName     : 'left',
        onLeftClick  : () => {}
    };

    render (){
        const { prefixCls, className, style, mode, iconName, children,
                rightContent, leftContent, onLeftClick, ...props } = this.props

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className,
            [`${prefixCls}-${mode}`] : true
        })

        const nameMap = {
            'left' : 'chevron-left'
        }

        return (
            <div className={allCls} style={style} {...props}>
                <div className={`${prefixCls}-left`} onClick={onLeftClick}>
                    {iconName ? <Icon className={`${prefixCls}-left-icon`} name={nameMap[iconName]} /> : null}
                    <span className={`${prefixCls}-left-content`}>{leftContent}</span>
                </div>
                <div className={`${prefixCls}-title`}>{children}</div>
                <div className={`${prefixCls}-right`}>
                    {rightContent}
                </div>
            </div>        
        )
    }
}
