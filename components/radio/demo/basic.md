---
order: 0
title: 基本
---

raido单选框

```jsx
import Radio from 'lib/radio'
import 'lib/radio/style'

class RadioExample extends React.Component {
  constructor (props){
    super(props)

    this.state = {
        value : 1    
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (i){
      this.setState({value : i})
  }
  
  render() {
    const ret = [0, 1, 2]
    const v = this.state.value

    return (
        <div>
            {
                ret.map(i => {
                    return <Radio key={i} checked={i === v} onChange={() => this.handleChange(i)}>选项{i}</Radio>    
                })    
            }
        </div>
    )
  }
}

ReactDOM.render(<RadioExample />, mountNode);
```
