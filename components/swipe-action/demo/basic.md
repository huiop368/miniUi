---
order: 0
title: 基本
---

基本使用

```jsx
import SwipeAction from 'lib/swipe-action'
import 'lib/swipe-action/style'

class SwipeActionExample extends React.Component {
  render() {
    return (
        <div>
            <SwipeAction
            coverClosable
            autoClose
            right={[
              {
                text: '删除',
                onPress: () => console.log('删除'),
                style: { backgroundColor: '#F4333C', color: 'white' },
              }
            ]}
            left={[
              {
                text: '回复',
                onPress: () => console.log('回复'),
                style: { backgroundColor: '#108ee9', color: 'white' },
              },
              {
                text: '取消',
                onPress: () => console.log('取消'),
                style: { backgroundColor: '#ddd', color: 'white' },
              }
            ]}
            >
               <div style={{height : 50,backgroundColor : '#ccc'}}>I am test</div> 
            </SwipeAction>
        </div>
    )
  }
}

ReactDOM.render(<SwipeActionExample />, mountNode);
```
