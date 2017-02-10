import React, {Component}   from 'react'
import MenuItem             from './MenuItem'             

export default class MenuList extends Component {

    get topLevelMenu(){
        const { itemObj } = this.props
        const ret = itemObj.topLevel.topLevel

        return <MenuItem items={ret} />
    }

    get othersMenu (){
        const { itemObj } = this.props
        let keys = Object.keys(itemObj)
        keys.splice(keys.indexOf('topLevel'), 1)

        let ret = []

        keys.forEach( key => {
            const obj = itemObj[key]
            let arr = Object.keys(obj).sort()

            arr = arr.concat(arr.splice(0,1))

            arr.map( (type, i) => {
                const val = obj[type].sort((a,b) => a.english > b.english)

                ret.push(
                    <MenuItem key={i} items={val} title={type} submenu />
                )
            })
        })
        

        return <div>{ret}</div>
    }

    render (){
        return (
            <div>
                {this.topLevelMenu}
                {this.othersMenu}
            </div>
        )
    }
}
