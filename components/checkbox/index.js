import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

import TtCheckbox   from '../_checkbox'

export default class Checkbox extends Component {

    static defaultProps = {
        prefixCls : 't-checkbox'
    }

    render (){
        return (
            <TtCheckbox {...this.props} />        
        )          
    }
}
