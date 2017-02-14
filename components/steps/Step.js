import React, { Component, PropTypes, Children }  from 'react'
import classnames       from 'classnames'

export default class Step extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        title       : PropTypes.string,
        status      : PropTypes.string,
        stepNum     : PropTypes.string,
        stepLast    : PropTypes.bool
    };

    static defaultProps = {
        prefixCls   : 't-steps'
    };

    render (){
        const { prefixCls, className, title, status, style, stepNum, stepLast } = this.props

        const allCls = classnames({
            [className] : !!className,
            [`${prefixCls}-item`] : true,
            [`${prefixCls}-item-${status}`] : true,
            [`${prefixCls}-item-last`] : stepLast
        })

        return (
            <div className={allCls} style={style}>
                {!stepLast ? <span className={`${prefixCls}-item-eli`}></span> : null}
                <div className={`${prefixCls}-item-header`}>
                    { status !== 'finish' ? stepNum : <span className={`${prefixCls}-item-header-icon`}></span>}
                </div>
                <div className={`${prefixCls}-item-content`}>
                    {title}
                </div>
            </div>        
        )
    }
}
