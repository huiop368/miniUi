---
order: 0
title: 通告栏
---

Notice Bar

```jsx
import NoticeBar from 'lib/notice-bar'
import 'lib/notice-bar/style'

const NoticeBarExample = React.createClass({
  onClick() {
    alert('clicked');
  },
  render() {
    return (
      <div>
          <NoticeBar>
            国庆期间余额宝收益和转出到账时间
          </NoticeBar>
          <NoticeBar type="info" mode="closable">
            国庆期间余额宝收益和转出到账时间
          </NoticeBar>
          <NoticeBar type="info" mode="link" onClick={this.onClick}>
            国庆期间余额宝收益和转出到账时间
          </NoticeBar>  
      </div>
    );
  },
});

ReactDOM.render(<NoticeBarExample />, mountNode);
```
