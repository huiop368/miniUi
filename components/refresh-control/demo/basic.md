---
order: 0
title: 基本
---

refresh-control下拉刷新

```jsx
import RefreshControl from 'lib/refresh-control'
import 'lib/refresh-control/style'

class RefreshExample extends React.Component {
  constructor (props){
    super(props) 
    this.state = {
        list : [1,2,3,4,5,6,7]    
    }
    this.onRefresh = this.onRefresh.bind(this)
  }
  onRefresh (){
    let list = [1,2,3,4,5]
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            this.setState({
                list : this.state.list.concat(list) 
            })            
            resolve()
        }, 2e3)
    })
  }
  render() {
    return (
        <div>
            <RefreshControl onRefresh={this.onRefresh}>
                {
                    this.state.list.length ? 
                        <ul className="list">
                            {
                                this.state.list.map((item,i) => {
                                    return <li key={i}>{item}</li>    
                                })    
                            }
                        </ul> : null
                }
            </RefreshControl>
        </div>
    )
  }
}

ReactDOM.render(<RefreshExample />, mountNode);
```

```css
.list li{
   background-color : #ccc; 
}
```
