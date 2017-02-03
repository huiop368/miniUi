import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

export default class FlexItem extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        onClick     : PropTypes.func
    };

    static defaultProps = {
        prefixCls   : 't-flexbox',
        onClick     : () => {}
    };

    render (){
        const { prefixCls, className, children, style, onClick } = this.props

        const allCls = classnames({
            [`${prefixCls}-item`] : true,
            [className] : !!className
        })
        return (
            <div className={allCls} style={style} onClick={onClick}>
                { children }
            </div>        
        )
    }
}
