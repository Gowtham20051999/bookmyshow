import React from 'react';

class SearchBar extends React.Component {
	render() {
		return (
			<div className="ui category search">
				<div className="ui icon input">
					<input className="prompt" type="text" placeholder ="search movies" />
					<i className="search icon" />
				</div>
				<div className="results" />
			</div>
		);
	}
}

export default SearchBar;
