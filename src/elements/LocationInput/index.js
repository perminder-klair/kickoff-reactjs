/* global google:true */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import Field from '../Field';

class LocationInput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			query: props.value || '',
		};
	}

	componentDidMount() {
		$('.ui.search.location').on('keydown', this.handleKeyDown);
	}

	componentWillUnmount() {
		$('.ui.search.location').off('keydown', this.handleKeyDown);
	}

	onChange = e => {
		this.setState({
			query: e.target.value,
		});

		this.props.onChange(e.target.value);
	};

	handleKeyDown = () => {
		if (this.state.query.length < 2) {
			return;
		}

		const autocompleteService = new google.maps.places
			.AutocompleteService();
		autocompleteService.getPlacePredictions(
			{
				input: this.state.query,
				location: new google.maps.LatLng(0, 0),
				radius: 100,
			},
			suggestions => {
				// console.log('suggestions', suggestions);
				$('.ui.search.location').search({
					source: suggestions,
					minCharacters: 2,
					maxResults: 12,
					cache: false,
					searchFullText: true,
					searchFields: ['description'],
					fields: {
						categories: 'results', // array of categories (category view)
						categoryName: 'name', // name of category (category view)
						categoryResults: 'results', // array of results (category view)
						description: 'descriptionNO', // result description
						image: 'image', // result image
						price: 'price', // result price
						results: 'results', // array of results (standard)
						title: 'description', // result title
						action: 'action', // "view more" object name
						actionText: 'text', // "view more" text
						actionURL: 'url', // "view more" url
					},
					onSelect: result => {
						this.setState({
							query: result.description,
						});
						this.props.onChange(result.description);
					},
				});
			},
		);
	};

	render() {
		return (
			<Field name={this.props.name} label={this.props.label}>
				<div className="ui search location">
					<input
						className="prompt"
						type="text"
						autoComplete="off"
						placeholder={this.props.label}
						name={this.props.name}
						ref={this.props.name}
						id={this.props.name}
						value={this.state.query}
						onChange={this.onChange}
						onBlur={this.props.onBlur}
					/>
					<div className="results" />
				</div>
			</Field>
		);
	}
}

LocationInput.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
    value: PropTypes.string, // eslint-disable-line
    onBlur: PropTypes.func // eslint-disable-line
};

export default LocationInput;
