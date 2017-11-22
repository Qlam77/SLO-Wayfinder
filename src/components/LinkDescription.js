import React from 'react'
import {MenuItem} from 'react-bootstrap'

class LinkDescription extends React.Component {
    render() {
        return(
            <MenuItem header>
                <h4><b>{this.props.title}</b></h4>
                <br/>
                {this.props.children}
            </MenuItem>
        );
    }
}

export default LinkDescription;