import React from 'react'

/*
    This component styles to image
 */
class DimensionImage extends React.Component {
  render() {
    return (
      <img className="dimension_image" src={this.props.src} alt="Wellbeing"/>
    );
  }
}

export default DimensionImage;
