---
order: 0
title: 基本
---

checkbox复选框

```jsx
import Checkbox from 'lib/checkbox'
import 'lib/checkbox/style'

class CheckboxExample extends React.Component {
  constructor (props){
    super(props)
  }
  
  render() {
    return (
        <div>
            <Checkbox>选项一</Checkbox>
            <Checkbox>选项二</Checkbox>
        </div>
    )
  }
}

ReactDOM.render(<CheckboxExample />, mountNode);
```
