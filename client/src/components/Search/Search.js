import React, { Component } from 'react';
import './Search.css';

import {
	Form,
	FormGroup,
	Label,
	Input,
	Button
} from 'reactstrap'

export default class Search extends Component {
	state = {
		topic: null,
		startYear: null,
		endYear: null
	}

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value 
		})
	}

	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	}

	render() {
		return (
			<div className="search">
				<h2>Search</h2>

				<Form onSubmit={this.handleSubmit}>
					<FormGroup>
						<Label for="topic">Topic</Label>
						<Input onChange={this.handleChange} className="input" type="text" name="topic" />
					</FormGroup>

					<FormGroup>
						<Label for="startYear">Start Year</Label>
						<Input onChange={this.handleChange} className="input" type="text" name="startYear" />
					</FormGroup>

					<FormGroup>
						<Label for="endYear">End Year</Label>
						<Input onChange={this.handleChange} className="input" type="text" name="endYear" />
					</FormGroup>			

					<Button type="submit">Submit</Button>
				</Form>
			</div>
		);
	}
}
