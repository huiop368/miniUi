import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'
import ReactCarousel                    from 'nuka-carousel'

export default class Carousel extends Component {

    static propTypes = {
        prefixCls       : PropTypes.string,
        className       : PropTypes.string,
        selectedIndex   : PropTypes.number,
        vertical        : PropTypes.bool,
        infinite        : PropTypes.bool,
        autoplay        : PropTypes.bool,
        dots            : PropTypes.bool,
        afterChange     : PropTypes.func,
        beforeChange    : PropTypes.func
    };

    static defaultProps = {
        prefixCls       : 't-carousel',
        selectedIndex   : 0,
        vertical        : false,
        autoplay        : true,
        infinite        : false,
        dots            : true,
        edgeEasing      : 'linear',
        cellAlign       : 'center',
        afterChange     : () => {},
        beforeChange    : () => {}
    };

    constructor (props){
        super(props)

        this.state = {
            selectedIndex : props.selectedIndex
        }
    }

    handleChange = (index) => {
        this.setState({
            selectedIndex: index
        }, () => {
            if (this.props.afterChange) {
                this.props.afterChange(index)
            }
        }) 
    }

    get decorators(){
        const { dots, prefixCls } = this.props
        const currentIndex = this.state.selectedIndex

        let decorators = []

        if(dots){
           decorators = [{
                component: class Decorator extends Component{
                  render() {
                    const { slideCount, slidesToScroll } = this.props
                    let arr = []
                    for (let i = 0; i < slideCount; i += slidesToScroll) {
                      arr.push(i)
                    }
                    return (
                      <div className={`${prefixCls}-wrap`}>
                        {
                          arr.map( index => {
                            const dotCls = classnames({
                              [`${prefixCls}-wrap-dot`]: true,
                              [`${prefixCls}-wrap-dot-active`]: index === currentIndex,
                            })
                            return (
                              <div className={dotCls} key={index}>
                                <span></span>
                              </div>
                            )
                          })
                        }
                      </div>
                    )
                  }
                },
                position: 'BottomCenter'
            }]       
        }

        return decorators
    }

    render (){
        const { prefixCls, className, vertical } = this.props
        const deletedProps = ['infinite', 'selectedIndex', 'beforeChange', 'afterChange', 'dots']

        let props = {
            ...this.props, 
            wrapAround: this.props.infinite,
            slideIndex: this.props.selectedIndex,
            beforeSlide: this.props.beforeChange
        }

        deletedProps.forEach(prop => {
            if (props.hasOwnProperty(prop)) {
                delete props[prop]
            }
        })

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className,
            [`${prefixCls}-vertical`]: vertical
        })

        return (
            <ReactCarousel
                {...props}
                className={allCls}
                decorators={this.decorators}
                afterSlide={this.handleChange}
            />
        )
    }
}
