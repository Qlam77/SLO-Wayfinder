import React from 'react'
import ImageLoader from "./ImageLoader";

class desktop_figure extends React.Component {
    render() {
        return(
            <div>
                <ImageLoader src={this.props.src} name={this.props.name}/>
                <p className="imageCaption">{this.props.children}</p>
            </div>
        );
    }
}

export default desktop_figure;
