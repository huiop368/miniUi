import React, { Component, PropTypes, Children }  from 'react'
import Icon             from 'react-fa'
import classnames       from 'classnames'

export default class ActivityIndicator extends Component {

    static propTypes = {
        prefixCls   : PropTypes.string,
        className   : PropTypes.string,
    };

    static defaultProps = {
        
    };

    render (){
        return (
            <div>
                Hello AI~!!
            </div>        
        )
    }
}
