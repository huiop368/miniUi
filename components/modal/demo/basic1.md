---
order: 1
title: alert
---

包含无按钮, 确认框, 多按钮情况

```jsx
import Modal from 'lib/modal'
import 'lib/modal/style'

const alert = Modal.alert

class AlertExample extends React.Component {
  constructor (props){
    super(props)
  }
  
  render() {
    return (
        <div>
            <span onClick={() => alert('删除', '确定删除么?', [
                {text: 'Cancel', onPress: () => console.log('cancel')},
                { text: 'OK', onPress: () => console.log('ok')}
            ])}
            >自定义对话框</span>
            <p></p>
            <span onClick={() => alert('多个按钮情况', <div>这里有好多个按钮, 你试试</div>, [
              { text: '按钮一', onPress: () => console.log('第0个按钮被点击了') },
              { text: '按钮二', onPress: () => console.log('第1个按钮被点击了') },
              { text: '按钮三', onPress: () => console.log('第2个按钮被点击了') },
            ])}
            >弹出多个按钮 </span>
        </div>
    )
  }
}

ReactDOM.render(<AlertExample />, mountNode);
```
