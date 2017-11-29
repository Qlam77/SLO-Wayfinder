import React from 'react';
import {Row, Col, Dropdown, DropdownButton, ButtonToolbar, MenuItem} from 'react-bootstrap';
import ImageLoader from './ImageLoader';
import BookstoreIcon from './images/bookstore.jpg';
import EjobsIcon from './images/eJobs.jpg';
import RecreationIcon from './images/recreation.jpg';
import StudentFinancialAidIcon from './images/financial aid.jpg';
import CounsellingIcon from './images/counselling.jpg';
import HarassmentAndDiscriminationIcon from './images/harassment and discrimination office.jpg';
import ContemplationRoomIcon from './images/health.jpg';
import {Link} from 'react-router-dom';
import MenuLinker from './MenuLinker'
import LinkDescription from './LinkDescription'
import Description from './MiniLinkDescription'
import DesktopHeader from "./DesktopHeader";
import MainLandingLinks from "./MainLandingLinks";

class tabElement extends React.Component {
    render() {

        return (
            <ButtonToolbar>
                <Row>
                    <Col xs={3} className="dropdown-leftTop1" >
                        <DropdownButton title={<ImageLoader src="./images/intellectual.jpg" name="Intellectual"/>} key={1} noCaret id={`dropdown-no-caret-$1`}>
                            <LinkDescription title="Intellectual WellBeing">
                                <Description title="Study Smarter, Not Harder">
                                    Recogizing creative abilities and finding new ways to
                                    continually expand knowledge and challenge your mind
                                </Description>
                            </LinkDescription>
                            <MenuItem divider/>
                            <MenuItem header>
                                <MainLandingLinks db={this.props.db} information="Intellectual"/>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col xs={3} className="dropdown-leftTop2" >
                        <DropdownButton title={<ImageLoader src="./images/occupational.jpg" name="Occupational"/>} key={2} noCaret id={`dropdown-no-caret-$2`}>
                            <LinkDescription title="Occupational WellBeing">
                                <Description title="Launch Into Your Career">
                                        Creating networks, building skills, challenging
                                        oneself through new career opportunities
                                        and developing a sense of satisfaction
                                        and enrichment through one's work
                                </Description>
                            </LinkDescription>
                            <MenuItem divider/>
                            <MenuItem header>
                                <MainLandingLinks db={this.props.db} information="Occupational"/>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col xs={3} className="dropdown-rightTop1">
                        <DropdownButton pullRight title={<ImageLoader src="./images/physical.jpg" name="Physical"/>} key={3} noCaret id={`dropdown-no-caret-$3`}>
                            <LinkDescription title="Physical WellBeing">
                                <Description title="Wellbeing for Every Body">
                                    Creating opportunities and recognizing the need for sleep,
                                    healthy eating, active living and self-care practices.
                                </Description>
                            </LinkDescription>
                            <MenuItem divider />
                            <MenuItem header>
                                <MainLandingLinks db={this.props.db} information="Physical"/>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col xs={3} className="dropdown-rightTop2">
                        <DropdownButton pullRight title={<ImageLoader src="./images/financial.jpg" name="Financial"/>} key={4} noCaret id={`dropdown-no-caret-$4`}>
                            <LinkDescription title="Financial WellBeing">
                                <Description title="Invest in Your Financial Health">
                                    Being Aware of and satisfied with your
                                    current financial situation and foreseeable future
                                    financial situations.
                                </Description>
                            </LinkDescription>
                            <MenuItem divider />
                            <MenuItem header>
                                <MainLandingLinks db={this.props.db} information="Financial"/>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col xs={3} className="dropdown-leftTop1" >
                        <DropdownButton title={<ImageLoader src="./images/psychological.jpg" name="Psychological"/>} key={5} noCaret id={`dropdown-no-caret-$5`}>
                            <LinkDescription title="Psychological Wellbeing">
                                <Description title="Make Time for Me Time">
                                    Maintaining a positive outlook on life by developing effective coping strategies to reduce and manage stress, and through accepting and exploring oneself.
                                </Description>
                            </LinkDescription>
                            <MenuItem divider/>
                            <MenuItem header>
                                <Row>
                                    <MainLandingLinks db={this.props.db} information="Psychological"/>
                                </Row>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col xs={3} className="dropdown-leftTop2" >
                        <DropdownButton title={<ImageLoader src="./images/environmental.jpg" name="Environmental"/>} key={6} noCaret id={`dropdown-no-caret-$6`}>
                             <LinkDescription title="Environmental WellBeing">
                                 <Description title="Create Space for Your Wellbeing">
                                     Creating and occupying safe, supporting, inclusive and sustainable environments that support wellbeing.
                                 </Description>
                             </LinkDescription>
                             <MenuItem divider/>
                             <MenuItem header>
                                 <Row>
                                     <MainLandingLinks db={this.props.db} information="Environmental"/>
                                 </Row>
                             </MenuItem>
                         </DropdownButton>
                    </Col>
                    <Col xs={3} className="dropdown-rightTop1">
                        <DropdownButton pullRight title={<ImageLoader src="./images/spiritual.jpg" name="Spiritual"/>} key={7} noCaret id={`dropdown-no-caret-$7`}>
                            <LinkDescription title="Spiritual WellBeing">
                                <Description title="Explore Purpose and Meaning">
                                    Develop and expanding a sense of purpose and meaning in life.
                                </Description>
                            </LinkDescription>
                            <MenuItem divider />
                            <MenuItem header>
                                <Row>
                                    <MainLandingLinks db={this.props.db} information="Spiritual"/>
                                </Row>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col xs={3} className="dropdown-rightTop2">
                        <DropdownButton pullRight title={<ImageLoader src="./images/social.jpg" name="Social"/>} key={8} noCaret id={`dropdown-no-caret-$8`}>
                            <LinkDescription title="Social WellBeing">
                                <Description title="Engage with (Y)Our Community">
                                    Developing and mainataning a sense of connection and belonging through healthy relationships and support systems.
                                </Description>
                        </LinkDescription>
                        <MenuItem divider />
                        <MenuItem header>
                            <Row>
                                <MainLandingLinks db={this.props.db} information="Social"/>
                            </Row>
                        </MenuItem>
                        </DropdownButton>
                    </Col>
                </Row>
            </ButtonToolbar>
        );
    }
}

export default tabElement;
