---
order: 0
title: 基本
---

TabBar标签栏

```jsx
import TabBar from 'lib/tab-bar'
import 'lib/tab-bar/style'

const Item = TabBar.Item

class TabBarExample extends React.Component {
  render() {
    return (
        <TabBar>
            <Item title="生活" key="1">
                <div>我是生活</div>
            </Item>
            <Item title="口碑" key="2">
                <div>我是口碑</div>
            </Item>
        </TabBar>
    )
  }
}

ReactDOM.render(<TabBarExample />, mountNode);
```
