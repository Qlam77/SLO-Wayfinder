import React from 'react';
import {Row, Col, Panel, Accordion} from 'react-bootstrap';
import MiniWrapper from '../desktop_layout/ContentWrapper';
import firebase from 'firebase'

class ContentHeader extends React.Component {
    render() {
        return (
            <div className="accordion_trigger">
                {this.props.name}
            </div>
        );
    }
}

export default ContentHeader;