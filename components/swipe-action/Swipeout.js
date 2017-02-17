import React, { Component, PropTypes, Children }  from 'react'
import Hammer           from 'react-hammerjs'
import classnames       from 'classnames'

//@TODO 目前pan的逻辑沿用rc-swipeout, 目测可以简化，后期改进

export default class Swipeout extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        left        : PropTypes.array,
        right       : PropTypes.array,
        autoClose   : PropTypes.bool,
        disabled    : PropTypes.bool,
        coverClosable : PropTypes.bool,
        onClose     : PropTypes.func,
        onOpen      : PropTypes.func
    };

    static defaultProps = {
        prefixCls   : 't-swipe',
        left        : [],
        right       : [],
        autoClose   : false,
        disabled    : false,
        coverClosable : false,
        onClose     : () => {},
        onOpen      : () => {}
    };

    openedLeft  = false;
    openedRight = false;

    componentDidMount (){
        const { left, right } = this.props

        //@TODO 开发环境中offsetWidth不准确, 需用延时准确获取
        setTimeout( () => {
            const width = this.refs.content.offsetWidth

            if (this.refs.cover) {
              this.refs.cover.style.width = `${width}px`
            }

            this.contentWidth = width
            this.btnsLeftWidth = (width / 5) * left.length
            this.btnsRightWidth = (width / 5) * right.length
        }, 60)
    }

    componentWillUnmount (){
         
    }

    handlePanStart = (e) => {
        if (this.props.disabled) {
          return
        }
        this.panStartX = e.deltaX
    }

    handlePan = (e) => {
        const { left, right, disabled } = this.props

        if (disabled) {
          return
        }
        const posX = e.deltaX - this.panStartX

        if (posX < 0 && right.length) {
          this._setStyle(Math.min(posX, 0))
        } else if (posX > 0 && left.length) {
          this._setStyle(Math.max(posX, 0))
        } 
    }

    handlePanEnd = (e) => {
        const { left, right, disabled } = this.props;

        if (disabled) {
          return
        }

        const posX = e.deltaX - this.panStartX
        const contentWidth = this.contentWidth
        const btnsLeftWidth = this.btnsLeftWidth
        const btnsRightWidth = this.btnsRightWidth
        const openX = contentWidth * 0.33
        const openLeft = posX > openX || posX > btnsLeftWidth / 2
        const openRight = posX < -openX || posX < -btnsRightWidth / 2

        if (openRight && posX < 0 && right.length) {
          this.open(-btnsRightWidth, false, true)
        } else if (openLeft && posX > 0 && left.length) {
          this.open(btnsLeftWidth, true, false)
        } else {
          this.close()
        } 
    }

    handleBtnClick = (e, btn) => {
        if(btn.onPress){
            btn.onPress(e)
        }

        if(this.props.autoClose){
            this.close()
        }
    }

    handleCoverClick = () => {
        if(this.props.coverClosable){
            this.close()
        }
    }

    open (value, openedLeft, openedRight){
        if (!this.openedLeft && !this.openedRight) {
          this.props.onOpen()
        }

        this.openedLeft = openedLeft
        this.openedRight = openedRight
        this._setStyle(value)
    }

    close (){
        if (this.openedLeft || this.openedRight) {
          this.props.onClose()
        }
        this._setStyle(0)
        this.openedLeft = false
        this.openedRight = false   
    }

    _getContentEasing (value, limit){
        if (value < 0 && value < limit) {
          return limit - Math.pow(limit - value, 0.85)
        } else if (value > 0 && value > limit) {
          return limit + Math.pow(value - limit, 0.85)
        }

        return value
    }

    _setStyle (value){
        const { left, right } = this.props
        const limit = value > 0 ? this.btnsLeftWidth : -this.btnsRightWidth
        const contentLeft = this._getContentEasing(value, limit)

        this.refs.content.style.left = `${contentLeft}px`
        this.refs.cover.style.display = Math.abs(value) > 0 ? 'block' : 'none'
        this.refs.cover.style.left = `${contentLeft}px`

        if (left.length) {
          const leftWidth = Math.max(Math.min(value, Math.abs(limit)), 0)
          this.refs.left.style.width = `${leftWidth}px`
        }

        if (right.length) {
          const rightWidth = Math.max(Math.min(-value, Math.abs(limit)), 0)
          this.refs.right.style.width = `${rightWidth}px`
        }    
    }

    renderButtons (buttons, ref){
       const prefixCls = this.props.prefixCls

        return (buttons && buttons.length) ? (
          <div className={`${prefixCls}-actions ${prefixCls}-actions-${ref}`} ref={ref}>
            {buttons.map((btn, i) => {
              return (
                <div key={i}
                  className={`${prefixCls}-btn`}
                  style={btn.style}
                  onClick={e => this.handleBtnClick(e, btn)}>
                  <div className={`${prefixCls}-text`}>{btn.text || 'Click'}</div>
                </div>
              )
            })}
          </div>
        ) : null
    }

    render (){
        const { prefixCls, left, right, disabled, coverClosable,
                autoClose, onClose, onOpen, children, ...props } = this.props

        return (left.length || right.length) ? (
            <div className={`${prefixCls}`} {...props}>
                <Hammer
                  direction="DIRECTION_HORIZONTAL"
                  onPanStart={this.handlePanStart}
                  onPan={this.handlePan}
                  onPanEnd={this.handlePanEnd}>
                  <div className={`${prefixCls}-content`} ref="content">
                    {children}
                  </div>
                </Hammer>
                {/*这里可以防止children本身含click事件 */}
                <div className={`${prefixCls}-cover`} ref="cover" onClick={this.handleCoverClick} />
                { this.renderButtons(left, 'left') }
                { this.renderButtons(right, 'right') }
            </div>        
        ) : (
            <div {...props}>{ children }</div>    
        )
    }
}
