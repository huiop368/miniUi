import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

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
        unit            : '',
        min             : 0,
        max             : 99,
        step            : 1,
        disabled        : false,
        onChange        : () => {}
    };

    constructor (props){
        super(props)

        this.state = {
            inputValue : props.value || props.defaultValue || 0
        }
    }

    handleUp = () => {
        const { inputValue } = this.state 
        const v = inputValue + 1

        if(v > this.props.max){ return }

        this.setValue(v)
    }

    handleDown = () => {
        const { inputValue } = this.state 
        const v = inputValue - 1

        if(v < this.props.min){ return }

        this.setValue(v)
    }

    setValue (v){
        if( !('value' in this.props)){
            this.setState({
                inputValue : v
            })
        }

        this.props.onChange(v)
    }

    render (){
        const { prefixCls, className, unit, style, min, max } = this.props
        const { inputValue } = this.state

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className
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
                <span className={downCls} onClick={this.handleDown}></span>
                <span className={`${prefixCls}-value`}>{inputValue}{unit}</span>
                <span className={upCls} onClick={this.handleUp}></span>
            </div>        
        )   
    }
}
