import { Link,  BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Row, Col, Input, Accordion, Panel} from 'react-bootstrap';
import Service from './service';
import MobileHeader from './mobile_header';

class ServiceInfo extends React.Component {
  render() {
    return(
      <div>
        <MobileHeader/>
        <ServiceContainer db={this.props.db} service={this.props.service} name={this.props.name}/>
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
        const childRef = subRef.child(this.props.name);
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
      padding: 100,
      paddingTop: 10
    }

    const linkDescription = this.state.linkDescription.map((position, index) =>
        <p>
            {position.desc}
        </p>
      );
      return (
      <div style={containerStyle} className="center">
        <Row>
          <Service src={this.state.imgItem} linkLocation={"/" + this.props.service} col={12}/>
        </Row>
        <Row>
            {linkDescription}
        </Row>
        <Row>
          <InfoContainer db={this.props.db} information={this.props.name}/>
        </Row>
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
        const childRef = subRef.child(this.props.information);
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
    const contStyle = {
      backgroundColor: "#ffffff",
      borderRadius: 5,
      margin: 10,
      padding: "10px 10px"
    }
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
    return(
      <div style={contStyle}>
        <Accordion>
            {locationList}
        </Accordion>
      </div>
    );
  }
};

export default ServiceInfo;
