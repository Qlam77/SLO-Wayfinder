import {Route, Switch, Redirect} from 'react-router';
import { Link,  BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Row, Col} from 'react-materialize'
import MobileLanding from './mobile_layout/landing_page';
import ServiceSelector from './mobile_layout/service_selection';
import ServiceInfo from './mobile_layout/service_info';
import MainLanding from './components/MainLanding'
import Info from './components/Info'
// import firebase from 'firebase';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            listOfLocations: [],
            categoryList: []
        }
    };

    componentDidMount() {
        const previousList = this.state.listOfLocations;
        const dimensionList = this.state.categoryList;
        const rootRef = this.props.db.database().ref().child("1");
        const childRef = rootRef.child("Services");

        const rootRef2 = this.props.db.database().ref().child("0");
        //look for element called dimensions
        const childRef2 = rootRef2.child("Dimensions");
        //get all current values at the current location
        childRef2.once('value', snap1 => {
            //iterate over each of these elements
            snap1.forEach((childSnapshot1) => {
                //add each element to the local array
                // childRef.child(childSnapshot.key)
                dimensionList.push({
                    dimensionName: childSnapshot1.key,
                });
            });
        });


        childRef.on('child_added', snap => {
            previousList.push({
                serviceWebName: snap.val().Name.replace(/\s/g,''),
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
                <Info {...props} information={position.serviceName} db={this.props.db}/>
            )}/>
        );

        const serviceSelection = this.state.categoryList.map((position, index) =>
            <Route key={index} exact path={"/" + position.dimensionName} render={()=><Redirect push to="/"/>}/>
        );

        return (
        <div >
          <BrowserRouter>
            <div>
              <Switch>
                  <Route exact path = '/' component={MainLanding}/>
                  {serviceSelection}
                  {listOfLocations}
              </Switch>
            </div>
          </BrowserRouter>
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
