import React, { Component, PropTypes, Children }  from 'react'
import Icon         from 'react-fa'
import classnames   from 'classnames'

export default class GuideLink extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        text        : PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
        href        : PropTypes.string,
        type        : PropTypes.oneOf(['question', 'arrow'])
    };

    static defaultProps = {
        prefixCls   : 't-guide-link',
        onClick     : () => {}
    };

    render (){
        const { className, prefixCls, text, href, type, onClick, ...props} = this.props
        
        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className
        })
        return (
            <div className={allCls} onClick={onClick} {...props}>
                {type === 'question' ? <Icon className={`${prefixCls}-icon-left`} name="question-circle-o" /> : null}
                <a href={href || '#'} className={`${prefixCls}-href`}>{text}</a>
                {type === 'arrow' ? <Icon className={`${prefixCls}-icon-right`} name="chevron-right" /> : null}
            </div>        
        )
    }
}
