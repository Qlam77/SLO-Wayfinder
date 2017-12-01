import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="backgroundHeader">
                <a href="/"><img width={this.props.size} height={this.props.size} className="iconHeader" src="https://firebasestorage.googleapis.com/v0/b/slo-wayfinding.appspot.com/o/Other%2FbcitLogo.png?alt=media&token=a11790ae-c357-4667-a5e1-379d09b2dbd2" alt="bcit"/></a>
            </div>
        );
    }
}

export default Header;
