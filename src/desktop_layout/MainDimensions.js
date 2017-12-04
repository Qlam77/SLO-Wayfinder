import React from 'react';
import {Row, Col, ButtonToolbar} from 'react-bootstrap';
import LeftDropdown from './DesktopLeftDropdown';
import RightDropdown from './DesktopRightDropdown';

class tabElement extends React.Component {
    render() {

        return (
            <ButtonToolbar>
                <Row>
                    <Col xs={3} className="dropdown-leftTop1" >
                        <LeftDropdown db={this.props.db} category="Intellectual" src="./images/intellectual.jpg" title="Intellectual Wellbeing" desc="Study Smarter, Not Harder" keyValue="1">
                            Recogizing creative abilities and finding new ways to
                            continually expand knowledge and challenge your mind
                        </LeftDropdown>
                    </Col>
                    <Col xs={3} className="dropdown-leftTop2" >
                        <LeftDropdown db={this.props.db} category="Occupational" src="./images/occupational.jpg" title="Occupational Wellbeing" desc="Launch Into Your Career" keyValue="2">
                            Creating networks, building skills, challenging
                            oneself through new career opportunities
                            and developing a sense of satisfaction
                            and enrichment through one's work.
                        </LeftDropdown>
                    </Col>
                    <Col xs={3} className="dropdown-rightTop1">
                        <RightDropdown db={this.props.db} category="Physical" src="./images/physical.jpg" title="Physical Wellbeing" desc="Wellbeing for Every Body" keyValue="3">                                    
                        Creating opportunities and recognizing the need for sleep,
                            healthy eating, active living and self-care practices.
                        </RightDropdown>
                    </Col>
                    <Col xs={3} className="dropdown-rightTop2">
                        <RightDropdown db={this.props.db} category="Financial" src="./images/financial.jpg" title="Financial Wellbeing" desc="Invest in Your Financial Health" keyValue="4">
                            Being Aware of and satisfied with your
                            current financial situation and foreseeable future
                            financial situations.
                        </RightDropdown>
                    </Col>
                </Row>
                <br/>
                <br/>
                <Row>
                    <Col xs={3} className="dropdown-leftTop1" >
                        <LeftDropdown db={this.props.db} category="Psychological" src="./images/psychological.jpg" title="Psychological Wellbeing" desc="Make Time for Me Time" keyValue="5">
                            Maintaining a positive outlook on life by developing effective coping strategies to reduce and manage stress, and through accepting and exploring oneself.
                        </LeftDropdown>
                    </Col>
                    <Col xs={3} className="dropdown-leftTop2" >
                        <LeftDropdown db={this.props.db} category="Environmental" src="./images/environmental.jpg" title="Environmental Wellbeing" desc="Create Space for Your Wellbeing" keyValue="6">
                            Creating and occupying safe, supporting, inclusive and sustainable environments that support wellbeing.
                        </LeftDropdown>
                    </Col>
                    <Col xs={3} className="dropdown-rightTop1">
                        <RightDropdown db={this.props.db} category="Spiritual" src="./images/spiritual.jpg" title="Spiritual Wellbeing" desc="Explore Purpose and Meaning" keyValue="7">
                            Develop and expanding a sense of purpose and meaning in life.
                        </RightDropdown>
                    </Col>
                    <Col xs={3} className="dropdown-rightTop2">
                        <RightDropdown db={this.props.db} category="Social" src="./images/social.jpg" title="Social Wellbeing" desc="Engage with (Y)Our Community" keyValue="8">
                            Developing and mainataning a sense of connection and belonging through healthy relationships and support systems.
                        </RightDropdown>
                    </Col>
                </Row>
            </ButtonToolbar>
        );
    }
}

export default tabElement;
