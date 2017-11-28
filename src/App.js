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
            width: window.innerWidth,
        };
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