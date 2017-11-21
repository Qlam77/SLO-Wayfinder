import React from 'react';
import {Col} from 'react-bootstrap';
import MiniWrapper from './MiniContentWrapper';

class ContentImage extends React.Component {
    render() {
        return (
            <Col xsOffset={1} xs={4}>
                <MiniWrapper>
                    <figure>
                        <img src={this.props.image} class="img-responsive"/>
                        <figcaption className="text-center">
                            {this.props.children}
                        </figcaption>
                    </figure>
                </MiniWrapper>
            </Col>
        );
    }
}

export default ContentImage;