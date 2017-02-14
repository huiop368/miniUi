---
order: 0
title: 基本
---

基本result用法

```jsx
import Result from 'lib/result'
import 'lib/result/style'

class ResultExample extends React.Component {
  render() {
    return (
        <div>
           <Result
            img="//gw.alicdn.com/tps/TB1RUd0LpXXXXbnXXXXXXXXXXXX-328-323.png"
            title="服务繁忙"
            message="已经提交申请，请等待" /> 
        </div>
    )
  }
}

ReactDOM.render(<ResultExample />, mountNode);
```
