import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col} from 'react-bootstrap';
import ContentWrapper from "../components/ContentWrapper";
import DesktopHeader from "../components/DesktopHeader";
import MenuLinker from "../components/MenuLinker";
import BookstoreIcon from "../components/images/bookstore.jpg";
import ejobs2 from "../components/images/ejob2.jpg";
import MiniWrapper from "../components/MiniContentWrapper";

class Bookstore extends React.Component{
    render() {
        return (
            <div>
                <div className="mainPage"/>
                <DesktopHeader/>
                <ContentWrapper>
                    <Row>
                        <Col xsOffset={4} xs={4}>
                            <MiniWrapper><h3 className="text-center">Ejobs</h3></MiniWrapper>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col xsOffset={1} xs={4}>
                            <MiniWrapper>
                                <figure>
                                    <img className="img-responsive img-center" src={ejobs2}/>
                                        <figcaption className="text-center">To partner with employers, students, alumni and faculty to provide pathways that
                                     foster the career success of BCIT's work-ready students and graduates.</figcaption>
                                </figure>
                            </MiniWrapper>
                        </Col>
                        <Col xsOffset={1} xs={5}>
                            <MiniWrapper>
                                <Row>
                                    <Col xs={12}>
                                        <h5 className="text-center">Burnaby Campus</h5>
                                        <ul className="operations">
                                            <li><b>Location:</b></li>
                                            <li>NW 05 Room 101</li>
                                            <li><b>Operation Hours:</b></li>
                                            <li><i>Monday-Friday:</i>  8:30am - 4:00pm</li>
                                            <li><i>Saturday-Sunday:</i>  CLOSED</li>
                                            <li><b>Contact:</b></li>
                                            <li>Phone: 604-432-8666</li>
                                            <li>Email: <i>Employ@bcit.ca</i></li>
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
                        <Col xsOffset={1} xs={2}>
                            <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore">Buy Books</MenuLinker>
                        </Col>
                        <Col xs={3}>
                            <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore">Buy Books</MenuLinker>
                        </Col>
                        <Col xs={3}>
                            <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore"></MenuLinker>
                        </Col>
                        <Col xs={3}>
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
        const styling = {
            backgroundColor: "lightblue"
        };
    }
};

export default Bookstore;
