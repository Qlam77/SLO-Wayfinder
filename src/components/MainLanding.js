import React from 'react';
import DesktopHeader from './DesktopHeader'
import $ from 'jquery';
import BookstoreIcon from './images/bookstore.jpg';
import TabElement from './tabElement';
import ContentWrapper from './ContentWrapper'

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
                    <TabElement/>
                </ContentWrapper>
            </div>
        );
    }
}
export default MainLanding;