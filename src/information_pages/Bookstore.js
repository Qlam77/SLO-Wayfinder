import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import ContentWrapper from "../components/ContentWrapper";
import DesktopHeader from "../components/DesktopHeader";
import MenuLinker from "../components/MenuLinker";
import BookstoreIcon from "../components/images/bookstore.png";
import MiniWrapper from "../components/MiniContentWrapper";

class Bookstore extends React.Component{
    render() {
        const styling = {
          backgroundColor: "lightblue"
        };
        return (
            <div>
                <div className="mainPage"/>
                <DesktopHeader/>
                <ContentWrapper>
                    <Row>
                        <Col xsOffset={4} xs={4}>
                            <MiniWrapper>
                                <h3 className="text-center">Bookstore</h3>
                            </MiniWrapper>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col xsOffset={1} xs={4}>
                            <MiniWrapper>
                                <figure>
                                    <img src="images/bookstore2.jpg" class="img-responsive"/>
                                    <figcaption className="text-center">We're your one stop shop for all your school needs!
                                        Course textbooks, reference books, trades safety gear, gifts,
                                        stationery, we've got it all.</figcaption>
                                </figure>
                            </MiniWrapper>
                            <a href="https://www.bcit.ca/bookstore/?icn=bookstore&icl=keymatch-bcit">More Info</a>
                        </Col>
                        <Col xsOffset={1} xs={5}>
                            <MiniWrapper>
                                <Row>
                                    <Col xs={6}>
                                        <ul className="operations">
                                            For Burnaby BookStore:
                                            <li><b>Location:</b></li>
                                            <li>Building SE2 (north side, ground level)</li>
                                            <li><b>Operation Hours:</b></li>
                                            <li><i>Monday-Friday:</i>  9:00am - 4:00pm</li>
                                            <li><i>Saturday-Sunday:</i>  CLOSED</li>
                                            <li><b>Contact:</b></li>
                                            <li>Phone: 604-432-8379</li>
                                            <li>Email: <i>bookstore@bcit.ca</i></li>
                                        </ul>
                                    </Col>
                                    <Col xs={6}>
                                        <ul>
                                            For Downtown BookStore
                                            <li><b>Location:</b></li>
                                            <li>2nd floor</li>
                                            <li><b>Operation Hours:</b></li>
                                            <li><i>Monday-Friday:</i>  8:30am - 4:30pm</li>
                                            <li><i>Saturday-Sunday:</i>  CLOSED</li>
                                            <li><b>Contact:</b></li>
                                            <li>Phone: 604-412-7799</li>
                                            <li>Email: <i>bookstore@bcit.ca</i></li>
                                        </ul>
                                    </Col>
                                </Row>
                            </MiniWrapper>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col xsoffset={1} xs={3}>
                                <div className="text-center"><h3>Related Services:</h3></div>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xsOffset={1} xs={1}>
                                <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore"></MenuLinker>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col xsOffset={9} xs={2}>
                                <div className="endFooter">
                                    <Link to="/"><button>Back to Home</button></Link>
                                </div>
                            </Col>
                        </Row>
                </ContentWrapper>
            </div>
        )
    }
};

export default Bookstore;
