import React from 'react'
import { createInstance } from './Notice'

let noticeInstance = null

const getNoticeInstance = (props) => {
    if(noticeInstance){
        noticeInstance.destroy()
        noticeInstance = null
    } 

    noticeInstance = createInstance(props)

    return noticeInstance
}

const notice = (content, type, duration = 3, onClose) => {
    let props = {
        duration,
        content,
        iconName : type,
        onClose : () => {
            if(onClose){onClose()}

            if(noticeInstance){
                noticeInstance.destroy()
                noticeInstance = null
            }
        }
    }

    let instance = getNoticeInstance(props)
}

export default {
    //show (){},
    info (content, duration, onClose){
        return notice(content, '', duration, onClose)
    },
    success (){},
    fail (){},
    offline (){},
    loading (){},
    hide (){}
}
