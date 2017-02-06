---
order: 0
title: 基本
---

TabBar标签栏

```jsx
import TabBar from 'lib/tab-bar'
import 'lib/tab-bar/style'

class TabBarExample extends React.Component {
  render() {
    return (
        <div>
            <TabBar />
        </div>
    )
  }
}

ReactDOM.render(<TabBarExample />, mountNode);
```
