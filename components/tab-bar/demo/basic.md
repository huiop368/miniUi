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
            <Item title="生活" key="1"
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/cKhfyLTszUeFARPgfokz.png' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/bqUXyjiOyKrXRfiIZVsZ.png' }}
            >
                <div>我是生活</div>
            </Item>
            <Item title="口碑" key="2"
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/cKhfyLTszUeFARPgfokz.png' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/bqUXyjiOyKrXRfiIZVsZ.png' }}
            >
                <div>我是口碑</div>
            </Item>
            <Item title="朋友" key="3"
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/cKhfyLTszUeFARPgfokz.png' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/bqUXyjiOyKrXRfiIZVsZ.png' }}
            >
                <div>我是朋友</div>
            </Item>
            <Item title="我的" key="4"
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/cKhfyLTszUeFARPgfokz.png' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/bqUXyjiOyKrXRfiIZVsZ.png' }}
            >
                <div>我是我的</div>
            </Item>
        </TabBar>
    )
  }
}

ReactDOM.render(<TabBarExample />, mountNode);
```
