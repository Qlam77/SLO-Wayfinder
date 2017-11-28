import { Link,  BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Row, Col, Input} from 'react-materialize';
import Section from './section';
import Service from './service';
import MobileHeader from './mobile_header';
import firebase from 'firebase'
import DimensionImg from './dimensionImg'
import RelatedLinks from './mobile_related_links'
import Background from '../components/Background';

class ServiceSelector extends React.Component {
  render() {
    return(
      <div>
        <Background/>
        <MobileHeader/>
        <ServiceContainer db={this.props.db} service={this.props.service} />
      </div>
    );
  }
};

class ServiceContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dimensionList: []
        }
    };


    render() {
    const containerStyle = {
      backgroundColor: "#aaaaaa",
      padding: 50
    }
    return (
      <div style={containerStyle} className="center">
        <Row>
            <DimensionImg db={this.props.db} service={this.props.service}/>
        </Row>
        <Row>
            <RelatedLinks db={this.props.db} service={this.props.service}/>
        </Row>
      </div>
    );
  }
}

export default ServiceSelector;
