import React    from 'react'
import ReactDOM from 'react-dom'
import Modal    from './index'

export default function(...args){
    const title = args[0]
    const content = args[1]
    const btns = args[2] || [{text : '确定'}]

    if(!title && !content){
        return
    }

    let div = document.createElement('div')
    document.body.appendChild(div)

    const close = () => {
        //@TODO setTimeout Hack for react error
        setTimeout(() => {
            ReactDOM.unmountComponentAtNode(div)
            div.parentNode.removeChild(div)
            div = null
        },0)
    }

    const footer = btns.map(btn => {
        const onPress = btn.onPress || function(){}

        btn.onPress = () => {
            onPress()
            close()
        }

        return btn
    })

    ReactDOM.render(
        <Modal
        visible
        transparent
        title={title}
        closable={false}
        footer={footer}
        >
            {content}
        </Modal>,div
    )
} 
