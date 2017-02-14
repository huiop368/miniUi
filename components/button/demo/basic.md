---
order: 0
title: 类型、尺寸
---

按钮

````jsx
import Button from 'lib/button'
import 'lib/button/style'

const ButtonExample = React.createClass({
  render() {
    return (<div className="btn-container">
      <div style={{ margin: '0 10px' }}>
        <Button data-id="007" className="btn">default 按钮</Button>
        <Button type="primary" className="btn">primary 按钮</Button>
        <Button disabled className="btn">disabled 按钮</Button>
        <Button type="ghost" className="btn">ghost 按钮</Button>
      </div>
        
      <div style={{ marginTop: 20 }}>
        <Button inline className="btn">inline 按钮</Button>
        <Button inline size="small" className="btn">inline 按钮</Button>
      </div>
    </div>);
  },
});
ReactDOM.render(<ButtonExample />, mountNode);
````

```css
.btn-container {
  margin: 16px 0;
}
.btn-container .btn {
  margin: 8px 0;
}
```
