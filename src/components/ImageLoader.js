import React from 'react'

class ImageLoader extends React.Component {
    render() {
        return(
            <img className="imageResizer highlight-image" src={this.props.src} alt={this.props.name}/>
        );
    }
}

export default ImageLoader;
