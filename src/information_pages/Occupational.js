import React from 'react';
import InfoHead from './infoResources/InfoHead';
import InfoBody from './infoResources/InfoBody';
import InfoLinks from './infoResources/InfoLinks';

class Occupational extends React.Component{
    render() {
        return (
            //your content goes here
            <div>
                <InfoHead>Your Headers will be here</InfoHead>
                <InfoBody>Your information will show up here</InfoBody>
                <InfoLinks>Your Links will show up here</InfoLinks>
            </div>
        )
    }
};

export default Occupational;
