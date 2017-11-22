import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import ContentWrapper from "../components/ContentWrapper";
import DesktopHeader from "../components/DesktopHeader";
import MenuLinker from "../components/MenuLinker";
import BookstoreIcon from "../components/images/bookstore.jpg";
import ContemplationRoom1 from "../components/images/ContemplationRoom.jpg";
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
                                <h3 className="text-center">Contemplation Room</h3>
                            </MiniWrapper>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col xsOffset={1} xs={4}>
                            <MiniWrapper>
                                <figure>
                                    <img src={ContemplationRoom1} class="img-responsive"/>
                                    <figcaption className="text-center">The SA is pleased to be able to offer a
                                        location in SE2 for students to take pause from their busy student life
                                        for a few moments of contemplation and reflection. This multidenominational
                                        space offers an ablution room with a private entrance, and hosts regular
                                        prayer sessions for the various faiths of our students.</figcaption>
                                </figure>
                            </MiniWrapper>
                            <a href="https://www.bcitsa.ca/student-services/programs-sevices/contemplation-room-ablution-room/">More Info</a>
                        </Col>
                        <Col xsOffset={1} xs={5}>
                            <MiniWrapper>
                                <Row>
                                    <Col xs={12}>
                                        <h5 className="text-center">Burnaby Campus</h5>
                                        <ul className="operations">
                                            <li><b>Location:</b></li>
                                            <li>Building SE2 - third floor</li>
                                            <li><b>Operation Hours:</b></li>
                                            <li><i>Monday-Thursday:</i> 8:00 am - 7:00 pm</li>
                                            <li><i>Friday:</i> 8:00 am - 4:00 pm</li>
                                            <li><i>Saturday - Sunday:</i> 9:00 am - 2:00 pm</li>
                                            <li><b>Contact:</b></li>
                                            <li>Phone: 604-432-8600 (office)</li>
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
                        <Col xs={1}>
                            <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore"></MenuLinker>
                        </Col>
                        <Col xs={1}>
                            <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore"></MenuLinker>
                        </Col>
                        <Col xs={1}>
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
