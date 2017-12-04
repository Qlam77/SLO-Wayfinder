import React from 'react';
import {Col, Panel, Accordion} from 'react-bootstrap';
import MiniWrapper from '../desktop_layout/ContentWrapper';

class ContentHeader extends React.Component {
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
        //DO FIREBASE POPULATE FUNCTION HERE FOR EACH CATEGORY
        const singleLocationList = this.state.locationList.map((position, index) =>
            <Accordion key={index} defaultActiveKey="1">
                <Panel header={position.locationName} eventKey="1">
                    <ul className="accordion_text">
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
                <ul className="accordion_text">
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
        if(this.state.locationList.length === 1) {
            return (
                <Col xsOffset={1} xs={5}>
                    <MiniWrapper>
                        <div>
                            {singleLocationList}
                        </div>
                    </MiniWrapper>
                </Col>
            );
        } else {
            return (
                <Col xsOffset={1} xs={5}>
                    <MiniWrapper>
                        <Accordion>
                            {locationList}
                        </Accordion>
                    </MiniWrapper>
                </Col>
            );
        }
    }
}


export default ContentHeader;