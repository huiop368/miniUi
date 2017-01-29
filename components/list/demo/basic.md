---
order: 0
title: 示例
---

List

```jsx
import List from 'lib/list'
import 'lib/list/style'

const ListExample = React.createClass({
  render() {
    return (
    <div>
        <List header="header" footer="footer">Hello World</List>
    </div>);
  }
});

ReactDOM.render(<ListExample />, mountNode);
````
````css
.my-list .spe .am-list-extra {
  flex-basis: initial;
}
````
