import React from 'react';
import {Col} from 'react-bootstrap';
import MiniWrapper from './MiniContentWrapper';

class ContentImage extends React.Component {
    render() {
        return (
            <Col xsOffset={1} xs={4}>
                <MiniWrapper>
                    <figure>
                        <img src={this.props.image} className="img-responsive service_portrait"/>
                        <p className="service_desc">
                        {this.props.children}
                        </p>
                    </figure>
                    <a className="serviceLink" rel="external" href={"https://" + this.props.linkLocation}>Learn more</a>
                </MiniWrapper>
            </Col>
        );
    }
}

export default ContentImage;
