---
order: 0
title: 选项卡
---

多用于页面的内容区块，起着控制小范围内的大块内容的分组和隐藏，起着保持界面整洁的作用。


````jsx
import Tabs from 'lib/tabs'
import 'lib/tabs/style'

const TabPanel = Tabs.TabPanel

const TabExample = React.createClass({
  render() {
    return (
      <Tabs>
        <TabPanel tab="选项卡一" key="1">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡一内容
            </div>
          </TabPanel>
          <TabPanel tab="选项卡二" key="2">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '2rem' }}>
               选项卡二内容
            </div>
          </TabPanel>
      </Tabs>
    );
  }
})

ReactDOM.render(<TabExample />, mountNode);
````
