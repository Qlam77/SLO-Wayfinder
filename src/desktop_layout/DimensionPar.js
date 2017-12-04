import React from 'react';

/*
    This component styles the paragraph that follows the dimension image
 */
class DimensionPar extends React.Component {
  render() {
    return (
    <div>
      <h3 className="dimension_par_header">{this.props.header}</h3>
      <p className="dimension_par_content">{this.props.cont}</p>
    </div>
    );
  }
}

export default DimensionPar;
