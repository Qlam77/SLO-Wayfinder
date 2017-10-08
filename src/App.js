import {Route, Switch} from 'react-router';
import { Link,  BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';

var destination = document.querySelector("#root");
            class App extends React.Component{
                render() {
                    return (
                        <div>
                        <BrowserRouter>
                            <div>
                                <Link to="/"><Header src="images/BCIT_SA.png"/></Link>
                                <Link to="/"><p className="center">Home</p></Link>
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

                    )
                }
            };

            class Header extends React.Component{
                render() {
                    return (
                        <div>
                            <div className="center">
                                <img src={this.props.src} alt="bcit" height="100px" width="300px"/>
                            </div>
                        </div>
                    )
                }
            };
            class Service extends React.Component{
                render() {
                    return (
                        <Link to={this.props.name}>
                            <figure className={this.props.styling}>
                                <p><img src={this.props.src} alt={this.props.name} height="60px" width="60px"/>
                                    <figcaption>{this.props.name}</figcaption></p>
                            </figure>
                        </Link>
                    )
                }
            };
            class Landing extends React.Component{
                render() {
                    return (
                        //easier to use table for this kind of layout even tho it's bad
                        <div className="center">
                            <Service src="images/intellectual.jpg" name="Intellectual"/>
                            <Service src="images/occupational.jpg" name="Occupational"/>
                            <Service src="images/Physical.jpg" name="Physical"/>
                            <br/>
                            <Service src="images/Financial.jpg" name="Financial"/>
                            <span> </span>
                            <Service src="images/Psychological.jpg" name="Psychological"/>
                            <br/>
                            <Service src="images/Environmental.jpg" name="Environmental"/>
                            <Service src="images/Spiritual.jpg" name="Spiritual"/>
                            <Service src="images/Social.jpg" name="Social"/>
                        </div>
                    )
                }
            };
            class Intellectual extends React.Component{
                render() {
                    return (
                        <div>
                            <p>You are an intellectual being</p>
                            <div>PlaceHolder</div>
                            <div>PlaceHolder</div>
                            <div>PlaceHolder</div>
                            <div>PlaceHolder</div>
                            <div>PlaceHolder</div>
                            <div>PlaceHolder</div>
                            <div>PlaceHolder</div>
                            <div>PlaceHolder</div>
                            <div>PlaceHolder</div>
                        </div>
                    )
                }
            };
            class Occupational extends React.Component{
                render() {
                    return (
                        <p>You are an occupational being</p>
                    )
                }
            };

            class Physical extends React.Component{
                render() {
                    return (
                        <p>You are an physical being</p>
                    )
                }
            };

            class Financial extends React.Component{
                render() {
                    return (
                        <p>You are an financial being</p>
                    )
                }
            };

        class Psychological extends React.Component{
            render() {
                    return (
                        <p>You are an psychological being</p>
                    )
                }
            };

        class Environmental  extends React.Component{
            render() {
                    return (
                        <p>You are an environmental being</p>
                    )
                }
            };

            class Spiritual  extends React.Component{
                render() {
                    return (
                        <p>You are an spiritual being</p>
                    )
                }
            };

            class Social extends React.Component{
                render() {
                    return (
                        <p>You are an social being</p>
                    )
                }
            };
export default App;
