import { Link,  BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Row, Col, Input, Accordion, Panel} from 'react-bootstrap';
import Service from './service';
import MobileHeader from './mobile_header';
import MobileRelatedLinks from "./mobile_related_links";
import Section from "./imgSection";
import Background from '../components/Background';

class ServiceInfo extends React.Component {
  render() {
    return(
      <div>
        <Background/>
        <MobileHeader/>
        <ServiceContainer db={this.props.db} dimension={this.props.dimension} title={this.props.title}/>
          Related Links:
        <MobileRelatedLinks db={this.props.db} service={this.props.dimension}/>
          <Row>
            <Col xs={12}>
                <Link to="/">Back to home</Link>
            </Col>
          </Row>
      </div>
    );
  }
};

class ServiceContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkDescription: [],
            imgItem: ''
        }
    };

    componentDidMount() {
        const previousList = this.state.linkDescription;
        const rootRef = this.props.db.database().ref().child("1");
        const subRef = rootRef.child("Services");
        const childRef = subRef.child(this.props.title);
        childRef.once('value', snap => {
            previousList.push({
                serviceName: snap.key,
                name: snap.val().Name,
                desc: snap.val().Desc,
                link: snap.val().Link,
                img: snap.val().img,
                category: snap.val().Category
            });

            this.setState({
                linkDescription: previousList,
                imgItem: snap.val().img
            });
        });
    }
  render() {
    const containerStyle = {
      backgroundColor: "#aaaaaa",
      // padding: 100,
      // paddingTop: 10
    }

    const linkDescription = this.state.linkDescription.map((position, index) =>
        <p>
            {position.desc}
        </p>
      );
      return (
      <div style={containerStyle} className="center">
          <div className="contStyle">
              <Row>
                  {this.props.title}
              </Row>
            <Row>
              <Section src={this.state.imgItem} col={12}/>
            </Row>
            <Row>
                {linkDescription}
            </Row>
            <Row>
              <InfoContainer db={this.props.db} title={this.props.title}/>
            </Row>
          </div>
      </div>
    );
  }
}

class InfoContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            locationList: []
        }
    };

    componentDidMount() {
        const previousList = this.state.locationList;
        const rootRef = this.props.db.database().ref().child("1");
        const subRef = rootRef.child("Services");
        const childRef = subRef.child(this.props.title);
        const locRef = childRef.child("Locations");
        locRef.once('value', snap => {
            snap.forEach((childSnapshot) => {
                previousList.push({
                    locationName: childSnapshot.key,
                    email: childSnapshot.val().Email,
                    hours: childSnapshot.val().Hours,
                    location: childSnapshot.val().Location,
                    contact: childSnapshot.val().Numbers,
                });
            });
            this.setState({
                locationList: previousList
            });
        });
    }
  render() {
      const singleLocationList = this.state.locationList.map((position, index) =>
          <Accordion defaultActiveKey="1">
              <Panel key={index} header={position.locationName} eventKey="1">
                  <ul>
                      <li><b>Location:</b></li>
                      <li>{position.location}</li>
                      <li><b>Operation Hours:</b></li>
                      <li><i>{position.hours}</i></li>
                      <li><b>Contact:</b></li>
                      <li>Phone:</li>
                      <li>{position.contact}</li>
                      <li>Email:</li>
                      <li>{position.email}</li>
                  </ul>
              </Panel>
          </Accordion>
      );
      const locationList = this.state.locationList.map((position, index) =>
          <Panel key={index} header={position.locationName} eventKey={index}>
              <ul>
                  <li><b>Location:</b></li>
                  <li>{position.location}</li>
                  <li><b>Operation Hours:</b></li>
                  <li><i>{position.hours}</i></li>
                  <li><b>Contact:</b></li>
                  <li>Phone:</li>
                  <li>{position.contact}</li>
                  <li>Email:</li>
                  <li>{position.email}</li>
              </ul>
          </Panel>
      );
      if (this.state.locationList.length == 1) {
        return (
            <div>
                {singleLocationList}
            </div>
        );
      } else {
          return (
              <Accordion>
                  {locationList}
              </Accordion>
          );
      }
  }
};

export default ServiceInfo;
