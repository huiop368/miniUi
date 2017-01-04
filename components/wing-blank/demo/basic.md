---
order: 0
title: 基本
---

```<WingBlank size='md'>...</WingBlank>```

````jsx
import WingBlank from 'lib/wing-blank'
import 'lib/wing-blank/style'

const WingBlankExample = React.createClass({
  render() {
    return (
      <WingBlank>
        hello
      </WingBlank>
    );
  },
});

ReactDOM.render(<WingBlankExample />, mountNode);
