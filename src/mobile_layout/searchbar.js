import React from 'react';

class SearchBar extends React.Component {
  render() {
    const searchStyle = {
      backgroundColor: "#ffffff",
      width: "80%",
      display: "block",
      margin: "0px auto",
      borderRadius: 5
    }
    const sectionStyle = {
      backgroundColor: "#aaaaaa",
      padding: 10
    }
    return (
      <div style={sectionStyle}>
        <div style={searchStyle}>
          <input type="text" />
        </div>
      </div>
    );
  }
};

export default SearchBar;
