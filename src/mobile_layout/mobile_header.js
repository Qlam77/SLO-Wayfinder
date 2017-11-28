import {Link} from 'react-router-dom';
import React from 'react';
import {Col, Input} from 'react-materialize';

class MobileHeader extends React.Component {
  render() {
    return (
      <Col s={12}>
        <Logo/>
      </Col>
    );
  }
};

class Logo extends React.Component {
  render () {
    const logoStyle = {
      width : 150,
      height: 150,
      display: "block",
      margin: "auto",
      padding: 10,
      textAlign: "center"
    }
    return (
      <img style={logoStyle} src="https://firebasestorage.googleapis.com/v0/b/slo-wayfinding.appspot.com/o/Other%2FbcitLogo.png?alt=media&token=a11790ae-c357-4667-a5e1-379d09b2dbd2" alt="bcitLogo"/>
    );
  }
};


export default MobileHeader;
