import React from 'react';
import {Row, Col, Panel, Accordion} from 'react-bootstrap';
import MiniWrapper from './MiniContentWrapper';
import firebase from 'firebase'

class ContentHeader extends React.Component {
    render() {
        return (
            <div className="accordionTrigger">
                {this.props.name}
            </div>
        );
    }
}

export default ContentHeader;