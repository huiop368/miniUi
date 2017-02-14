import React, { Component, PropTypes, Children }  from 'react'
import classnames       from 'classnames'
import Step             from './Step'

export default class Steps extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        current     : PropTypes.number,
        size        : PropTypes.oneOf(['small', 'large']),
        direction   : PropTypes.oneOf(['vertical', 'horizontal'])
    };

    static defaultProps = {
        prefixCls   : 't-steps',
        current     : 0,
        size        : 'small',
        direction   : 'horizontal'
    };

    static Step = Step;

    render (){
        const { prefixCls, className, size, direction, current, style, children } = this.props

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className,
            [`${prefixCls}-${size}`] : true,
            [`${prefixCls}-${direction}`] : true
        }) 

        const steps = Children.map(children, (child, idx) => {
            let props = {
                stepNum : (idx + 1).toString(),
                stepLast : idx === children.length -1,
                prefixCls
            }
            
            if(!child.props.status){
                if (idx === current) {
                    props.status = 'process'
                } else if (idx < current) {
                    props.status = 'finish'
                } else {
                    props.status = 'wait'
                } 
            }

            return React.cloneElement(child, props)
        })

        return (
            <div className={allCls} style={style}>
                { steps }
            </div>        
        )
    }
}
