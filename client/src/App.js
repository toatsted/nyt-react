import React, { Component } from 'react';

import Header from './components/Header/Header';
import Search from './components/Search/Search';

import {
	Container
} from 'reactstrap';

class App extends Component {
	render() {
		return (
			<Container className="App" fluid={true}>
					<Header />
					<Container>
						<Search />
					</Container>
			</Container>
		);
	}
}

export default App;
