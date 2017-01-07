import React, { Component, PropTypes }  from 'react'
import classnames                       from 'classnames'

export default class Tag extends Component {
    
    static PropTypes = {
        prefixCls   : PropTypes.string,
        small       : PropTypes.bool,
        disabled    : PropTypes.bool,
        selected    : PropTypes.bool,
        closable    : PropTypes.bool,
        onClose     : PropTypes.func,
        onChange    : PropTypes.func,
        afterClose  : PropTypes.func
    };

    static defaultProps = {
        prefixCls   : 't-tag',
        small       : false,
        disabled    : false,
        closable    : false,
        onClose     : () => {},
        onChange    : () => {},
        afterClose  : () => {}
    };

    constructor (props){
        super(props)

        this.state = {
            selected : props.selected,
            closed : false
        }
    }

    // seleted 是自身控制状态，外界props传入改变后，需更新自身状态
    componentWillReceiveProps(nextProps) {
        if (this.props.selected !== nextProps.selected) {
          this.setState({
            selected: nextProps.selected,
          })
        }
    }
    

    onClick = () => {
        const { disabled, onChange } = this.props
        const { selected } = this.state

        if( disabled ){ return }
        
        this.setState({selected : !selected}, () => {
            if(onChange){
                onChange(!selected)
            }
        })
    }

    onTagClose = () => {
        const { onClose, afterClose } = this.props

        if(onClose){ onClose() }

        this.setState({closed : true}, afterClose)
    }
    
    render (){
        const { children, prefixCls, small, disabled, closable, onClose, onChange, afterClose, className, style, ...props} = this.props
        const { selected, closed } = this.state
        
        const allCls = classnames({
            [`${prefixCls}`] : true,
            [`${prefixCls}-normal`] : !disabled && !selected,
            [`${prefixCls}-small`] : small,
            [`${prefixCls}-disabled`] : disabled,
            [`${prefixCls}-closable`] : closable,
            [`${prefixCls}-active`] : selected && !disabled,
            [className] : !!className
        })

        return !closed ? (
            <div className={allCls} style={style} onClick={this.onClick} {...props}>
                { children }
                { closable && !disabled && !small && <span className={`${prefixCls}-close`} onClick={this.onTagClose}></span>}
            </div>
        ) : null
    }
}
