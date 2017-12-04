import React from 'react'

/*
    Wraps content with a stye that is for inner contents
 */
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