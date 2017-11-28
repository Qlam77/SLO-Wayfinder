import React from 'react'
import {MenuItem} from 'react-bootstrap'

class LinkDescription extends React.Component {
    render() {
        return(
            <MenuItem header>
                <h2 className="contentHeader"><b>{this.props.title}</b></h2>
                {this.props.children}
            </MenuItem>
        );
    }
}

export default LinkDescription;
