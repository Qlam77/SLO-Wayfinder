import React from 'react'
import ImageLoader from "./ImageLoader";

/*
    Component that will style dimensions links on the main landing page
 */
class desktop_figure extends React.Component {
    render() {
        return(
            <div>
                <ImageLoader src={this.props.src} name={this.props.name}/>
                <p className="image_caption">{this.props.children}</p>
            </div>
        );
    }
}

export default desktop_figure;
