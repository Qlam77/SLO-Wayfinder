import { Link,  BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Row, Col, Input} from 'react-materialize';
import Section from './section';
import Service from './service';
import MobileHeader from './mobile_header';

class ServiceSelector extends React.Component {
  render() {
    return(
      <div>
        <MobileHeader/>
        <ServiceContainer src="images/intellectual.jpg" name="Intellectual"/>
      </div>
    );
  }
};

class ServiceContainer extends React.Component {
  render() {
    const containerStyle = {
      backgroundColor: "#aaaaaa",
      padding: 50
    }
    return (
      <div style={containerStyle} className="center">
        <Row >
          <Section src="images/intellectual.jpg" name="Intellectual" col={12}/>
        </Row>
        <Row>
          <Service src="images/intellectual.jpg" name="Intellectual" col={4}/>
          <Service src="images/intellectual.jpg" name="Intellectual" col={4}/>
          <Service src="images/intellectual.jpg" name="Intellectual" col={4}/>
          <Service src="images/intellectual.jpg" name="Intellectual" col={4}/>
          <Service src="images/intellectual.jpg" name="Intellectual" col={4}/>
          <Service src="images/intellectual.jpg" name="Intellectual" col={4}/>
          <Service src="images/intellectual.jpg" name="Intellectual" col={4}/>
          <Service src="images/intellectual.jpg" name="Intellectual" col={4}/>
          <Service src="images/intellectual.jpg" name="Intellectual" col={4}/>
        </Row>
      </div>
    );
  }
}

export default ServiceSelector;
