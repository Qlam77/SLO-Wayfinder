import {Route, Switch} from 'react-router';
import { Link,  BrowserRouter } from 'react-router-dom';
import React from 'react';
// import ReactDom from 'react-dom';
import {Row, Col} from 'react-materialize'
import MobileLanding from './mobile_layout/landing_page';
import ServiceSelector from './mobile_layout/service_selection';
import ServiceInfo from './mobile_layout/service_info';

class App extends React.Component{
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path = '/' component={MobileLanding}/>
              <Route exact path = '/Intellectual' component={ServiceSelector}/>
              <Route exact path = '/info' component={ServiceInfo}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

class Header extends React.Component {
  render() {
    const headerStyle = {
      width: 200,
      height: 200,
    }
    return (
      <Col l={12}>
      <img style={headerStyle} src={this.props.src} alt="bcit"/>
      </Col>
    );
  }
};

class Service extends React.Component {
  render() {
    return (
      <Col s={4} offset={this.props.offset}>
        <Link to={this.props.name}>
          <Figure src={this.props.src} alt={this.props.name}/>
        </Link>
      </Col>
    );
  }
};

class Figure extends React.Component {
  render() {
    const figureStyle = {
      height: "100%",
      width: "100%",
      margin: "auto",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)"
    }
    return(
      <img style={figureStyle} src={this.props.src} alt={this.props.name}/>
    );
  }
};

class Landing extends React.Component{
  render() {
    var midPanelStyle = {
      "text-align": "center",
      width: "33.33%"
    }
    return (
      //easier to use table for this kind of layout even tho it's bad
      <Row style={midPanelStyle}>
        <Header src="images/bcit_cmyk_large.jpg"></Header>
        <Service src="images/intellectual.jpg" name="Intellectual"/>
        <Service src="images/occupational.jpg" name="Occupational"/>
        <Service src="images/physical.jpg" name="Physical"/>
        <Service src="images/financial.jpg" name="Financial"/>
        <Service offset="l4" src="images/psychological.jpg" name="Psychological"/>
        <Service src="images/spiritual.jpg" name="Spiritual"/>
        <Service src="images/social.jpg" name="Social"/>
        <Service src="images/environmental.jpg" name="Environmental"/>
      </Row>
    )
  }
};

export default App;
