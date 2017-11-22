import React from 'react';
import {Row, Col} from 'react-bootstrap';
import MiniWrapper from './MiniContentWrapper';
class ContentHeader extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xsOffset={4} xs={4}>
                        <MiniWrapper>
                            <h3 className="text-center">{this.props.children}</h3>
                        </MiniWrapper>
                    </Col>
                </Row>
                <br/>
                <br/>
            </div>
        );
    }
}

export default ContentHeader;