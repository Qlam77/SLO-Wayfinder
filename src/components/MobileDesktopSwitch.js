import React from 'react'
import App from '../App.js'
import MobileApp from "../MobileApp";

class MobileDesktopSwitch extends React.Component {
    render() {
        const isMobile = false;
        if(isMobile) {
            return(
                <App/>
            );
        } else {
            return(
                <MobileApp/>
            );
        }
    }
}

export default MobileDesktopSwitch;