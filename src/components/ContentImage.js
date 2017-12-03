import React from 'react';
import {Col} from 'react-bootstrap';
import MiniWrapper from './MiniContentWrapper';

class ContentImage extends React.Component {
    render() {
        return (
            <Col xsOffset={1} xs={4}>
                <MiniWrapper>
                    <figure>
                        <img src={this.props.image} className="img-responsive"/>
                        <figcaption className="text-center">
                            {this.props.children}
                        </figcaption>
                    </figure>
                </MiniWrapper>
                <a className="serviceLink" rel="external" href={"https://" + this.props.linkLocation}>More Info</a>
            </Col>
        );
    }
}

export default ContentImage;