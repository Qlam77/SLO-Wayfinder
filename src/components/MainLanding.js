import React from 'react';
import DesktopHeader from './DesktopHeader'
import $ from 'jquery';
import BookstoreIcon from './images/bookstore.jpg';
import TabElement from './MainDimensions';
import ContentWrapper from './ContentWrapper';
import MiniWrapper from './MiniContentWrapper';
import {Row, Col} from 'react-bootstrap';

$(document).ready(function(){
    $(".someContent").on("click", function() {
        $(".someContent").fadeOut("fast", function(){});
    });
    $(".tab").on("click", function(){
        $("div.active").fadeIn("fast", function(){});
    })
});

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
                <div className="mainPage"/>
                <DesktopHeader/>
                <ContentWrapper>
                    <Row>
                        <Col xsOffset={4} xs={4}>
                            <MiniWrapper>
                                <h4 className="text-center">8 Dimensions of wellbeing</h4>
                            </MiniWrapper>
                        </Col>
                    </Row>
                    <br/>
                    <TabElement db={this.props.db}/>
                </ContentWrapper>
            </div>
        );
    }
}
export default MainLanding;