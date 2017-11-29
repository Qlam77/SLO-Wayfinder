import {Link} from 'react-router-dom';
import React from 'react';
import {Col, Input} from 'react-bootstrap';

class Section extends React.Component {
  render() {
    return (
        <Link exact to={this.props.name}>
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

export default Section;
