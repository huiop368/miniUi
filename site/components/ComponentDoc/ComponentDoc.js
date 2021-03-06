import React, { Component } from 'react'
import toReactComponent     from 'jsonml-to-react-component'
import demosData            from '_data/demos-list'
import Demo                 from 'components/Demo'
import classes              from './ComponentDoc.scss'

export default class ComponentDoc extends Component {

    constructor (props){
        super(props)

        const { doc : { meta } } = props
        const path = meta.fileName.split('/')[1]

        this.state = {
            currentIndex : 0,
            iframeUrl : `/preview.html#/${path}/0`
        }
    }

    componentDidMount (){
        
    }

    componentWillReceiveProps (nextProps){
        const { doc : { meta } } = nextProps
        const path = meta.fileName.split('/')[1]

        this.setState({
            currentIndex : 0,
            iframeUrl : `/preview.html#/${path}/0`
        })
    }

    handleClickDemo = (i, e) => {
        const { doc : { meta } } = this.props
        const path = meta.fileName.split('/')[1]

        this.setState({
            currentIndex : i,
            iframeUrl : `/preview.html#/${path}/${i}`
        })
    }

    render (){
        const { doc : { meta, description, intro, api } } = this.props
        const { currentIndex, iframeUrl } = this.state
        const demos = (demosData[meta.fileName] || []).filter(demo => !demo.meta.hidden)
        const demoSort = demos.sort((a, b) => parseInt(a.meta.order, 10) - parseInt(b.meta.order, 10) )

        return (
            <article>
                <section className="markdown">
                    <h1 className="section-title">
                        {meta.chinese || meta.english}
                    </h1>
                    {
                     toReactComponent(['section', { className: 'markdown' }].concat(description))
                    }

                    <section className="demo-title-wrapper">
                        <h2 className="demo-title">代码演示</h2>
                    </section>
                </section>

                <div className="clearfix" style={{ paddingRight: 380 }}>
                    <div className={classes.demo_code}>
                        {
                            demoSort.map((data, i) =>
                                <Demo key={i} {...data} pathname={location.pathname} onClick={e => this.handleClickDemo(i, e)} active={currentIndex === i} />
                            )
                        }
                    </div>

                    <div className={classes.demo_preview}>  
                        <div className={classes.demo_preview_wrapper}>
                            <div className={classes.demo_preview_header}>
                                <img width="290px" src="https://os.alipayobjects.com/rmsportal/VfVHYcSUxreetec.png" style={{'margin': '0px 2px'}} />
                            </div>
                            
                            <div className={classes.demo_preview_scroller}>
                                <iframe id="demoFrame" name="demoFrame" style={{width: '318px', height: '548px'}} src={iframeUrl}></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {
                  toReactComponent(['section', {
                    //id: 'api',
                    className: 'markdown api-area',
                  }].concat(api || [])
                  )
                }
            </article>        
        )
    }
}
