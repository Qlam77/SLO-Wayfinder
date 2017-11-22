import React from 'react';
import {Row, Col} from 'react-bootstrap';
import MenuLinker from './MenuLinker';
import BookstoreIcon from "./images/bookstore.png";

class RelatedLinks extends React.Component {
    render() {
        return (
            //DO FIREBASE CATEGORY LINK FUNCTION HERE
            <div>
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
            </div>
        );
    }
}

export default RelatedLinks;