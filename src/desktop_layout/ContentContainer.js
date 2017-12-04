import React from 'react'

/*
    Contents in this container will be styled with the CSS: wrapper
 */
class ContentContainer extends React.Component {
    render() {
        return(
            /*
                Styles children with wrapper
             */
            <div className="wrapper">
                {this.props.children}
            </div>
        );
    }
}

export default ContentContainer;