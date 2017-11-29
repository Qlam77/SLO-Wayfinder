import React from 'react';
import DesktopHeader from './DesktopHeader'
import $ from 'jquery';
import BookstoreIcon from './images/bookstore.jpg';
import TabElement from './MainDimensions';
import ContentWrapper from './ContentWrapper';
import MiniWrapper from './MiniContentWrapper';
import {Row, Col} from 'react-bootstrap';
import Background from './Background';
import DimensionImage from './DimensionImage';
import DimensionPar from './DimensionPar';

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
                    <div className="dimension_intro">
                      <Row>
                        <Col xs={2}><DimensionImage src="./images/wellbeing.png"/></Col>
                        <Col xs={10}><DimensionPar header="Find the balance in all eight dimensions of your wellbeing!" cont="BCIT values the whole student and wants to see you thrive in all eight dimensions of your wellbeing. Click on the boxes below to learn about the range of free services and supports that can help you succeed in each dimension of wellbeing throughout your time at BCIT."/></Col>
                      </Row>
                    </div>
                    <br/>
                    <TabElement db={this.props.db}/>
                </ContentWrapper>
            </div>
        );
    }
}
export default MainLanding;
