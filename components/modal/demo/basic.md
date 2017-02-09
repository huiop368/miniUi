---
order: 0
title: 基本
---

基本对话框

```jsx
import Modal from 'lib/modal'
import 'lib/modal/style'

class ModalExample extends React.Component {
  constructor (props){
    super(props)
    this.state = {
        visible : false    
    }

    this.handleClose = this.handleClose.bind(this)
    this.handleShow = this.handleShow.bind(this)
  }
  handleShow (){
    this.setState({visible:true})    
  }
  handleClose (){
    this.setState({visible:false})    
  }
  render() {
    return (
        <div>
            <span onClick={this.handleShow}>Show对话框</span>
            <Modal
            transparent
            title="这是title"
            visible={this.state.visible}
            onClose={this.handleClose}
            footer={[{ text: '确定', onPress: () => { this.handleClose() } }]}
            >
                Hello World~!!
            </Modal>
        </div>
    )
  }
}

ReactDOM.render(<ModalExample />, mountNode);
```
