import React from 'react';
import Section from './MobileDimension'

/*
    Displays dimension image and its caption
 */
class DimensionImg extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgItem: []
        }
    };
    componentDidMount() {
        //save current array into a local variable
        const previousList = this.state.imgItem;
        //target parent from database
        const rootRef = this.props.db.database().ref().child("0");
        //look for element called dimensions
        const subRef = rootRef.child("Dimensions");
        //get children of this node
        const childRef = subRef.child(this.props.service);
        childRef.once('value', snap => {
            previousList.push({
                serviceDesc: snap.val().Desc,
                serviceImg: snap.val().img,
            });
            //assign local array to this component's array
            this.setState({
                imgItem: previousList
            });
        });
    }
    render() {
        const imgItem = this.state.imgItem.map((position, index) =>
            <div key={index}>
              <Section src={position.serviceImg} name={this.props.service}/>
            </div>
        );

        const descItem = this.state.imgItem.map((position, index) =>
        <div key={index} className="dimension_intro">
          <p>{position.serviceDesc}</p>
        </div>
        );
        return (
          <div>
            {imgItem}
            {descItem}
          </div>
        );
    }
};

export default DimensionImg;
