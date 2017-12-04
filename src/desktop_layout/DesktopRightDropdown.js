import React from 'react'
import {DropdownButton, MenuItem} from 'react-bootstrap';
import LinkDescription from '../shared_components/LinkDescription'
import Description from './DimensionDescription'
import MainLandingLinks from "./MainLandingLinks";
import Dimensions from './DesktopFigure';


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
