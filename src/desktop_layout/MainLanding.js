import React from 'react';
import Header from '../shared_components/Header'
import MainDimensions from './MainDimensions';
import ContentWrapper from './ContentContainer';
import {Row, Col} from 'react-bootstrap';
import Background from '../shared_components/Background';
import DimensionPar from './DimensionPar';

/*
   Renders the main landing page
 */
class MainLanding extends React.Component {
    render() {
        return (
            <div>
                <Background/>
                {/*Displays the header*/}
                <Header size="200"/>

                {/*Display the content*/}
                <ContentWrapper>
                    <div className="dimension_intro">
                      <Row>
                        <Col xs={12}><DimensionPar header="Find the Balance in All Eight Dimensions of Your Wellbeing!" cont="BCIT values the whole student and wants to see you thrive in all eight dimensions of your wellbeing. Click on the boxes below to learn about the range of free services and supports that can help you succeed in each dimension of wellbeing throughout your time at BCIT."/></Col>
                      </Row>
                    </div>
                    {/*displays the dimensions*/}
                    <MainDimensions db={this.props.db}/>
                </ContentWrapper>
            </div>
        );
    }
}
export default MainLanding;
