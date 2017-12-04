import React from 'react'

class ImageLoader extends React.Component {
    render() {
        return(
            <img className="image_resizer highlight-image" src={this.props.src} alt={this.props.name}/>
        );
    }
}

export default ImageLoader;
