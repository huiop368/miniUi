import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

export default class InputItem extends Component {

    static propTypes = {
        prefixCls       : PropTypes.string,
        listPrefixCls   : PropTypes.string,
        className       : PropTypes.string,
        type            : PropTypes.string,
        name            : PropTypes.string,
        value           : PropTypes.string,
        defaultValue    : PropTypes.string,
        placeholder     : PropTypes.string,
        editable        : PropTypes.bool,
        disabled        : PropTypes.bool,
        clear           : PropTypes.bool,
        error           : PropTypes.bool,
        maxLength       : PropTypes.number,
        labelNumber     : PropTypes.number,
        //labelStyle    : PropTypes.object,
        extra           : PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        onChange        : PropTypes.func,
        onBlur          : PropTypes.func,
        onFocus         : PropTypes.func,
        onErrorClick    : PropTypes.func,
        onExtraClick    : PropTypes.func
    };

    static defaultProps = {
        prefixCls       : 't-input',
        listPrefixCls   : 't-list',
        type            : 'text',
        placeholder     : '',
        labelNumber     : 4,
        editable        : true,
        disabled        : false,
        clear           : false,
        error           : false
    };

    debounceTime = null;
    scrollIntoViewTime = null;

    constructor (props){
        super(props)

        this.state = {
            focus : false,
            value : props.value || props.defaultValue || ''
        }
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value : nextProps.value
            })
        }
    }

    handleInputChange = (e) => {
        let value = e.target.value
        const { onChange, type } = this.props

        switch (type) {
          case 'text':
            break;
          case 'bankCard':
            value = value.replace(/\D/g, '')
            value = value.replace(/\D/g, '').replace(/(....)(?=.)/g, '$1 ')
            break;
          case 'phone':
            value = value.replace(/\D/g, '').substring(0, 11)
            const valueLen = value.length
            if (valueLen > 3 && valueLen < 8) {
              value = `${value.substr(0, 3)} ${value.substr(3)}`
            } else if (valueLen >= 8) {
              value = `${value.substr(0, 3)} ${value.substr(3, 4)} ${value.substr(7)}`
            }
            break;
          case 'number':
            value = value.replace(/\D/g, '')
            break;
          case 'password':
            break;
          default:
            break;
        }
        
        if(!('value' in this.props)){
            this.setState({value})
        }

        if (onChange) {
          onChange(value)
        }  

    }

    handleInputBlur = (e) => {
        this.debounceTime = setTimeout(() => {
            this.setState({
                focus: false
            })
        })

        if(this.props.onBlur){
            this.props.onBlur(e.target.value)
        }
    }

    handleInputFocus = (e) => {
        if(this.debounceTime){
            clearTimeout(this.debounceTime)
            this.debounceTime = null
        }
        this.setState({
            focus : true
        })

        if(this.props.onFocus){
            this.props.onFocus(e.target.value)
        }
    }

    handleClearInput = () => {
        if(!('value' in this.props)){
            this.setState({value : ''})
        }

        if(this.props.onChange){
            this.props.onChange('')
        }
    }

    handleErrorClick = (e) => {
        if(this.props.onErrorClick){
            this.props.onErrorClick(e)
        }
    }

    handleExtraClick = (e) => {
        if(this.props.onExtraClick){
            this.props.onExtraClick(e)
        }
    }

    render (){
        const { prefixCls, listPrefixCls, className, style, children, editable, disabled, placeholder,
                type, name, error, extra, maxLength, labelNumber, clear } = this.props

        const { focus, value } = this.state

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className,
            [`${prefixCls}-item`]: true,
            [`${listPrefixCls}-item`]: true,
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-error`]: error,
            [`${prefixCls}-focus`]: focus,
        })

        const labelCls = classnames({
            [`${prefixCls}-label`] : true,
            [`${prefixCls}-label-2`] : labelNumber === 2,
            [`${prefixCls}-label-3`] : labelNumber === 3,
            [`${prefixCls}-label-4`] : labelNumber === 4,
            [`${prefixCls}-label-5`] : labelNumber === 5,
            [`${prefixCls}-label-6`] : labelNumber === 6,
            [`${prefixCls}-label-7`] : labelNumber === 7
        })

        let inputType = type
        if (type === 'bankCard' || type === 'phone') {
            inputType = 'tel'
        }

        let patternProps = {}
        if(inputType === 'number'){
            patternProps = {
                pattern : "[0-9]*"
            }
        }

        return (
            <div className={allCls} style={style}>
                { children ? <div className={labelCls}>{children}</div> : null }
                <div className={`${prefixCls}-control`}>
                  <input
                    {...patternProps}
                    value={value}
                    type={inputType}
                    maxLength={maxLength}
                    name={name}
                    placeholder={placeholder}
                    onChange={this.handleInputChange}
                    onBlur={this.handleInputBlur}
                    onFocus={this.handleInputFocus}
                    readOnly={!editable}
                    disabled={disabled}
                  />
                </div>
                {clear && editable && !disabled && (value && value.length > 0) ?
                  <div
                    className={`${prefixCls}-clear`}
                    onTouchStart={this.handleClearInput}
                  />
                  : null}
                {error ? (<div className={`${prefixCls}-error-extra`} onClick={this.handleErrorClick} />) : null}
                {extra !== '' ? <div className={`${prefixCls}-extra`} onClick={this.handleExtraClick}>{extra}</div> : null}
            </div>        
        )
    }
}
