import React from 'react';
import {Row, Col} from 'react-bootstrap';
import MenuLinker from './MenuLinker';

/*
    Displays the related links for the service
 */
class RelatedLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            relatedlinksList: []
        }
    };
    componentDidMount() {
        // Gets the data from firebase
        if(this.props.isMounted) {
            const previousList = this.state.relatedlinksList;
            const rootRef = this.props.db.database().ref().child("0");
            const subRef = rootRef.child("Dimensions");
            const childRef = subRef.child(this.props.information);
            const serRef = childRef.child("Services").orderByChild("Name");
            serRef.once('value', snap => {
                snap.forEach((childSnapshot) => {
                    previousList.push({
                        iconLink: childSnapshot.val().iconLink,
                        linkName: childSnapshot.val().name.replace(/\s/g, ''),
                        name: childSnapshot.val().name
                    });
                });
                this.setState({
                    relatedlinksList: previousList
                });
            });
        }
    }
    render() {
        //sorts the items
        const relatedListMap = this.state.relatedlinksList.sort(function(a, b) {
            if(a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            } else if (a.name.toLowerCase() > b.name.toLowerCase()){
                return 1;
            } else {
                return 0;
            }
        });

        const relatedlinksList = relatedListMap.map((position, index) =>
            <Col key={index} sm={1}>
                {/*Replace Bookstore with array thing*/}
                <MenuLinker path={"/" + position.linkName} src={position.iconLink} name={position.name}>{position.name}</MenuLinker>
            </Col>
        );
        return (
            <div>
                <Row>
                    <Col xsoffset={1} xs={3}>
                        <div><h3 className="related_header">Related Services:</h3></div>
                    </Col>
                </Row>
                <br/>
                <Row>
                    /*
                        Displays related services
                     */
                    {relatedlinksList}
                </Row>
            </div>
        );
    }
}

export default RelatedLinks;
