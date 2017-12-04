import {Route, Switch, Redirect} from 'react-router';
import {BrowserRouter } from 'react-router-dom';
import React from 'react';
import MainLanding from './MainLanding'
import Info from './Info'

/*
    Loads the desktop application on the browser
 */
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            listOfLocations: [],
            categoryList: []
        }
    };

    componentDidMount() {
        /*
            Gets data from firebase to populate links
         */
        if(this.props.isMounted) {
            const previousList = this.state.listOfLocations;
            const dimensionList = this.state.categoryList;
            const rootRef2 = this.props.db.database().ref().child("0");
            //look for element called dimensions
            const childRef2 = rootRef2.child("Dimensions");
            //get all current values at the current location
            childRef2.once('value', snap1 => {
                //iterate over each of these elements
                snap1.forEach((childSnapshot1) => {
                    //add each element to the local array
                    // childRef.child(childSnapshot.key)
                    dimensionList.push({
                        dimensionName: childSnapshot1.key,
                    });
                });
            });

        /*
            Gets data and adds to list of locations as links
         */

            const rootRef = this.props.db.database().ref().child("1");
            //look for element called services
            const childRef = rootRef.child("Services");

            //get data from services node
            childRef.on('child_added', snap => {
                previousList.push({
                    serviceWebName: snap.val().Name.replace(/\s/g,''),
                    serviceName: snap.key
                });
                this.setState({
                    listOfLocations: previousList
                });
            });
        }
    }

    render() {
        // Makes links of service details
        const listOfLocations = this.state.listOfLocations.map(position =>
            <Route key={position.serviceWebName} exact path={"/" + position.serviceWebName} render={props => (
                <Info {...props} information={position.serviceName} db={this.props.db} isMounted={true}/>
            )}/>
        );

        //Makes redirecting for dimensions
        const serviceSelection = this.state.categoryList.map((position, index) =>
            <Route key={index} exact path={"/" + position.dimensionName} render={()=>
                <Redirect push to="/"/>
            }/>
        );

        return (
            <div >
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route exact path = '/' render={props => (
                                <MainLanding {...props} db={this.props.db}/>
                            )}/>
                            {serviceSelection}
                            {listOfLocations}
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
