import React from 'react';
import {Col} from 'react-bootstrap';
import MiniWrapper from './ContentWrapper';

/*
    Wraps image content with a style
 */
class ContentImage extends React.Component {
    render() {
        return (
            <Col xsOffset={1} xs={4}>
                <MiniWrapper>
                    <figure>
                        {/*Accepts an image as the main content and adds a caption*/}
                        <img src={this.props.image} className="img-responsive service_portrait" alt={this.props.name}/>
                        <p className="service_desc">
                            {this.props.children}
                        </p>
                    </figure>
                    <a className="service_link" rel="external" href={"https://" + this.props.linkLocation}>Learn more</a>
                </MiniWrapper>
            </Col>
        );
    }
}

export default ContentImage;
