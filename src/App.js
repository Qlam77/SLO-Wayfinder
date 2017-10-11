import {Route, Switch} from 'react-router';
import { Link,  BrowserRouter } from 'react-router-dom';
import React from 'react';
// import ReactDom from 'react-dom';
import {Row, Col} from 'react-materialize'
import Intellectual from './information_pages/Intellectual';
import Occupational from './information_pages/Occupational';
import Physical from './information_pages/Physical';
import Financial from './information_pages/Financial';
import Psychological from './information_pages/Psychological';
import Environmental from './information_pages/Environmental';
import Spiritual from './information_pages/Spiritual';
import Social from './information_pages/Social';

class App extends React.Component{
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path = '/' component={Landing}/>
              <Route exact path = '/Intellectual' component={Intellectual}/>
              <Route exact path = '/Occupational' component={Occupational}/>
              <Route exact path = '/Physical' component={Physical}/>
              <Route exact path = '/Financial' component={Financial}/>
              <Route exact path = '/Psychological' component={Psychological}/>
              <Route exact path = '/Environmental' component={Environmental}/>
              <Route exact path = '/Spiritual' component={Spiritual}/>
              <Route exact path = '/Social' component={Social}/>
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
      <Col l={4} offset={this.props.offset}>
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
      height: 120,
      width: 120,
      margin: 20,
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
