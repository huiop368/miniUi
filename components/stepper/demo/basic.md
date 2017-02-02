---
order: 0
title: 基本
---

数字输入框。

```jsx
import Stepper from 'lib/stepper'
import 'lib/stepper/style'

class StepperExample extends React.Component {
  constructor (props){
    super(props)
    this.state = {
        checked : false    
    }
    this.onChange = this.onChange.bind(this)
  }
  onChange(checked) {
      this.setState({checked : !this.state.checked})
  }
  render() {
    return (
        <Stepper />
    )
  }
}

ReactDOM.render(<StepperExample />, mountNode);
```
