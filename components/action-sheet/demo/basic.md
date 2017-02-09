---
order: 0
title: 基本
---

action sheet基本用法

```jsx
import ActionSheet from 'lib/action-sheet'
import 'lib/action-sheet/style'

class ActionSheetExample extends React.Component {
  constructor (props){
    super(props) 
    
    this.handleShowActionsheet = this.handleShowActionsheet.bind(this)
  }
  handleShowActionsheet (){
    const BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消']

    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      message: '我是描述我是描述'
    },
    (buttonIndex) => {
      console.log(buttonIndex)
    })
  }
  render() {
    return (
        <div>
            <span onClick={this.handleShowActionsheet}>默认状态</span>
        </div>
    )
  }
}

ReactDOM.render(<ActionSheetExample />, mountNode);
```
