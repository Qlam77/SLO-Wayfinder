import React from 'react'
import {MenuItem} from 'react-bootstrap'
import firebase from 'firebase'
import DesktopHeader from './DesktopHeader'
import ContentWrapper from "./ContentWrapper";
import ContentHeader from "./ContentHeader";
import {Row, Col} from "react-bootstrap";
import ContentImage from "./ContentImage";
import AccordionContent from "./AccordionContent"
import MenuLinker from "../components/MenuLinker";
import BookstoreIcon from "../components/images/bookstore.png";
import {Link} from 'react-router-dom';
import RelatedLinks from "./RelatedLinks";

class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkDescription: []
        }
    };

    componentDidMount() {
        const previousList = this.state.linkDescription;
        const rootRef = this.props.db.database().ref().child("0");
        const subRef = rootRef.child("Services");
        const childRef = subRef.child(this.props.information);
        childRef.once('value', snap => {
            previousList.push({
                serviceName: snap.key,
                name: snap.val().Name,
                desc: snap.val().Desc
            });

            this.setState({
                linkDescription: previousList
            });
        });
    }
    render() {
        // use fire base to get appropriate date for information
        //and populate the element with it.
        const linkDescription = this.state.linkDescription.map(position =>
                <ContentWrapper key={position.serviceName}>
                    {/*Wraps the content's title*/}
                    <ContentHeader>
                        {position.name}
                    </ContentHeader>

                    {/*Fill the left panel with an image and description*/}
                    <Row>
                        <ContentImage image="images/bookstore2.jpg">
                            {position.desc}
                        </ContentImage>

                        {/*Pass in the db, and target for the accordion to populate the dropdown.*/}
                        <AccordionContent db={this.props.db} information={this.props.information}/>
                    </Row>

                    <hr/>
                    {/*Pass in db, and target for the related links for eact category*/}
                    <RelatedLinks db={this.props.db} information={this.props.information}/>
                    <Row>
                        <Col xsOffset={9} xs={2}>
                            <div className="endFooter">
                                <Link to="/"><button>Back to Home</button></Link>
                            </div>
                        </Col>
                    </Row>
                </ContentWrapper>
            );

        return(
            <div>
                <DesktopHeader/>
                {linkDescription}
            </div>
        );
    }
}

export default Info;