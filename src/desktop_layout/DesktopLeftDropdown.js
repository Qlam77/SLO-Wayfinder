import React from 'react'
import {DropdownButton, MenuItem} from 'react-bootstrap';
import LinkDescription from '../shared_components/LinkDescription'
import Description from './DimensionDescription'
import MainLandingLinks from "./MainLandingLinks";
import Dimensions from './DesktopFigure';

/*
    Creates a drop down that drops from the left with the parameters
 */
class LeftDropdown extends React.Component {
    render() {
        return(
            <DropdownButton title={<Dimensions src={this.props.src} name={this.props.category}>{this.props.desc}</Dimensions>} key={this.props.keyValue} noCaret id={"dropdown-no-caret-$" + this.props.keyValue}>
                    {/*Adds information to the dropdown as a title*/}
                <LinkDescription title={this.props.title}>
                    {/*Adds information to the dropdown as a subtext*/}
                    <Description title={this.props.desc}>
                        {this.props.children}
                    </Description>
                </LinkDescription>
                <MenuItem divider/>

                {/*Adds related links to the dropdown*/}
                <MenuItem header>
                    <MainLandingLinks db={this.props.db} information={this.props.category} isMounted={true}/>
                </MenuItem>
            </DropdownButton>
        );
    }
}

export default LeftDropdown;
