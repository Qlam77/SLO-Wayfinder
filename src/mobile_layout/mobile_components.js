import {Route, Switch} from 'react-router';
import { Link,  BrowserRouter } from 'react-router-dom';
import React from 'react';
// import ReactDom from 'react-dom';
import {Row, Col, Input} from 'react-materialize'

class MobileHeader extends React.Component {
  render() {
    return (
      <Col s={12}>
        <HeaderBackground background="images/student_life.png"><Logo/></HeaderBackground>
        <SearchBar/>
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
      "text-align": "center"
    }
    return (
      <img style={logoStyle} src="images/bcit_cmyk_large.jpg" alt="bcitLogo"/>
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
        {this.props.children}
      </div>
    );
  }
};

class SearchBar extends React.Component {
  render() {
    const searchStyle = {
      backgroundColor: "#ffffff",
      width: "80%",
      display: "block",
      margin: "0px auto",
      borderRadius: 5
    }
    const sectionStyle = {
      backgroundColor: "#aaaaaa",
      padding: 10
    }
    return (
      <div style={sectionStyle}>
        <div style={searchStyle}>
          <input type="text" />
        </div>
      </div>
    );
  }
};

class Tab extends React.Component {
  render() {
    return (
      <div>
        <MobileHeader/>
        <Row>
          <ServiceContainer/>
        </Row>
      </div>
    );
  }
};

class Service extends React.Component {
  render() {
    return (
      <Link to={this.props.name}>
        <Figure src={this.props.src} alt={this.props.name}/>
      </Link>
    );
  }
};

class Figure extends React.Component {
  render() {
    const figureStyle = {
      height: "150px",
      width: "150px",
      margin: "10px 30px",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)",
    }
    return(
      <img style={figureStyle} src={this.props.src} alt={this.props.name}/>
    );
  }
};

class ServiceContainer extends React.Component {
  render() {
    const containerStyle = {
      backgroundColor: "#aaaaaa"
    }
    return (
      <div style={containerStyle}>
        <Service src="images/intellectual.jpg" name="Intellectual"/>
        <Service src="images/occupational.jpg" name="Occupational"/>
        <Service src="images/physical.jpg" name="Physical"/>
        <Service src="images/financial.jpg" name="Financial"/>
        <Service src="images/psychological.jpg" name="Psychological"/>
        <Service src="images/spiritual.jpg" name="Spiritual"/>
        <Service src="images/social.jpg" name="Social"/>
        <Service src="images/environmental.jpg" name="Environmental"/>
      </div>
    );
  }
};

export default Tab;
