import React from 'react'

class MiniContentWrapper extends React.Component {
    render() {
        return(
            <div className="miniWrapper">
                {this.props.children}
            </div>
        );
    }
}

export default MiniContentWrapper;