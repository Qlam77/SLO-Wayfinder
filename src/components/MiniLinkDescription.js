import React from 'react'
import {MenuItem} from 'react-bootstrap'

class MiniLinkDescription extends React.Component {
    render() {
        return(
            <div>
                <b>{this.props.title}</b>
                <br/>
                <div className="testWrap">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default MiniLinkDescription;