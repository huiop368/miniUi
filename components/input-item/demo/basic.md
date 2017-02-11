---
order: 0
title: 基本
---

input item事例集合

```jsx
import InputItem from 'lib/input-item'
import 'lib/input-item/style'
import 'lib/list/style'

class InputItemExample extends React.Component {
  render() {
    return (
        <div>
            <InputItem placeholder="输入">用户名</InputItem>
        </div>
    )
  }
}

ReactDOM.render(<InputItemExample />, mountNode);
```
