import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

export default class Switch extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        checked     : PropTypes.bool,
        disbaled    : PropTypes.bool,
        name        : PropTypes.string,
        onChange    : PropTypes.func
    };

    static defaultProps = {
        prefixCls   : 't-switch',
        checked     : false,
        disabled    : false,
        name        : '',
        onChange    : () => {}
    };

    handleChange = (e) => {
        this.props.onChange(e.target.checked)
    }

    render (){
        const { className, prefixCls, checked, disabled, style, name } = this.props

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className,
            [`${prefixCls}-android`]: !!navigator.userAgent.match(/Android/i),
        })

        return (
            <label className={allCls} style={style}>
                <input
                type="checkbox"
                name={name}
                className={`${prefixCls}-checkbox`}
                disabled={disabled}
                checked={checked}
                onChange={this.handleChange}
                />
                <div className="checkbox" />
            </label>        
        )
    }
}
