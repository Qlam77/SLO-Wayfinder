import React from 'react';
import Header from '../shared_components/Header';
import DimensionImg from './DimensionImage'
import RelatedLinks from './MobileRelatedLinks'
import Background from '../shared_components/Background';

/*
    Displays the intermediate page of the dimension and their services
 */
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

/*
    Displays the list of services based on dimension
 */
class ServiceContainer extends React.Component {
    render() {
    return (
      <div className="mobile_dimensions_container">
        <div>
            {/*Displays the dimension*/}
            <DimensionImg db={this.props.db} service={this.props.service}/>
        </div>
        <div>
            {/*Displays the services*/}
            <RelatedLinks db={this.props.db} service={this.props.service} isMounted={true}/>
        </div>
      </div>
    );
  }
}

export default ServiceSelector;
