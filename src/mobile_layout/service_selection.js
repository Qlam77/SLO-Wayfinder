import React from 'react';
import Header from '../components/Header';
import DimensionImg from './dimensionImg'
import RelatedLinks from './mobile_related_links'
import Background from '../components/Background';

class ServiceSelector extends React.Component {
  render() {
    return(
      <div>
        <Background/>
        <Header size="150"/>
        <ServiceContainer db={this.props.db} service={this.props.service} />
      </div>
    );
  }
};

class ServiceContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dimensionList: []
        }
    };


    render() {
    return (
      <div className="mobile_dimensions_container">
        <div>
            <DimensionImg db={this.props.db} service={this.props.service}/>
        </div>
        <div>
            <RelatedLinks db={this.props.db} service={this.props.service}/>
        </div>
      </div>
    );
  }
}

export default ServiceSelector;
