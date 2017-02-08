---
order: 0
title: 基本
---

toast轻提示

```jsx
import Toast from 'lib/toast'
import 'lib/toast/style'

class ToastExample extends React.Component {
  handleToastInfo (){
    Toast.info('这是一个toast提示!!!')   
  }
  render() {
    return (
        <div>
            <span onClick={this.handleToastInfo}>Info</span>
        </div>
    )
  }
}

ReactDOM.render(<ToastExample />, mountNode);
```
