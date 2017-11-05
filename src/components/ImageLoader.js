import React from 'react'

class ImageLoader extends React.Component {
    render() {
        const imageResizer = {
            width: "100%",
            height: "100%",
        };
        return(
            <img style={imageResizer} src={this.props.src} alt={this.props.name}/>
        );
    }
}

export default ImageLoader;