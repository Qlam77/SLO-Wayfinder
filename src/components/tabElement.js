import React from 'react';
import {Row, Col, Dropdown, DropdownButton, ButtonToolbar, MenuItem} from 'react-bootstrap';
import ImageLoader from './ImageLoader';
import BookstoreIcon from './images/bookstore.jpg';
import {Link} from 'react-router-dom';
import MenuLinker from './MenuLinker'
import LinkDescription from './LinkDescription'
import Description from './MiniLinkDescription'
import DesktopHeader from "./DesktopHeader";

class tabElement extends React.Component {
    render() {
        return (
            <ButtonToolbar>
                <Row>
                    <Col xs={3} className="dropdown-leftTop" >
                        <DropdownButton title={<ImageLoader src="./images/intellectual.jpg" name="Intellectual"/>} key={1} noCaret id={`dropdown-no-caret-$1`}>
                            <LinkDescription title="Intellectual WellBeing">
                                <Description title="Study Smarter, Not Harder">
                                    Recogizing creative abilities and finding new ways to
                                    continually expand knowledge and challenge your mind
                                </Description>
                            </LinkDescription>
                            <MenuItem divider/>
                            <MenuItem header>
                                <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore">You can buy your books here</MenuLinker>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col xs={3} className="dropdown-leftTop" >
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
                                <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore">You can buy your books here</MenuLinker>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col xs={3} className="dropdown-rightTop">
                        <DropdownButton pullRight title={<ImageLoader src="./images/physical.jpg" name="Physical"/>} key={3} noCaret id={`dropdown-no-caret-$3`}>
                            <LinkDescription title="Physical WellBeing">
                                <Description title="Wellbeing for Every Body">
                                    Creating opportunities and recognizing the need for sleep,
                                    healthy eating, active living and self-care practices.
                                </Description>
                            </LinkDescription>
                            <MenuItem divider />
                            <MenuItem header>
                                <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore">You can buy your books here</MenuLinker>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col xs={3} className="dropdown-rightTop">
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
                                <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore">You can buy your books here</MenuLinker>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                </Row>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col xs={3} className="dropdown-leftDown" >
                        <DropdownButton dropup title={<ImageLoader src="./images/psychological.jpg" name="Psychological"/>} key={1} noCaret id={`dropdown-no-caret-$1`}>
                            <LinkDescription title="Intellectual WellBeing">
                                <Description title="Study Smarter, Not Harder">
                                    Recogizing creative abilities and finding new ways to continually expand knowledge and challenge your mind
                                </Description>
                            </LinkDescription>
                            <MenuItem divider/>
                            <MenuItem header>
                                <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore">You can buy your books here</MenuLinker>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col xs={3} className="dropdown-leftDown" >
                        <DropdownButton dropup title={<ImageLoader src="./images/environmental.jpg" name="Environmental"/>} key={2} noCaret id={`dropdown-no-caret-$2`}>
                            <LinkDescription title="Occupational WellBeing">
                                <Description title="Launch Into Your Career">
                                    <div className="testWrap">
                                            Creating networks, building skills, challenging oneself through new career opportunities and developing a sense of satisfaction and enrichment through one's work
                                    </div>
                                </Description>
                            </LinkDescription>
                            <MenuItem divider/>
                            <MenuItem header>
                                <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore">You can buy your books here</MenuLinker>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col xs={3} className="dropdown-rightDown">
                        <DropdownButton dropup pullRight title={<ImageLoader src="./images/spiritual.jpg" name="Spiritual"/>} key={3} noCaret id={`dropdown-no-caret-$3`}>
                            <LinkDescription title="Physical WellBeing">
                                <Description title="Wellbeing for Every Body">
                                    <div className="testWrap">
                                        Creating opportunities and recognizing the need for sleep, healthy eating, active living and self-care practices.
                                    </div>
                                </Description>
                            </LinkDescription>
                            <MenuItem divider />
                            <MenuItem header>
                                <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore">You can buy your books here</MenuLinker>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                    <Col xs={3} className="dropdown-rightDown">
                        <DropdownButton dropup pullRight title={<ImageLoader src="./images/social.jpg" name="Social"/>} key={4} noCaret id={`dropdown-no-caret-$4`}>
                            <LinkDescription title="Financial WellBeing">
                                <Description title="Invest in Your Financial Health">
                                    Being Aware of and satisfied with your
                                    <br/>
                                    current financial situation and foreseeable future
                                    <br/>
                                    financial situations.
                                </Description>
                            </LinkDescription>
                            <MenuItem divider />
                            <MenuItem header>
                                <MenuLinker path="/Bookstore" src={BookstoreIcon} name="Bookstore">You can buy your books here</MenuLinker>
                            </MenuItem>
                        </DropdownButton>
                    </Col>
                </Row>
            </ButtonToolbar>
        );
    }
}

export default tabElement;


