import React, { Component, PropTypes }  from 'react'
import classnames                       from 'classnames'

const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar)

function isString(str) {
    return 'string' === typeof str
}

// Insert one space between two chinese characters automatically.
function insertSpace(child) {
    if (isString(child.type) && isTwoCNChar(child.props.children)) {
        return React.cloneElement(child, {},
                              child.props.children.split('').join(' '))
    }
    if (isString(child)) {
        if (isTwoCNChar(child)) {
            child = child.split('').join(' ')
        }
        return <span>{child}</span>
    }
    return child
}


export default class Button extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        type        : PropTypes.string,
        size        : PropTypes.oneOf(['large', 'small']),
        htmlType    : PropTypes.oneOf(['submit', 'button', 'reset']),
        disabled    : PropTypes.bool,
        inline      : PropTypes.bool,
        loading     : PropTypes.bool,
        onClick     : PropTypes.func
    };

    static defaultProps = {
        type        : '',
        prefixCls   : 't-button',
        size        : 'large',
        disabled    : false,
        inline      : false,
        loading     : false,
        onClick     : () => {}
    };

    onClick = () => {
        this.props.onClick(this)
    }
    
    render (){
        const { children, type, htmlType, className, prefixCls, size, disabled, inline, loading, onClick, ...props } = this.props

        const allCls = classnames({
            [className] : className,
            [prefixCls] : true,
            [`${prefixCls}-primary`]: type === 'primary',
            [`${prefixCls}-small`]: size === 'small',
            [`${prefixCls}-loading`]: loading,
            [`${prefixCls}-inline`]: inline,
            [`${prefixCls}-disabled`]: disabled
        }) 

        const el = React.Children.map(children, insertSpace)

        return (
            <button {...props}
            type={htmlType || 'button'}
            className={allCls}
            disabled={disabled}
            onClick={this.onClick}
            >
                { el }
            </button>        
        )
    }
}
