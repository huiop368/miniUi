---
order: 0
title: 基本
---

Flex基本布局

```jsx
import Flex from 'lib/flex'
import 'lib/flex/style'

const Item = Flex.Item

const PlaceHolder = (props) => (
  <div style={{
    backgroundColor: '#ebebef',
    color: '#bbb',
    textAlign: 'center',
    height: '30px',
    lineHeight: '30px',
    width: '100%',
  }} {...props}
  >Item</div>
);

class FlexExample extends React.Component {
  constructor (props){
    super(props)
  }
  render() {
    return (
        <div className="flex-container">
            <div className="title">基本</div>
            <Flex>
                <Item><PlaceHolder /></Item>
                <Item><PlaceHolder /></Item>
            </Flex>
            <div style={{height : '10px'}} />
            <Flex>
                <Item><PlaceHolder /></Item>
                <Item><PlaceHolder /></Item>
                <Item><PlaceHolder /></Item>
            </Flex>
        </div>
    )
  }
}

ReactDOM.render(<FlexExample />, mountNode);
```

```css
.flex-container {
  padding: 0.18rem;
}
.flex-container .title {
  color: #888;
  margin: 0.20rem 0;
}
.flex-container .inline {
  width: 1.6rem!important;
  margin: 0.18rem 0.18rem 0.18rem 0;
}
.flex-container .small {
  height: 0.4rem!important;
  line-height: 0.4rem!important;
}
```
