import React from 'react';

class DesktopHeader extends React.Component {
    render() {
        const imageSizer = {
            width: "200px",
            height: "200px",
        };
        return (
            <div className="backgroundHeader">
                <img style={imageSizer} src="images/bcit_cmyk_large.jpg" alt="bcit"/>
            </div>
        );
    }
}

export default DesktopHeader;