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
            <NavBar>Title</NavBar>
        </div>
    )
  }
}

ReactDOM.render(<NavBarExample />, mountNode);
```
