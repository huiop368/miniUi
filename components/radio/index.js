import React, { Component, PropTypes, Children }  from 'react'
import classnames                       from 'classnames'

import TtCheckbox   from '../_checkbox'

export default class Radio extends Component {

    static defaultProps = {
        prefixCls : 't-radio'   
    };

    render (){
        const props = {...this.props, type : 'radio'}

        return (
            <TtCheckbox {...props} />
        )
    }
}
