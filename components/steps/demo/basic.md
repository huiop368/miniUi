---
order: 0
title: 基本
---

基本steps用法

```jsx
import Steps from 'lib/steps'
import 'lib/steps/style'

const Step = Steps.Step

class StepsExample extends React.Component {
  render() {
    return (
        <div>
            <Steps current={2}>
                <Step title="下单" />
                <Step title="取件" />
                <Step title="支付" />
                <Step title="完成" />
            </Steps>
            <p style={{height : 20}} />
            <Steps current={1} size="large">
                <Step title="下单" />
                <Step title="取件" />
                <Step title="支付" />
            </Steps>
        </div>
    )
  }
}

ReactDOM.render(<StepsExample />, mountNode);
```
