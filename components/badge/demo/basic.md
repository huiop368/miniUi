---
order: 0
title: 基本
---

badge徽标数

```jsx
import Badge from 'lib/badge'
import 'lib/badge/style'

class BadgeExample extends React.Component {
  render() {
    return (
        <div>
            <Badge text={100} />
            <Badge dot>
                <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
            </Badge>
        </div>
    )
  }
}

ReactDOM.render(<BadgeExample />, mountNode);
```
