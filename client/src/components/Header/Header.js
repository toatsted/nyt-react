import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
	render() {
		return (
			<div className="header">
				<h1>New York Times Article Scrubber</h1>
				<h4>Search for and annotate articles of intrest!</h4>
			</div>
		)
	}
}
