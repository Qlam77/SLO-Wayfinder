import React from 'react';
import InfoHead from './infoResources/infoHead';
import InfoBody from './infoResources/infoBody';
import InfoLinks from './infoResources/infoLinks';

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
