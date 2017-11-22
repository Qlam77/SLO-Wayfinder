import {Link} from 'react-router-dom';
import React from 'react';
import {Col, Input} from 'react-materialize';

class MobileHeader extends React.Component {
  render() {
    return (
      <Col s={12}>
        <HeaderBackground background="images/student_life.png"/>
      </Col>
    );
  }
};

class HeaderBackground extends React.Component {
  render() {
    const backgroundStyle = {
      backgroundImage: "url(images/student_life.png)",
      height: 200
    }
    return (
      <div style={backgroundStyle}>
        <Logo/>
      </div>
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
      <img style={logoStyle} src="images/bcit_cmyk_large.jpg" alt="bcitLogo"/>
    );
  }
};


export default MobileHeader;
