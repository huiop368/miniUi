---
order: 0
title: 九宫格
---

Grid基本用法

```jsx
import Grid from 'lib/grid'
import 'lib/grid/style'

const data = Array.from(new Array(9)).map((_val, i) => ({
  icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
  text: `名字${i}`,
}));

class GridExample extends React.Component {
  onClick() {
    alert('clicked');
  }

  render() {
    return (
      <div>
        <Grid data={data} />
      </div>
    );
  }
};

ReactDOM.render(<GridExample />, mountNode);
```
