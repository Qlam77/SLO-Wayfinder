import React from 'react'

class MiniContentWrapper extends React.Component {
    render() {
        return(
            <div className="mini_wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default MiniContentWrapper;