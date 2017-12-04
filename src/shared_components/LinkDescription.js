import React from 'react'
import {MenuItem} from 'react-bootstrap'

/*
    Displays the link description for the dropdown
 */
class LinkDescription extends React.Component {
    render() {
        return(
            <MenuItem header>
                <h2 className="content_header"><b>{this.props.title}</b></h2>
                {this.props.children}
            </MenuItem>
        );
    }
}

export default LinkDescription;
