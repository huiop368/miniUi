---
order: 0
title: 搜索栏
---

Search Bar

```jsx

const SearchBarExample = React.createClass({
  onClick() {
    alert('clicked');
  },
  render() {
    return (
      <div>
        Hello Search Bar~!      
      </div>
    );
  },
});

ReactDOM.render(<SearchBarExample />, mountNode);
```
