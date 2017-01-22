---
order: 0
title: 基本
---

Accordion

```jsx
import Accordion from 'lib/accordion'
import 'lib/accordion/style'

const Panel = Accordion.Panel

const AccordionExmple = React.createClass({
  render() {
    return (
      <Accordion className="my-accordion">
        <Panel header="标题一" className="pad">
            Hello panel 1
        </Panel>
        <Panel header="标题二" className="pad">
            Hello panel 2 
        </Panel>
        <Panel header="标题三" className="pad">
            Hello panel 3
        </Panel>
      </Accordion>
    );
  },
});

ReactDOM.render(<AccordionExmple />, mountNode);
````
```css
.my-accordion .pad .t-accordion-content-box {
  padding: 10px;
}
.my-accordion .my-list .t-list-body {
  border-top: 0;
}
.my-accordion .my-list .t-list-body:after {
  border-bottom: 0;
}
```
