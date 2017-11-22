import React from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Accordion, Panel} from 'react-bootstrap';
import ContentWrapper from "../components/ContentWrapper";
import DesktopHeader from "../components/DesktopHeader";
import MenuLinker from "../components/MenuLinker";
import BookstoreIcon from "../components/images/bookstore.png";
import MiniWrapper from "../components/MiniContentWrapper";
import ContentHeader from "../components/ContentHeader";
import ContentImage from "../components/ContentImage";
import AccordionContent from "../components/AccordionContent";

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
                    <ContentHeader>
                        Bookstore
                    </ContentHeader>
                    <Row>
                        <ContentImage image="images/bookstore2.jpg">
                            We're your one stop shop for all your school needs!
                            Course textbooks, reference books, trades safety gear, gifts,
                            stationery, we've got it all.
                        </ContentImage>
                        <AccordionContent/>
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
                            {/*Replace Bookstore with array thing*/}
                            <MenuLinker path={"/" + "Bookstore"} src={BookstoreIcon} name="Bookstore"/>
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
