---
order: 0
title: 基本
---

基本评分体系

```jsx
import Star from 'lib/star'
import 'lib/star/style'

class StarExample extends React.Component {
  constructor (props){
    super(props) 

    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (i){
    console.log(i) 
  }
  render() {
    return (
        <div>
            <Star onChange={this.handleChange} />
            <Star size="large" starNum={7} activeKey="3" />
        </div>
    )
  }
}

ReactDOM.render(<StarExample />, mountNode);
```
