---
order: 0
title: 基本
---

navbar导航栏

```jsx
import NavBar from 'lib/nav-bar'
import 'lib/nav-bar/style'

class NavBarExample extends React.Component {
  render() {
    return (
        <div>
            <NavBar leftContent="返回" rightContent="寄件记录">Title</NavBar>
        </div>
    )
  }
}

ReactDOM.render(<NavBarExample />, mountNode);
```
