import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import ContentWrapper from "../components/ContentWrapper";
import DesktopHeader from "../components/DesktopHeader";
import MenuLinker from "../components/MenuLinker";
import BookstoreIcon from "../components/images/bookstore.jpg";
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
                                <h3 className="text-center">Recreation Services</h3>
                            </MiniWrapper>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col xsOffset={1} xs={4}>
                            <MiniWrapper>
                                <figure>
                                    <img src="images/Recreation.png" class="img-responsive"/>
                                    <figcaption className="text-center">BCIT Recreation Services is dedicated
                                        to the health and well-being of our students,
                                        faculty and staff, and members of the community.We encourage a
                                        well-balanced, active lifestyle that offsets the rigors
                                            of academia and everyday life.</figcaption>
                                </figure>
                            </MiniWrapper>
                        </Col>
                        <Col xsOffset={1} xs={5}>
                            <MiniWrapper>
                                <Row>
                                    <Col xs={12}>
                                        <h5 className="text-center">BCIT Recreation Services office and main facilities
                                            are located at the Burnaby Campus</h5>
                                        <ul className="operations">
                                            <li><b>Location:</b></li>
                                            <li>Building SE16</li>
                                            <li><b>Operation Hours:</b></li>
                                            <li><i>Monday-Thursday:</i>  6:00am - 10:00pm(Fitness Centre & Gymnasium closes at 9:30 pm)</li>
                                            <li><i>Friday:</i> 6:00 am - 7:30 pm (Fitness Centre & Gymnasium closes at 7:00 pm)</li>
                                            <li><i>Saturday - Sunday:</i> 9:00 am - 4:30 pm (Fitness Centre & Gymnasium closes at 4:00 pm)</li>
                                            <li><b>Contact:</b></li>
                                            <li>Phone: 604-432-8612</li>
                                            <li>Email: <i>bcit_recreation@bcit.ca</i></li>
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
