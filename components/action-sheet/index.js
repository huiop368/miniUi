import React        from 'react'
import ReactDOM     from 'react-dom'
import Dialog       from '../_dialog'
import classnames   from 'classnames'

const NORMAL = 'NORMAL'
const SHARE = 'SHARE'
const noop = () => {}

const childrenFactory = {
    [NORMAL] (props, cb){
        const {prefixCls, title, message, options, cancelButtonIndex,
               cancelButtonText, destructiveButtonIndex} = props 

        return (
            <div>
                { title ? <h3 className={`${prefixCls}-title`}>{title}</h3> : null }
                { message ? <div className={`${prefixCls}-message`}>{message}</div> : null }
                <div className={`${prefixCls}-button-list`}>
                    {
                        options.map((item, i) => {
                            const cls = classnames({
                                [`${prefixCls}-button-list-item`]: true,
                                [`${prefixCls}-destructive-button`]: destructiveButtonIndex === i,
                                [`${prefixCls}-cancel-button`]: cancelButtonIndex === i,
                            })
                            const itemProps = {
                                key : i,
                                className: cls,
                                onClick: () => cb(i)
                            }

                            return (
                                <div {...itemProps}>
                                    { item }
                                    { cancelButtonIndex === i ? <span className={`${prefixCls}-cancel-button-mask`} /> : null }
                                </div>        
                            )
                        })
                    }
                </div>
            </div>
        )
    },

    [SHARE] (){
         
    }
}



const createActionSheet = (type, config, callback) => {
    const props = {
        prefixCls        : 't-action-sheet',
        cancelButtonText : '取消',
        maskClosable     : true,
        ...config
    }

    const typeMap = {
        [NORMAL] : 'normal',
        [SHARE]  : 'share'
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
    }

    const cb = (i) => {
        const resp = callback(i)

        if(resp && resp.then){
            resp.then( () => { close() } )
        }else{
            close()
        }
    }

    const { prefixCls, className, maskClosable, title, message, wrapProps, 
            options, cancelButtonIndex, cancelButtonText, destructiveButtonIndex } = props

    const children = childrenFactory[type](props, cb)

    const allCls = classnames({
        [`${prefixCls}-${typeMap[type]}`] : true,
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
            { children } 
        </Dialog>, div
    )
}




export default {

    showActionSheetWithOptions(config, callback = noop) {
        createActionSheet(NORMAL, config, callback)
    },

    showShareActionSheetWithOptions(config, callback = noop) {
        createActionSheet(SHARE, config, callback)
    },

    close() {
    }
}
