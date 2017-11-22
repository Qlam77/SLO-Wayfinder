import React from 'react';
import {Link} from 'react-router-dom';

class MenuLinker extends React.Component {
    render() {
        const imageResizer = {
            display: "inline-block",
            width: "50px",
            height: "50px",
            marginRight: "3%"
        };
        return(
            <Link exact to={this.props.path}>
                <div>
                    <img style={imageResizer} src={this.props.src} alt={this.props.name}/>
                    <div className="linkMe">
                        {this.props.children}
                    </div>
                </div>
            </Link>
        );
    }
}

export default MenuLinker;