import React from 'react'
import Header from '../shared_components/Header'
import ContentWrapper from "./ContentContainer";
import ContentHeader from "./ContentHeader";
import {Row, Col} from "react-bootstrap";
import ContentImage from "./ContentImage";
import AccordionContent from "../shared_components/AccordionContent"
import {Link} from 'react-router-dom';
import RelatedLinks from "../shared_components/RelatedLinks";
import Background from "../shared_components/Background"

/*
    This component displays information
 */
class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            linkDescription: []
        }
    };

    componentDidMount() {
        // Retreives data from firebase and adds it to an array
        if(this.props.isMounted) {
            const previousList = this.state.linkDescription;
            const rootRef = this.props.db.database().ref().child("1");
            const subRef = rootRef.child("Services");
            const childRef = subRef.child(this.props.information);
            childRef.once('value', snap => {
                previousList.push({
                    serviceName: snap.key,
                    name: snap.val().Name,
                    desc: snap.val().Desc,
                    link: snap.val().Link.replace(/^https?:\/\//, ''),
                    img: snap.val().img,
                    category: snap.val().Category
                });

                this.setState({
                    linkDescription: previousList
                });
            });
        }
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
                        <ContentImage name={position.name} image={position.img} linkLocation={position.link}>
                            {position.desc}
                        </ContentImage>

                        {/*Pass in the db, and target for the accordion to populate the dropdown.*/}
                        <AccordionContent db={this.props.db} information={this.props.information}/>
                    </Row>

                    <hr/>
                    {/*Pass in db, and target for the related links for eact category*/}
                    <RelatedLinks db={this.props.db} information={position.category} isMounted={true}/>
                    <Row>
                        <Col xsOffset={9} xs={2}>
                            <div className="end_footer">
                                <Link to="/">Back to Home</Link>
                            </div>
                        </Col>
                    </Row>
                </ContentWrapper>
            );

        return(
            <div>
                <Background/>
                <Header size="200"/>
                {linkDescription}
            </div>
        );
    }
}

export default Info;
