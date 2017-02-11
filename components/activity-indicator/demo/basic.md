---
order: 0
title: 基本
---

基本活动指示器

```jsx
import ActivityIndicator from 'lib/activity-indicator'
import 'lib/activity-indicator/style'

class ActivityIndicatorExample extends React.Component {
  render() {
    return (
        <div>
            <ActivityIndicator />
        </div>
    )
  }
}

ReactDOM.render(<ActivityIndicatorExample />, mountNode);
```