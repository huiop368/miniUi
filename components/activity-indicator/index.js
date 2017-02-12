import React, { Component, PropTypes, Children }  from 'react'
import Icon             from 'react-fa'
import classnames       from 'classnames'

export default class ActivityIndicator extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        color       : PropTypes.oneOf(['gray','white']),
        size        : PropTypes.oneOf(['small','large']),
        text        : PropTypes.string,
        toast       : PropTypes.bool,
        animating   : PropTypes.bool
    };

    static defaultProps = {
        prefixCls   : 't-activity-indicator',
        color       : 'gray',
        size        : 'small',
        toast       : false,
        animating   : true
    };

    render (){
        const { prefixCls, className, color, size, text, toast, animating } = this.props

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className,
            [`${prefixCls}-toast`] : !!toast
        })

        const iconCls = classnames({
            [`${prefixCls}-spinner`] : true,
            [`${prefixCls}-spinner-white`]: !!toast || color === 'white'
        })

        let sizeProps = {size : 'lg'}
        if(size === 'large'){
            sizeProps = { size : '2x'}
        }

        if(animating){
            if(toast){
            
            }else{
                return (
                    <div className={allCls}>
                        <Icon name="circle-o-notch" className={iconCls} spin {...sizeProps} />
                        {text ? <span className={`${prefixCls}-tip`}>{text}</span> : null}
                    </div>        
                )
            }
        }else{
            return null
        }
    }
}
