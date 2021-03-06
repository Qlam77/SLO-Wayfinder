import React from 'react'

/*
    Adds a description to the dimension with styling
 */
class MiniLinkDescription extends React.Component {
    render() {
        return(
            <div>
                <b className="content_sub_header">{this.props.title}</b>
                <br/>
                <div className="content_par">
                    <p>{this.props.children}</p>
                </div>
            </div>
        );
    }
}

export default MiniLinkDescription;
