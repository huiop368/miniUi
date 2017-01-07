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
      <div style={{ margin: '0 0.16rem' }}>
        <Button data-id="007">Normal</Button>
        <Button type="primary">Primary</Button>
      </div>
    </div>);
  },
});
ReactDOM.render(<ButtonExample />, mountNode);
````
