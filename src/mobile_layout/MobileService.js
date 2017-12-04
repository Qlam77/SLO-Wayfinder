import {Link} from 'react-router-dom';
import React from 'react';
import {Col} from 'react-bootstrap';

/*
    Displays the services with their associated links on the page
 */
class Service extends React.Component {
  render() {
    return (
      <Col xs={this.props.col}>
        <Link to={this.props.linkLocation}>
            <Figure src={this.props.src} alt={this.props.name}>{this.props.children}</Figure>
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
          <div>
              {this.props.children}
          </div>
      </div>
    );
  }
};

export default Service;
