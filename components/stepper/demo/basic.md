---
order: 0
title: 基本
---

数字输入框。

```jsx
import Stepper from 'lib/stepper'
import 'lib/stepper/style'

class StepperExample extends React.Component {
  render() {
    return (
        <div>
            <Stepper />
            <Stepper step={2} />
            <Stepper value={1000} disabled />
        </div>
    )
  }
}

ReactDOM.render(<StepperExample />, mountNode);
```
