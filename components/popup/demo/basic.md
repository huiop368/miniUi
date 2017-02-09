---
order: 0
title: 基本
---

popup基本效果

```jsx
import Popup from 'lib/popup'
import 'lib/popup/style'

class PopupExample extends React.Component {
  constructor (props){
    super(props)      
    this.handlePopup = this.handlePopup.bind(this)
  }
  handlePopup (){
    Popup.show(<div onClick={() => { Popup.hide() }}>Hell, I am popup content</div>)     
  }
  render() {
    return (
        <div>
            <span onClick={this.handlePopup}>显示</span>
        </div>
    )
  }
}

ReactDOM.render(<PopupExample />, mountNode);
```
