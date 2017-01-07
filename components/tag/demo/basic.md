---
order: 0
title: 标签类型
---

标签类型分为选择型标签和只读型标签，只读型标签无交互过程，仅展示内容。

````jsx
import Tag from 'lib/tag'
import 'lib/tag/style'

ReactDOM.render(
  <div className="tag-container">
    <Tag>通用标签</Tag>
    <Tag selected>默认选中</Tag>
    <Tag disabled>失效标签</Tag>
    <Tag small>小号标签</Tag>
  </div>
, mountNode);
````

````css
.tag-container > div{
    margin : 0 0 15px 15px; 
}
````
