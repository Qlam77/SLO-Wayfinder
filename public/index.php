<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>SLO Project</title>
        <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css" rel="stylesheet">
        <script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
        <script src="https://unpkg.com/react@15/dist/react.js"></script>
        <script src="https://unpkg.com/react-dom@15/dist/react-dom.js"></script>
        <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
        <script src="https://npmcdn.com/react-router@3.0.2/umd/ReactRouter.min.js"></script>
        <style>
            figure {
                display: inline-block
            }
            div span {
                margin: 0 10%;
            }
        </style>
    </head>
    <body>
        <div id="container">
        </div>
        <script type="text/babel">
            var destination = document.querySelector("#container");
            var { Router,
                Route,
                IndexRoute,
                IndexLink,
                hashHistory,
                Link } = ReactRouter;

            var App = React.createClass({
                render: function() {
                    return (
                        <div>
                            <IndexLink to="/"><Header src="images/BCIT_SA.png"/></IndexLink>
                            <p className="center"><IndexLink to="/">Home</IndexLink></p>

                            <div>
                                {this.props.children}
                            </div>
                        </div>

                    )
                }
            });

            var Header = React.createClass({
                render: function() {
                    return (
                        <div>
                            <div className="center">
                                <img src={this.props.src} alt="bcit" height="100px" width="300px"/>
                            </div>
                        </div>
                    )
                }
            });
            var Service = React.createClass({
                render: function() {
                    return (
                        <Link to={this.props.name}>
                            <figure className={this.props.styling}>
                                <p><img src={this.props.src} alt={this.props.name} height="60px" width="60px"/>
                                    <figcaption>{this.props.name}</figcaption></p>
                            </figure>
                        </Link>
                    )
                }
            });
            var Landing = React.createClass({
                render: function() {
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
            });
            var Intellectual = React.createClass({
                render: function() {
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
            });

            var Occupational = React.createClass({
                render: function() {
                    return (
                        <p>You are an occupational being</p>
                    )
                }
            });

            var Physical = React.createClass({
                render: function() {
                    return (
                        <p>You are an physical being</p>
                    )
                }
            });

            var Financial = React.createClass({
                render: function() {
                    return (
                        <p>You are an financial being</p>
                    )
                }
            });

            var Psychological= React.createClass({
                render: function() {
                    return (
                        <p>You are an psychological being</p>
                    )
                }
            });

            var Environmental = React.createClass({
                render: function() {
                    return (
                        <p>You are an environmental being</p>
                    )
                }
            });

            var Spiritual = React.createClass({
                render: function() {
                    return (
                        <p>You are an spiritual being</p>
                    )
                }
            });

            var Social = React.createClass({
                render: function() {
                    return (
                        <p>You are an social being</p>
                    )
                }
            });
            ReactDOM.render(
                    <Router history={hashHistory}>
                        <IndexLink path = "/" component={App}>
                            <IndexRoute path = "Landing" component={Landing}/>
                            <Route path = "Intellectual" component={Intellectual}/>
                            <Route path = "Occupational" component={Occupational}/>
                            <Route path = "Physical" component={Physical}/>
                            <Route path = "Financial" component={Financial}/>
                            <Route path = "Psychological" component={Psychological}/>
                            <Route path = "Environmental" component={Environmental}/>
                            <Route path = "Spiritual" component={Spiritual}/>
                            <Route path = "Social" component={Social}/>
                        </IndexLink>
                    </Router>,
                destination
            );
        </script>

        <noscript>
            <p>Please Enable Javascript!</p>
        </noscript>
    </body>
</html>
