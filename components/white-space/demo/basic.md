---
order: 0
title: 基本
---

上下留白 ```<WhiteSpace size='md' />```


````jsx
import WhiteSpace from 'lib/white-space'
import 'lib/white-space/style'

const WhiteSpaceExample = React.createClass({
  render() {
    return (
      <div className="button-container">
        <WhiteSpace />
        Hello
        <WhiteSpace />
      </div>
    );
  },
});

ReactDOM.render(<WhiteSpaceExample />, mountNode);
````
