import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          <i className="fas fa-film" />
          Cinema
        </h1>
        <div className="searchBar">
          <div className="ui category search ">
            <div className="ui icon input">
              <input
                className="prompt"
                type="text"
                placeholder="search movies"
              />
              <i className="search icon" />
            </div>
            <div className="results" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
