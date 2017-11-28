import React from 'react';
import DesktopHeader from './DesktopHeader'
import $ from 'jquery';
import BookstoreIcon from './images/bookstore.jpg';
import TabElement from './MainDimensions';
import ContentWrapper from './ContentWrapper';
import MiniWrapper from './MiniContentWrapper';
import {Row, Col} from 'react-bootstrap';
import Background from './Background';

class MainLanding extends React.Component {
    render() {
        const myStyle = {
            height: "200px"
        };
        const fixStyle = {
            display: "inline-block",
        };
        return (
            <div>
                <Background/>
                <DesktopHeader/>
                <ContentWrapper>
                    <Row>
                        <Col xsOffset={4} xs={4}>
                            <MiniWrapper>
                                <h4 className="text-center">Dimensions of wellbeing</h4>
                            </MiniWrapper>
                        </Col>
                    </Row>
                    <br/>
                    <TabElement/>
                </ContentWrapper>
            </div>
        );
    }
}
export default MainLanding;
