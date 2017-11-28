import {Link} from 'react-router-dom';
import React from 'react';
import {Col, Input} from 'react-bootstrap';

class Section extends React.Component {
  render() {
    return (
      <Col xs={this.props.col}>
        <Link exact to={this.props.name}>
          <Figure src={this.props.src} alt={this.props.name}/>
        </Link>
      </Col>
    );
  }
};

class Figure extends React.Component {
  render() {
    const figureStyle = {
      height: "150px",
      width: "150px",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)"
    };
    return (
      <img style={figureStyle} src={this.props.src} alt={this.props.name}/>
    );
  }
};

export default Section;
