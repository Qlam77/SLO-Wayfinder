import React from 'react';
import {Row, Col, Panel, Accordion} from 'react-bootstrap';
import MiniWrapper from './MiniContentWrapper';

class ContentHeader extends React.Component {
    render() {
        //DO FIREBASE POPULATE FUNCTION HERE FOR EACH CATEGORY
        return (
            <Col xsOffset={1} xs={5}>
                <MiniWrapper>
                    <Accordion>
                        <Panel header="Burnaby" eventKey="1">
                            <ul className="darkText">
                                <li><b>Location:</b></li>
                                <li>Building SE2 (north side, ground level)</li>
                                <li><b>Operation Hours:</b></li>
                                <li><i>Monday-Friday:</i>  9:00am - 4:00pm</li>
                                <li><i>Saturday-Sunday:</i>  CLOSED</li>
                                <li><b>Contact:</b></li>
                                <li>Phone: 604-432-8379</li>
                                <li>Email: <i>bookstore@bcit.ca</i></li>
                            </ul>
                        </Panel>
                        <Panel header="Downtown" eventKey="2">
                            <ul className="darkText">
                                <li><b>Location:</b></li>
                                <li>2nd floor</li>
                                <li><b>Operation Hours:</b></li>
                                <li><i>Monday-Friday:</i>  8:30am - 4:30pm</li>
                                <li><i>Saturday-Sunday:</i>  CLOSED</li>
                                <li><b>Contact:</b></li>
                                <li>Phone: 604-412-7799</li>
                                <li>Email: <i>bookstore@bcit.ca</i></li>
                            </ul>
                        </Panel>
                    </Accordion>
                </MiniWrapper>
            </Col>
        );
    }
}

export default ContentHeader;