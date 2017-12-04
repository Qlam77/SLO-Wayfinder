import React from 'react';
import Service from './MobileService';

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
        //sorts the items
        const relatedListMap = this.state.relatedList.sort(function(a, b) {
            if(a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            } else if (a.name.toLowerCase() > b.name.toLowerCase()){
                return 1;
            } else {
                return 0;
            }
        });
        const relatedList = relatedListMap.map((position, index) =>
            <Service key={index} src={position.iconLink} linkLocation={position.linkName} name={position.name} col={4}>{position.name}</Service>
        );
        return (
            <div>
                {relatedList}
            </div>
        );
    }
};

export default MobileRelatedLinks;
