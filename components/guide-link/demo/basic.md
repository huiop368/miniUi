---
order: 0
title: 引导链接
---

Guide Link

```jsx
import GuideLink from 'lib/guide-link'
import 'lib/guide-link/style'

const GuideLinkExample = React.createClass({
  onClick() {
    alert('clicked');
  },
  render() {
    return (
      <div>
        <GuideLink text="文字链接文字链接" href="" /> 
        <GuideLink text="文字链接文字链接" href="http://baidu.com" type="arrow" /> 
        <GuideLink text="文字链接文字链接" href="" type="question" /> 
      </div>
    );
  },
});

ReactDOM.render(<GuideLinkExample />, mountNode);
```
