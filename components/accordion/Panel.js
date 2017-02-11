import React, { Component, PropTypes, Children }  from 'react'
import Icon             from 'react-fa'
import classnames       from 'classnames'

export default class Panel extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        header      : PropTypes.string
    };

    static defaultProps = {
        
    };

    handleClickItem = () => {
        this.props.onClickItem()
    }

    render (){
        const { className, header, children, prefixCls, isActive } = this.props

        const allCls = classnames({
            [className] : !!className,
            [`${prefixCls}-item`] : true,
            [`${prefixCls}-item-active`] : isActive
        })

        const conCls = classnames({
            [`${prefixCls}-content`] : true,
            [`${prefixCls}-content-active`] : isActive
        })

        const iconCls = classnames({
            [`${prefixCls}-header-icon`] : true,
            [`${prefixCls}-header-icon-reverse`] : isActive
        })

        return (
            <div className={allCls}>
                <div className={`${prefixCls}-header`} onClick={this.handleClickItem}>
                    {header}
                    <Icon name="chevron-down" className={iconCls} />
                </div>

                <div className={conCls}>
                    <div className={`${prefixCls}-content-box`}>{ children }</div>
                </div>
            </div>        
        )
    }
}
