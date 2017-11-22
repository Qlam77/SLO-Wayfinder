import React from 'react'
import {MenuItem} from 'react-bootstrap'

class MiniLinkDescription extends React.Component {
    render() {
        return(
            <div>
                <b className="contentSubHeader">{this.props.title}</b>
                <br/>
                <div className="contentPar">
                    <p>{this.props.children}</p>
                </div>
            </div>
        );
    }
}

export default MiniLinkDescription;
