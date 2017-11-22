import { Link,  BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Row, Col, Input} from 'react-materialize';
import Service from './service';
import MobileHeader from './mobile_header';

class ServiceInfo extends React.Component {
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
      padding: 100,
      paddingTop: 10
    }
    return (
      <div style={containerStyle} className="center">
        <Row >
          <Service src="images/intellectual.jpg" name="Intellectual" col={12}/>
        </Row>
        <Row>
          <InfoContainer/>
        </Row>
      </div>
    );
  }
}

class InfoContainer extends React.Component {
  render() {
    const contStyle = {
      backgroundColor: "#ffffff",
      borderRadius: 5,
      margin: 10,
      padding: "10px 10px"
    }
    return(
      <div style={contStyle}>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    );
  }
};

export default ServiceInfo;
