import React, { Component, PropTypes, Children }  from 'react'
import Icon         from 'react-fa'
import classnames   from 'classnames'

export default class NoticeBar extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        mode        : PropTypes.oneOf(['closable', 'link']),
        type        : PropTypes.oneOf(['success', 'info', 'error', 'question']),
        onClick     : PropTypes.func
    };

    static defaultProps = {
        prefixCls   : 't-notice-bar',
        onClick     : () => {}
    };

    constructor (props){
        super(props)

        this.state = {
            show : true
        }
    }

    handleClick = (e) => {
        const { mode, onClick } = this.props

        // closable时是否需要触发onClick
        if(onClick){ onClick() }
        
        if(mode === 'closable'){
            this.setState({show : false})   
        }
    }

    render (){
        const { prefixCls, className, children, mode, type, onClick, ...props } = this.props

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className
        })

        const type2name = {
            'success' : 'check-circle',
            'info' : 'info-circle',
            'error' : 'times-circle',
            'question' : 'question-circle',
            'closable' : 'close',
            'link' : 'chevron-right'
        }

        return (
            this.state.show ?
                <div className={allCls} {...props}>
                    { type ? 
                        <div className={`${prefixCls}-icon`}>
                            <Icon name={type2name[type]} />
                        </div> : null 
                    }
                    <div className={`${prefixCls}-content`}>{ children }</div>
                    {
                    mode === 'closable' || mode === 'link' ?
                        <div className={`${prefixCls}-action`} onClick={this.handleClick}>
                            <Icon name={type2name[mode]} />
                        </div> : null
                    }
                </div> : null
        )
    }
}
