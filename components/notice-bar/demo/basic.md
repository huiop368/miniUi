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
          <p style={{height : 10}} />
          <NoticeBar mode="closable" type="info">
            国庆期间余额宝收益和转出到账时间
          </NoticeBar>
          <p style={{height : 10}} />
          <NoticeBar mode="link" type="success" onClick={this.onClick}>
            国庆期间余额宝收益和转出到账时间
          </NoticeBar>  
      </div>
    );
  },
});

ReactDOM.render(<NoticeBarExample />, mountNode);
```
