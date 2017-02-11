import React, { Component, PropTypes, Children }  from 'react'
import Icon         from 'react-fa'
import classnames   from 'classnames'

export default class SearchBar extends Component {

    static propTypes = {
        prefixCls       : PropTypes.string,
        className       : PropTypes.string,
        defaultValue    : PropTypes.string,
        value           : PropTypes.string,
        placeholder     : PropTypes.string,
        showCancelButton : PropTypes.bool,
        cancelText      : PropTypes.string,
        disabled        : PropTypes.bool,
        onChange        : PropTypes.func,
        onBlur          : PropTypes.func,
        onFocus         : PropTypes.func,
        onBlur          : PropTypes.func,
        onCancel        : PropTypes.func
    };

    static defaultProps = {
        prefixCls : 't-search',
        disabled  : false,
        showCancelButton : false,
        placeholder : '搜索',
        cancelText : '取消',
        onChange  : ()=>{},
        onBlur    : ()=>{},
        onFocus   : ()=>{},
        onCancel  : ()=>{}
    };

    firstFocus = false;

    constructor (props){
        super(props)

        this.state = {
            focus : false,
            value : props.defaultValue || props.value || ''
        }
    }

    componentDidMount (){
        setTimeout(() => {
            this.componentDidUpdate()
        },0)
    }

    componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
          this.setState({
            value: nextProps.value
          })
        }
    }

    componentDidUpdate (){
        const styles = window.getComputedStyle(this.cancelNode)
        const marginRight = parseInt(styles['margin-left'],10)
        const width = this.cancelNode.offsetWidth
        const { focus } = this.state

        if(!this.props.showCancelButton){
            if(!focus){
                this.cancelNode.style.marginRight = `-${width + marginRight}px`
            }else{
                this.cancelNode.style.marginRight = '0px'
            }
        }
    }

    handleFocus = () => {
        this.setState({
            focus: true
        })

        this.firstFocus = true

        // if (!('focused' in this.props)) {
        //   this.setState({
        //     focused: true,
        //   })
        // }

        if (this.props.onFocus) {
          this.props.onFocus()
        }
    }

    handleBlur = () => {
        this.setState({
            focus: false
        })

        // if (!('focused' in this.props)) {
        //   this.setState({
        //     focused: false,
        //   });
        // }

        if (this.props.onBlur) {
            this.props.onBlur()
        }
    }

    handleChange = (e) => {
        const value = e.target.value

        if (!('value' in this.props)) {
          this.setState({ value })
        }

        if (this.props.onChange) {
          this.props.onChange(value)
        }
    }

    handleClear = () => {
        if (!('value' in this.props)) {
            this.setState({ value: '' });
        }

        this.inputNode.focus()

        if(this.props.onClear){
            this.props.onClear('')
        }

        if(this.props.onChange){
            this.props.onChange('')
        }
    }

    handleCancel = () => {
        if(this.props.onCancel){
            this.props.onCancel(this.state.value)
        }

        if (!('value' in this.props)) {
            this.setState({ value: '' });
        }
    }

    render (){
        const { prefixCls, disabled, className, placeholder, cancelText, showCancelButton } = this.props
        const { value, focus } = this.state

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className
        })

        const cancelCls = classnames({
            [`${prefixCls}-cancel`] : true,
            [`${prefixCls}-cancel-anim`] : this.firstFocus,
            [`${prefixCls}-cancel-show`] : showCancelButton || focus 
        })

        const clearCls = classnames({
            [`${prefixCls}-clear`] : true,
            [`${prefixCls}-clear-show`] : focus && value && value.length > 0
        })

        return (
            <div className={allCls}>
                <div className={`${prefixCls}-input`}>
                    {
                    // 交互先用普通的菜鸟的交互
                    // <div className={`${prefixCls}-ph`}>
                    //     <span className={`${prefixCls}-ph-wrap`}>
                    //         <i className={`${prefixCls}-ph-icon`}></i>
                    //         <span className={`${prefixCls}-ph-placeholder`}>{placeholder}</span>
                    //     </span>
                    // </div>
                    }
                    <Icon className={`${prefixCls}-search-icon`} name="search" />
                    <input
                     type="search"
                     ref={node => this.inputNode = node}
                     className={`${prefixCls}-value`}
                     value={value}
                     disabled={disabled}
                     onChange={this.handleChange}
                     onFocus={this.handleFocus}
                     onBlur={this.handleBlur}
                     placeholder={placeholder} />
                    <span className={clearCls} onClick={this.handleClear}></span>
                </div>
                <div className={cancelCls} ref={node => this.cancelNode = node} onClick={this.handleCancel}>{cancelText}</div>
            </div>        
        )
    }
}
