import React from 'react';
import {Col} from 'react-bootstrap';

class Section extends React.Component {
  render() {
    return (
      <Col xs={this.props.col}>
        <Figure src={this.props.src} alt={this.props.name}/>
      </Col>
    );
  }
};

class Figure extends React.Component {
  render() {
    return (
      <img className="mobile_service_image" src={this.props.src} alt={this.props.name}/>
    );
  }
};

export default Section;
