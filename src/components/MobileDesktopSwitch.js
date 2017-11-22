import React from 'react'
import App from '../App.js'
import MobileLanding from "../mobile_layout/landing_page";

class MobileDesktopSwitch extends React.Component {
    render() {
        const isMobile = true;
        if(isMobile) {
            return(
                <App/>
            );
        } else {
            // return(
            //     <MobileLanding/>
            // );
        }
    }
}

export default MobileDesktopSwitch;