import React from 'react';
import {Row, Col, Accordion, Panel} from 'react-bootstrap';
import Header from '../shared_components/Header';
import MobileRelatedLinks from "./MobileRelatedLinks";
import DimensionPortraitImage from "./DimensionPortraitImage";
import Background from '../shared_components/Background';

class ServiceInfo extends React.Component {
  render() {
    return(
      <div>
        <Background/>
        <Header size="150"/>
        <ServiceContainer db={this.props.db} dimension={this.props.dimension} title={this.props.title} name={this.props.name}/>
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
                link: snap.val().Link.replace(/^https?:\/\//, ''),
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
    const linkDescription = this.state.linkDescription.map((position, index) =>
        <p key={index} className="mobile_service_desc">
            {position.desc}
        </p>
      );
    const link = this.state.linkDescription.map((position, index) =>
        <a key={index} className="service_link" rel="external" href={"https://" + position.link}>Learn more</a>
    );
      return (
        <div className="mobile_dimensions_container">
        <h2 className="mobile_service_header">{this.props.name}</h2>
            <Row>
              <Col xs={12}>
                <DimensionPortraitImage src={this.state.imgItem} />
              </Col>
              <Col xs={12}>
                  {linkDescription}
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                  {link}
              </Col>
            </Row>
            <div className="mobile_accordion">
              <InfoContainer db={this.props.db} title={this.props.title}/>
            </div>
            <h4>Related Links:</h4>
            <MobileRelatedLinks db={this.props.db} service={this.props.dimension}/>
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
          <Accordion key={index} defaultActiveKey="1">
              <Panel header={position.locationName} eventKey="1">
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
      if (this.state.locationList.length === 1) {
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
