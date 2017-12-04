import React from 'react';

class DimensionPortraitImage extends React.Component {
  render() {
    return (
      <img className="mobile_service_image" src={this.props.src} alt={this.props.name}/>
    );
  }
};

export default DimensionPortraitImage;
