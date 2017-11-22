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
                                <h3 className="text-center">Student Financial Aid & Awards</h3>
                            </MiniWrapper>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col xsOffset={1} xs={4}>
                            <MiniWrapper>
                                <figure>
                                    <img src="images/Financial Aid.png" class="img-responsive"/>
                                    <figcaption className="text-center">Student Financial Aid and Awards can help you discover sources
                                        of funding, apply for financial aid and awards, avoid and solve
                                        problems with student loans and more.</figcaption>
                                </figure>
                            </MiniWrapper>
                        </Col>
                        <Col xsOffset={1} xs={5}>
                            <MiniWrapper>
                                <Row>
                                    <Col xs={12}>
                                        <h5 className="text-center">BCIT Student Financial Aid & Rewards are available in all campuses</h5>
                                        <ul className="operations">
                                            <li><b>Location:</b></li>
                                            <li>Annacis Island Campus: #2603</li>
                                            <li>Aerospace Technology Campus: #287</li>
                                            <li>Burnaby Campus: SW1 #2132</li>
                                            <li><b>Operation Hours:</b></li>
                                            <li><i>Monday-Friday:</i>  8:30 a.m. to 4:00 p.m</li>
                                            <li><i>Saturday - Sunday:</i> CLOSED </li>
                                            <li><b>Contact:</b></li>
                                            <li>Phone: 604-432-8555</li>
                                            <li>Email:</li>
                                            <li>For question about Awards, Scholarships and Bursaries: <i>sawards@bcit.ca</i></li>
                                            <li>For any other Financial Aid questions: <i>finaid@bcit.ca</i></li>
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
