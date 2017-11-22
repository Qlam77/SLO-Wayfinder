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
                                <h3 className="text-center">Counselling & Student Development</h3>
                            </MiniWrapper>
                        </Col>
                    </Row>
                    <br/>
                    <br/>
                    <Row>
                        <Col xsOffset={1} xs={4}>
                            <MiniWrapper>
                                <figure>
                                    <img src="images/Counselling.png" class="img-responsive"/>
                                    <figcaption className="text-center">Counselling is available to all full and part-time students. They are
                                        here to help manage stress, sort through personal concerns and
                                        enhance your educational performance.</figcaption>
                                </figure>
                            </MiniWrapper>
                        </Col>
                        <Col xsOffset={1} xs={5}>
                            <MiniWrapper>
                                <Row>
                                    <Col xs={12}>
                                        <h5 className="text-center">BCIT Counselling & Student Awards are available in all campuses</h5>
                                        <ul className="operations">
                                            <li><b>Location:</b></li>
                                            <li>Annacis Island Campus: #2603</li>
                                            <li>Aerospace Technology Campus: #287</li>
                                            <li>Burnaby Campus: SE16 #128</li>
                                            <li>Downtown Campus: 2nd floor</li>
                                            <li><b>Operation Hours:</b></li>
                                            <li>September - May:</li>
                                            <li><i>Monday, Tuesday, Wednesday, and Friday :</i></li>
                                            <li>8:30 am. to 4:30 pm</li>
                                            <li><i>Thursday:</i> 9:00 am - 4:30 pm</li>
                                            <li>June - August:</li>
                                            <li><i>Monday, Tuesday, Wednesday, and Friday :</i></li>
                                            <li>8:30 am. to 4:00 pm</li>
                                            <li><i>Thursday:</i> 9:00 am - 4:00 pm</li>
                                            <li><b>Contact:</b></li>
                                            <li>Appointment Phone: 604-432-8608</li>
                                            <li>Fax: 604-431-7261</li>
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
