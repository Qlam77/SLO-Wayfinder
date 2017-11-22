import React from 'react';
import {Row, Col, Input} from 'react-bootstrap';
import Service from './service'

class MobileRelatedLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            relatedList: []
        }
    };
    componentDidMount() {
        //save current array into a local variable
        const previousList = this.state.relatedList;
        //target parent from database
        const rootRef = this.props.db.database().ref().child("0");
        //look for element called dimensions
        const subRef = rootRef.child("Dimensions");
        //get children of this node
        const serRef = subRef.child(this.props.service);
        const childRef = serRef.child("Services");
        childRef.once('value', snap => {
            snap.forEach((childSnapshot) => {
                //for each child, get data
                previousList.push({
                    iconLink: childSnapshot.val().iconLink,
                    linkName: childSnapshot.val().name.replace(/\s/g,''),
                    name: childSnapshot.val().name
                });
            });
            //assign local array to this component's array
            this.setState({
                relatedList: previousList
            });
        });
    }

    render() {
        const relatedList = this.state.relatedList.map((position, index) =>
            <Service src={position.iconLink} linkLocation={position.linkName} name={position.name} col={4}/>
        );
        return (
            <div>
                {relatedList}
            </div>
        );
    }
};

export default MobileRelatedLinks;
