import {Route, Switch} from 'react-router';
import { Link,  BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Row, Col} from 'react-materialize'
import MobileLanding from './mobile_layout/landing_page';
import ServiceSelector from './mobile_layout/service_selection';
import ServiceInfo from './mobile_layout/service_info';
import Intellectual from './information_pages/Intellectual';
import Occupational from './information_pages/Occupational';
import Physical from './information_pages/Physical';
import Financial from './information_pages/Financial';
import Psychological from './information_pages/Psychological';
import Environmental from './information_pages/Environmental';
import Spiritual from './information_pages/Spiritual';
import Social from './information_pages/Social';
import MainLanding from './components/MainLanding'
import Info from './components/Info'
import Bookstore from './information_pages/Bookstore'
import eJobs from './information_pages/Ejobs'
import Recreation from './information_pages/Recreation'
import StudentFinancialAid from './information_pages/StudentFinancialAid'
import Counselling from './information_pages/Counselling'
import HarassmentAndDiscrimination from './information_pages/HarassmentAndDiscrimination'
import ContemplationRoom from './information_pages/ContemplationRoom'
import firebase from 'firebase';

class App extends React.Component{
    constructor(props) {
        super(props);
        const config = {
            apiKey: "AIzaSyAnUDSCX5OJbc_Fh-lPETezA5y9l27k0-4",
            authDomain: "slo-wayfinding.firebaseapp.com",
            databaseURL: "https://slo-wayfinding.firebaseio.com",
            projectId: "slo-wayfinding",
            storageBucket: "slo-wayfinding.appspot.com",
            messagingSenderId: "497318243125"
        };
        firebase.initializeApp(config);
        this.state = {
            listOfLocations: []
        }
    };

    componentDidMount() {
        const previousList = this.state.listOfLocations;
        const rootRef = firebase.database().ref().child("1");
        const childRef = rootRef.child("Services");
        childRef.on('child_added', snap => {
            previousList.push({
                serviceWebName: snap.key.replace(/\s/g,''),
                serviceName: snap.key
            });
            this.setState({
                listOfLocations: previousList
            });
        });
    }

    render() {
        // Populates Switch with Appropriate Links. Need words to have no space though
        const listOfLocations = this.state.listOfLocations.map(position =>
            <Route key={position.serviceWebName} exact path={"/" + position.serviceWebName} render={props => (
                <Info {...props} information={position.serviceName} db={firebase}/>
            )}/>
        );
    return (
        <div >
          <BrowserRouter>
            <div>
              <Switch>
                  <Route exact path = '/' component={MainLanding}/>
                  {/*<Route exact path = '/Bookstore' component={Bookstore}/>*/}
                  {/*/!*<Route exact path = '/Ejobs' component={Ejobs}/>*!/*/}
                  {/*/!*<Route exact path = '/Recreation' component={Recreation}/>*!/*/}
                  {/*/!*<Route exact path = '/StudentFinancialAid' component={StudentFinancialAid}/>*!/*/}
                  {/*/!*<Route exact path = '/Counselling' component={Counselling}/>*!/*/}
                  {/*/!*<Route exact path = '/HarassmentAndDiscrimination' component={HarassmentAndDiscrimination}/>*!/*/}
                  {/*/!*<Route exact path = '/ContemplationRoom' component={ContemplationRoom}/>*!/*/}
                  {/*<Route exact path = '/Info' component={Info}/>*/}
                  {listOfLocations}
              </Switch>
            </div>
          </BrowserRouter>
            {/*<div>*/}
              {/*<BrowserRouter>*/}
                {/*<div>*/}
                {/*<Switch>*/}
                  {/*<Route exact path = '/' component={Landing}/>*/}
                  {/*<Route exact path = '/Intellectual' component={Intellectual}/>*/}
                  {/*<Route exact path = '/Occupational' component={Occupational}/>*/}
                  {/*<Route exact path = '/Physical' component={Physical}/>*/}
                  {/*<Route exact path = '/Financial' component={Financial}/>*/}
                  {/*<Route exact path = '/Psychological' component={Psychological}/>*/}
                  {/*<Route exact path = '/Environmental' component={Environmental}/>*/}
                  {/*<Route exact path = '/Spiritual' component={Spiritual}/>*/}
                  {/*<Route exact path = '/Social' component={Social}/>*/}
                  {/*</Switch>*/}
                {/*</div>*/}
              {/*</BrowserRouter>*/}
            {/*</div>*/}
        </div>
    );
  }
}

class Header extends React.Component {
  render() {
    const headerStyle = {
      width: 200,
      height: 200,
    };
    return (
      <Col l={12}>
      <img style={headerStyle} src={this.props.src} alt="bcit"/>
      </Col>
    );
  }
}

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
}

class Figure extends React.Component {
  render() {
    const figureStyle = {
      height: "100%",
      width: "100%",
      margin: "auto",
      WebkitFilter: "drop-shadow(0px 0px 5px #666)"
    };
    return(
      <img style={figureStyle} src={this.props.src} alt={this.props.name}/>
    );
  }
}

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
