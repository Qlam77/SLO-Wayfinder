import {Link} from 'react-router-dom';
import React from 'react';

/*
    Displays the dimension with their services and makes it clickable
 */
class MobileDimension extends React.Component {
  render() {
    return (
        <Link to={this.props.name}>
          <Figure src={this.props.src} alt={this.props.name}/>
        </Link>
    );
  }
};

class Figure extends React.Component {
  render() {
    return (
      <img src={this.props.src} alt={this.props.name} className="mobile_dimension"/>
    );
  }
};

export default MobileDimension;
