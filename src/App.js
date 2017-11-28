import React from 'react'
import DesktopApp from './components/DesktopApp';
import MobileApp from "./mobile_layout/MobileApp";
import firebase from "firebase";

class App extends React.Component {
    constructor() {
        super();
        //initialize firebase
        const config = {
            apiKey: "AIzaSyAnUDSCX5OJbc_Fh-lPETezA5y9l27k0-4",
            authDomain: "slo-wayfinding.firebaseapp.com",
            databaseURL: "https://slo-wayfinding.firebaseio.com",
            projectId: "slo-wayfinding",
            storageBucket: "slo-wayfinding.appspot.com",
            messagingSenderId: "497318243125"
        };
        firebase.initializeApp(config);
        this.state = {
            listOfLocations: [],
            categoryList: []
        }
    };

    componentDidMount() {
        const previousList = this.state.listOfLocations;
        const dimensionList = this.state.categoryList;
        const rootRef = this.props.db.database().ref().child("1");
        const childRef = rootRef.child("Services");
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

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 768;

        if(isMobile) {
            return(
                <MobileApp db={firebase}/>
            );
        } else {
            return(
                <DesktopApp db={firebase}/>
            );
        }
    }
}

export default App;
