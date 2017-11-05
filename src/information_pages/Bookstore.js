import React from 'react';
import {Row, Col} from 'react-materialize';

class Bookstore extends React.Component{
    render() {
        const styling = {
          backgroundColor: "lightblue"
        };
        return (
            <div style={styling}>
                <Row>
                    <Col s={2}>
                        <img src="images/bookstore.jpg" width="30%" height="30%"></img>
                    </Col>
                    <Col offset="s2" s={4}>
                        <img src="images/bcit_logo2.png" width="100%" height="100%"></img>
                    </Col>
                </Row>
                <Row>
                    <Col offset="s2" s={6}>
                        <img src="images/bookstore2.jpg" width="100%" height="100%"></img>
                    </Col>
                    <Col s={2}>
                        <ul className="operations">
                            For Burnaby BookStore:
                            <li><b>Location:</b></li>
                            <li>Building SE2 (north side, ground level)</li>
                            <li><b>Operation Hours:</b></li>
                            <li><i>Monday-Friday:</i>  9:00am - 4:00pm</li>
                            <li><i>Saturday-Sunday:</i>  CLOSED</li>
                            <li><b>Contact:</b></li>
                            <li>Phone: 604-432-8379</li>
                            <li>Email: bookstore@bcit.ca</li>
                        </ul>
                        <hr/>
                        <h6>For Downtown BookStore:</h6>
                        <ul>
                            <li><b>Location:</b></li>
                            <li>2nd floor</li>
                            <li><b>Operation Hours:</b></li>
                            <li><i>Monday-Friday:</i>  8:30am - 4:30pm</li>
                            <li><i>Saturday-Sunday:</i>  CLOSED</li>
                            <li><b>Contact:</b></li>
                            <li>Phone: 604-412-7799</li>
                            <li>Email: bookstore@bcit.ca</li>
                            <li><a href="javascript: window.history.back()">Back</a></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        )
    }
};

export default Bookstore;
