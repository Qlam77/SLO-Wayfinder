import React from 'react';
import {Row, Col} from 'react-bootstrap';
import MenuLinker from '../shared_components/MenuLinker';

class RelatedLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            relatedlinksList: []
        }
    };
    componentDidMount() {
        const previousList = this.state.relatedlinksList;
        const rootRef = this.props.db.database().ref().child("0");
        const subRef = rootRef.child("Dimensions");
        const childRef = subRef.child(this.props.information);
        const serRef = childRef.child("Services");
        serRef.once('value', snap => {
            snap.forEach((childSnapshot) => {
                previousList.push({
                    iconLink: childSnapshot.val().iconLink,
                    linkName: childSnapshot.val().name.replace(/\s/g,''),
                    name: childSnapshot.val().name
                });
            });
            this.setState({
                relatedlinksList: previousList
            });
        });
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
            <Col key={index} sm={6}>
                <MenuLinker path={"/" + position.linkName} src={position.iconLink} name={position.name}>{position.name}</MenuLinker>
            </Col>
        );
        return (
            //DO FIREBASE CATEGORY LINK FUNCTION HERE
            <Row>
                {relatedlinksList}
            </Row>
        );
    }
}

export default RelatedLinks;
