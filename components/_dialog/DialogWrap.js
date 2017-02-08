import React, { Component, PropTypes, Children }  from 'react'
import ReactDOM     from 'react-dom'
import classnames   from 'classnames'
import Dialog       from './Dialog'

export default class DialogWrap extends Component {

    static propTypes = {
        visible     : PropTypes.bool
    };

    static defaultProps = {
        visible     : false
    };

    componentDidMount (){
        this.renderDialog()
    }

    componentDidUpdate (){
        this.renderDialog()
    }

    componentWillUnmount (){
        //if(this.props.autoDestroy){
            this.removeContainer()
        //}
    }

    renderDialog (){
        const props = {...this.props}

        if(props.visible || this._component){
            if(!this._container){
                this._container = this.createContainer()
            }

            ReactDOM.unstable_renderSubtreeIntoContainer(this,
                <Dialog {...props}/>,
                this._container,
                () => {
                    this._component = this
                }
            )
        }
    }

    createContainer (){
        const container = document.createElement('div')
        document.body.appendChild(container)

        return container
    }

    removeContainer (){
        if (this._container) {
            const container = this._container
            ReactDOM.unmountComponentAtNode(container)
            container.parentNode.removeChild(container)
            this._container = null
        } 
    }

    render (){
        return null
    }
}
