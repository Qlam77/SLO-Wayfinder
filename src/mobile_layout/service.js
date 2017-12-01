import {Link} from 'react-router-dom';
import React from 'react';
import {Col, Input} from 'react-bootstrap';

class Service extends React.Component {
  render() {
    return (
      <Col xs={this.props.col}>
        <Link to={this.props.linkLocation}>
          <Figure src={this.props.src} alt={this.props.name}/>
        </Link>
      </Col>
    );
  }
};

class Figure extends React.Component {
  render() {
    return (
      <div className="service_container">
        <img className="service_image" src={this.props.src} alt={this.props.name}/>
      </div>
    );
  }
};

export default Service;
