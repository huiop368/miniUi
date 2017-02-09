import React        from 'react'
import ReactDOM     from 'react-dom'
import Dialog       from '../_dialog'
import classnames   from 'classnames'

let instance = null

const createPopup = (content, config) => {
    const props = {
        prefixCls        : 't-popup',
        animationType    : 'slide-down',
        maskClosable     : true,
        ...config
    } 

    let div = document.createElement('div')
    document.body.appendChild(div)

    const close = () => {
       if(div){
            setTimeout(() =>{
                ReactDOM.unmountComponentAtNode(div)
                div.parentNode.removeChild(div)
                div = null
            },0) 
       }
       instance = null
    }

    const { prefixCls, className, maskClosable, wrapProps, animationType } = props

    const allCls = classnames({
        [`${prefixCls}-${animationType}`] : true,
        [className] : !!className
    })

    ReactDOM.render(
        <Dialog
        visible
        title=""
        footer=""
        prefixCls={prefixCls}
        className={allCls}
        onClose={close}
        maskClosable={maskClosable}
        wrapProps={wrapProps || {}}
        >
            { content } 
        </Dialog>, div
    )

    return {
        close
    }
}


export default {
    show (content, config){
        instance = createPopup(content, config)
    },

    hide (){
        if(instance){
            instance.close() 
        }
    }
}
