import React, { Component } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import ownerManager from '../../modules/OwnerManager';

class OwnerList extends Component {
	//define what this component needs to render
	state = {
		owners: []
	};

	componentDidMount() {
		console.log('Owner LIST: ComponentDidMount');
		//getAll from AnimalManager and hang on to that data; put it in state
		ownerManager.getAll().then(owner => {
			this.setState({
				owners: owner
			});
		});
	}

	render() {
		console.log('Owner LIST: Render');

		return (
			<div className='container-cards'>
				{this.state.owners.map(owner => (
					<OwnerCard />
				))}
			</div>
		);
	}
}

export default OwnerList;
