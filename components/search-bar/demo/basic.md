---
order: 0
title: 搜索栏
---

Search Bar

```jsx
import SearchBar from 'lib/search-bar'
import 'lib/search-bar/style'

const SearchBarExample = React.createClass({
  onClick() {
    alert('clicked');
  },
  render() {
    return (
        <div>
            <SearchBar />
            <p style={{height:'20px'}}></p>
            <SearchBar showCancelButton />
        </div>
    );
  },
});

ReactDOM.render(<SearchBarExample />, mountNode);
```
