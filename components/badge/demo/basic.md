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
            <p style={{height : 20}} />
            <Badge text={100} />
            <Badge text="角标" corner>
                <span style={{ width: '60px', height: '60px', background: '#ddd', display: 'inline-block' }} />
            </Badge>
            <Badge dot>
                <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
            </Badge>
            <p />
            <Badge text={2}>
                <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
            </Badge>
            <p />
            <Badge text="角标" corner>
                <span style={{ width: '120px', height: '60px', background: '#ddd', display: 'inline-block' }} />
            </Badge>
            <p />
            <Badge text="角标" corner>
                <span style={{ width: '90px', height: '90px', background: '#ddd', display: 'inline-block' }} />
            </Badge>
            <p />
            <Badge text="角标" corner>
                <span style={{ width: '60px', height: '90px', background: '#ddd', display: 'inline-block' }} />
            </Badge>
        </div>
    )
  }
}

ReactDOM.render(<BadgeExample />, mountNode);
```
