import React from 'react'
import {Row, Col, Dropdown, DropdownButton, MenuItem} from 'react-bootstrap';
import LinkDescription from './LinkDescription'
import Description from './MiniLinkDescription'
import MainLandingLinks from "./MainLandingLinks";
import Dimensions from './desktop_figure';


class RightDropdown extends React.Component {
    render() {
        return(
            <DropdownButton pullRight title={<Dimensions src={this.props.src} name={this.props.category}>{this.props.desc}</Dimensions>} key={this.props.keyValue} noCaret id={"dropdown-no-caret-$" + this.props.keyValue}>
                <LinkDescription title={this.props.title}>
                    <Description title={this.props.desc}>
                        {this.props.children}
                    </Description>
                </LinkDescription>
                <MenuItem divider/>
                <MenuItem header>
                    <MainLandingLinks db={this.props.db} information={this.props.category}/>
                </MenuItem>
            </DropdownButton>
        );
    }
}

export default RightDropdown;
