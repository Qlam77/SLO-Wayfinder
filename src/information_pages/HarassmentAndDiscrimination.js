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
                        <Col xsOffset={3} xs={6}>
                            <MiniWrapper>
                                <h3 className="text-center">Harassment & Discrimination</h3>
                            </MiniWrapper>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col xsOffset={1} xs={4}>
                            <MiniWrapper>
                                <figure>
                                    <img src="images/Harassment and Discrimination.png" class="img-responsive"/>
                                    <figcaption className="text-center">BCIT seeks to foster a climate of
                                        collaboration, understanding and mutual respect to ensure an inclusive
                                        and respectful learning and working environment where all members of the
                                        BCIT community are valued and respected.</figcaption>
                                </figure>
                            </MiniWrapper>
                            <a href="https://www.bcit.ca/harassment/">More Info</a>
                        </Col>
                        <Col xsOffset={1} xs={5}>
                            <MiniWrapper>
                                <Row>
                                    <Col xs={12}>
                                        <h5 className="text-center">Burnaby Campus</h5>
                                        <ul className="operations">
                                            <li><b>Location:</b></li>
                                            <li>Building NW5 - 102</li>
                                            <li><b>Contact:</b></li>
                                            <li>Phone: 604-432-8409</li>
                                            <li>Email: <i>ahung28@bcit.ca</i></li>
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
