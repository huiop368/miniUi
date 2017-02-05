import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

export default class Checkbox extends Component {

    static propTypes = {
        prefixCls       : PropTypes.string,
        className       : PropTypes.string,
        name            : PropTypes.string,
        defaultChecked  : PropTypes.bool, 
        checked         : PropTypes.bool, 
        disabled        : PropTypes.bool,
        onChange        : PropTypes.func
    };

    static defaultProps = {
        prefixCls       : 't-checkbox',
        name            : '',
        disabled        : false
    };

    constructor (props){
        super(props)

        this.state = {
            checked : props.defaultChecked || props.checked || false
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked
            })
        }
    }

    handleChange = (e) => {
        const checked = e.target.checked
        if (!('checked' in this.props)) {
            this.setState({
                checked : checked
            })
        }

        if(this.props.onChange){
            this.props.onChange(checked)
        }
    }

    render (){
        const { prefixCls, className, name, style, disabled, children } = this.props
        const { checked } = this.state

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className,
            [`${prefixCls}-checked`] : checked,
            [`${prefixCls}-disabled`] : disabled
        })
        
        return (
            <label className={`${prefixCls}-wrapper`} style={style}>
                <span className={allCls}>
                    <span className={`${prefixCls}-inner`}></span>
                    <input
                     type="checkbox"
                     className={`${prefixCls}-input`}
                     name={name}
                     disabled={disabled}
                     onChange={this.handleChange}
                     />
                </span>
                { children }
            </label>        
        )
    }
}
