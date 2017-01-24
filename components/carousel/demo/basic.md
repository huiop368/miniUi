---
order: 0
title: 示例
---

Carousel

```jsx
import Carousel from 'lib/carousel'
import 'lib/carousel/style'

const CarouselExmple = React.createClass({
  render() {
    return (
      <div>
        <Carousel
        className="my-carousel" autoplay={false} infinite
        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange={(index) => console.log('slide to', index)}
        >
        {['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'AiyWuByWklrrUDlFignR'].map((ii) => (
          <a href="#" key={ii}><img src={`https://zos.alipayobjects.com/rmsportal/${ii}.png`} width="318" /></a>
        ))}
      </Carousel>
      </div>
    );
  },
});

ReactDOM.render(<CarouselExmple />, mountNode);
````
