import React, { Component } from 'react';
//import the components we will need
import LocationCard from './LocationCard';
import locationManager from '../../modules/LocationManager';
import LocationManager from '../../modules/LocationManager';

class LocationList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			locations: []
		};
	}
	//define what this component needs to render

	componentDidMount() {
		console.log('Location LIST: ComponentDidMount');
		//getAll from AnimalManager and hang on to that data; put it in state
		locationManager.getAll().then(location => {
			this.setState({
				locations: location
			});
		});
	}

	closeLocation = id => {
		LocationManager.delete(id).then(() => {
			LocationManager.getAll().then(location => {
				this.setState({
					locations: location
				});
			})
		});
	};

	render() {
		console.log('Location LIST: Render');

		return (
			<div className='container-cards'>
				{this.state.locations.map(location => (
					<LocationCard
						key={location.id}
						branchName={location.branchName}
						address={location.address}
						id={location.id}
						closeLocation={this.closeLocation}
					/>
				))}
			</div>
		);
	}
}

export default LocationList;
