import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Section from './section';
import Background from '../components/Background';
import Header from '../components/Header';
import DimensionPar from '../components/DimensionPar';

class MobileLanding extends React.Component {
  render() {
    return (
      <div>
        <Background/>
        <Header size="150"/>
        {/*<SearchBar/>*/}
        <ServiceContainer/>
      </div>
    );
  }
};

class ServiceContainer extends React.Component {
  render() {
    return (
      <div className="mobile_dimensions_container">
      <div className="dimension_intro">
        <Row>
          <Col xs={12}><DimensionPar header="Find the Balance in All Eight Dimensions of Your Wellbeing!" cont="BCIT values the whole student and wants to see you thrive in all eight dimensions of your wellbeing. Click on the boxes below to learn about the range of free services and supports that can help you succeed in each dimension of wellbeing throughout your time at BCIT."/></Col>
        </Row>
      </div>
        <Row>
          <Col xs={6}><Section src="images/intellectual.jpg" name="Intellectual"/></Col>
          <Col xs={6}><Section src="images/occupational.jpg" name="Occupational"/></Col>
          <Col xs={6}><Section src="images/physical.jpg" name="Physical"/></Col>
          <Col xs={6}><Section src="images/financial.jpg" name="Financial"/></Col>
          <Col xs={6}><Section src="images/psychological.jpg" name="Psychological"/></Col>
          <Col xs={6}><Section src="images/spiritual.jpg" name="Spiritual"/></Col>
          <Col xs={6}><Section src="images/social.jpg" name="Social"/></Col>
          <Col xs={6}><Section src="images/environmental.jpg" name="Environmental"/></Col>
        </Row>
      </div>

    );
  }
};

export default MobileLanding;
