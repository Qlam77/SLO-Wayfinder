import { Link,  BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Row, Col, Input} from 'react-materialize';
import Section from './section';
import MobileHeader from './mobile_header';
import SearchBar from './searchbar';

class MobileLanding extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader/>
        <SearchBar/>
        <ServiceContainer/>
      </div>
    );
  }
};

class ServiceContainer extends React.Component {
  render() {
    const containerStyle = {
      backgroundColor: "#aaaaaa"
    }
    return (
      <Row style={containerStyle} className="center">
        <Section src="images/intellectual.jpg" name="Intellectual" col={6}/>
        <Section src="images/occupational.jpg" name="Occupational" col={6}/>
        <Section src="images/physical.jpg" name="Physical" col={6}/>
        <Section src="images/financial.jpg" name="Financial" col={6}/>
        <Section src="images/psychological.jpg" name="Psychological" col={6}/>
        <Section src="images/spiritual.jpg" name="Spiritual" col={6}/>
        <Section src="images/social.jpg" name="Social" col={6}/>
        <Section src="images/environmental.jpg" name="Environmental" col={6}/>
      </Row>
    );
  }
};

export default MobileLanding;
