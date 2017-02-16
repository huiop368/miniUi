import React, { Component, PropTypes, Children }  from 'react'
import Icon         from 'react-fa'
import classnames   from 'classnames'

export default class Stepper extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        unit        : PropTypes.string,
        min         : PropTypes.number,
        max         : PropTypes.number,
        step        : PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
        value       : PropTypes.number,
        defaultValue: PropTypes.number,
        disabled    : PropTypes.bool,
        onChange    : PropTypes.func
    };

    static defaultProps = {
        prefixCls       : 't-stepper',
        min             : 0,
        max             : 99,
        step            : 1,
        disabled        : false,
        onChange        : () => {}
    };

    constructor (props){
        super(props)

        this.state = {
            inputValue : this.normalizeValue(props.value || props.defaultValue || 0)
        }
    }

    componentWillReceiveProps (nextProps){
        if(!nextProps.disabled){
            if('value' in nextProps){
                this.setState({
                    inputValue : this.normalizeValue(nextProps.value)
                })
            }
        }
    }

    handleUp = () => {
        const { step, disabled } = this.props
        const { inputValue } = this.state 
        const v = inputValue + 1 * step

        if(disabled) { return }
        if(v > this.props.max){ return }

        this.setValue(v)
    }

    handleDown = () => {
        const { step, disabled } = this.props
        const { inputValue } = this.state 
        const v = inputValue - 1 * step

        if(disabled) { return }
        if(v < this.props.min){ return }

        this.setValue(v)
    }

    setValue (v){
        if( !('value' in this.props)){
            this.setState({
                inputValue : this.normalizeValue(v)
            })
        }

        this.props.onChange(v)
    }

    normalizeValue (v){
        const { min, max } = this.props
        let value = parseInt(v, 10)

        if(value < min) { value = min }
        if(value > max) { value = max }

        return value
    }

    render (){
        const { prefixCls, className, unit, style, min, max, disabled } = this.props
        const { inputValue } = this.state

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className,
            [`${prefixCls}-disabled`] : disabled
        })

        const upCls = classnames({
            [`${prefixCls}-hand-up`] : true,
            [`${prefixCls}-hand-up-disabled`] : inputValue >= max
        })

        const downCls = classnames({
            [`${prefixCls}-hand-down`] : true,
            [`${prefixCls}-hand-down-disabled`] : inputValue <= min
        })

        return (
            <div className={allCls} style={style}>
                <span className={downCls} onClick={this.handleDown}>
                    <Icon name="minus" className={`${prefixCls}-icon-minus`} />
                </span>
                <span className={`${prefixCls}-value-wrap`}>
                    <span className={`${prefixCls}-value`}>{inputValue}</span>
                    { unit ? <span className={`${prefixCls}-unit`}>{unit}</span> : null }
                </span>
                <span className={upCls} onClick={this.handleUp}>
                    <Icon name="plus" className={`${prefixCls}-icon-plus`} />
                </span>
            </div>        
        )   
    }
}
