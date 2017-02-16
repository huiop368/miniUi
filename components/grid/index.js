import React, { Component, PropTypes, Children }  from 'react'
import Flex         from '../flex'
import classnames   from 'classnames'

export default class Grid extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
        data        : PropTypes.array,
        columnNum   : PropTypes.number,
        hasLine     : PropTypes.bool,
        renderItem  : PropTypes.func,
        onClick     : PropTypes.func
    };

    static defaultProps = {
        prefixCls   : 't-grid',
        columnNum   : 4,
        data        : [],
        hasLine     : true,
        onClick     : () => {}
    };

    clientWidth = document.documentElement.clientWidth;

    render (){
        const { prefixCls, className, data, columnNum, hasLine, onClick } = this.props
        const len = data.length
        const rows = Math.ceil(len / columnNum)

        const renderItem = this.props.renderItem || ((dataItem) => (
            <div
                className={`${prefixCls}-item-contain column-num-${columnNum}`}
                style={{ height: `${this.clientWidth / columnNum}px` }}>
                {
                  React.isValidElement(dataItem.icon) ? dataItem.icon : (
                    <img className={`${prefixCls}-icon`} src={dataItem.icon} />
                  )
                }
                <div className={`${prefixCls}-text`}>{dataItem.text}</div>
            </div>
        ))

        let rowArr = []
        for(let i = 0; i < rows; i++){
            let rowItems = []
            for(let j = 0; j < columnNum; j++){
                const dataIndex = i * columnNum + j
                const item = data[dataIndex]
                if(dataIndex < len){
                    rowItems.push(
                        <Flex.Item
                        key={`griditem-${dataIndex}`}
                        className={`${prefixCls}-item`}
                        onClick={() => onClick(item, dataIndex)}>
                            {renderItem(item, dataIndex)}
                        </Flex.Item> 
                    )
                }else{
                    rowItems.push(<Flex.Item key={`griditem-${dataIndex}`} />)
                }
                
            }

            rowArr.push(<Flex justify="center" align="stretch" key={`gridline-${i}`}>{rowItems}</Flex>)
        }

        const allCls = classnames({
            [prefixCls] : true,
            [className] : !!className,
            [`${prefixCls}-line`] : hasLine
        })
           
        return (
            <div className={allCls}>
                { rowArr }
            </div>        
        )
    }
}
