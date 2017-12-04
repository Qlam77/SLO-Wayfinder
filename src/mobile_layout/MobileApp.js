import {BrowserRouter } from 'react-router-dom';
import {Route, Switch} from 'react-router';
import React from 'react';
import LandingPage from './MobileLanding'
import ServiceSelection from './MobileServiceSelection'
import ServiceInfo from './MobileServiceInfo'

class MobileApp extends React.Component {
    //initialize props
    constructor(props) {
        super(props);
        this.state = {
            //make a variable that stores all the links
            initialDimensions: []
        }
    };

    //after component is added, create separate URL's for each page.
    componentDidMount() {
        //save current array into a local variable
        const previousList = this.state.initialDimensions;
        //target parent from database
        const rootRef = this.props.db.database().ref().child("0");
        //look for element called dimensions
        const childRef = rootRef.child("Dimensions");
        //get all current values at the current location
        childRef.once('value', snap => {
            //iterate over each of these elements
                snap.forEach((childSnapshot) => {
                    //add each element to the local array
                    // childRef.child(childSnapshot.key)

                    previousList.push({
                        serviceName: childSnapshot.key,

                });
            });
        });
        const rootRef2 = this.props.db.database().ref().child("1");
        const childRef2 = rootRef2.child("Services");
        childRef2.once('value', snap1 => {
            snap1.forEach((childSnapshot1) => {
                previousList.push({
                    location: childSnapshot1.key,
                    linkLocation: childSnapshot1.val().Name.replace(/\s/g,''),
                    name: childSnapshot1.val().Name,
                    category: childSnapshot1.val().Category
                });
            });
            this.setState({
                initialDimensions: previousList
            });
        });
    }

    render() {
        //for each item in the array, make elements
        const dimensions = this.state.initialDimensions.map((position, index) =>
            <Route key={index} exact path={"/" + position.serviceName} render={props => (
                <ServiceSelection {...props} service={position.serviceName} db={this.props.db}/>
            )}/>
        );

        const serviceSelection = this.state.initialDimensions.map((position, index) =>
            <Route key={index} exact path={"/" + position.linkLocation} render={props => (
                <ServiceInfo {...props} dimension={position.category} db={this.props.db} title={position.location} name={position.name}/>
            )}/>
        );

        return (
            //set up how page will display url
            <BrowserRouter>
                <div>
                    <Switch>
                        {/*main page will display LandingPage*/}
                        <Route exact path="/" component={LandingPage}/>
                        {dimensions}
                        {serviceSelection}
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
export default MobileApp;
