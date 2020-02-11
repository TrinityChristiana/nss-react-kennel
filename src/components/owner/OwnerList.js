import React, { Component } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import OwnerManager from '../../modules/OwnerManager';

class OwnerList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			owners: []
		};
	}
	//define what this component needs to render

	componentDidMount() {
		console.log('Owner LIST: ComponentDidMount');
		//getAll from AnimalManager and hang on to that data; put it in state
		OwnerManager.getAll().then(owner => {
			this.setState({
				owners: owner
			});
		});
	}

	removeOwner = id => {
		OwnerManager.delete(id).then(() => {
			OwnerManager.getAll().then(owner => {
				this.setState({
					owners: owner
				});
			})
		});
	};

	render() {
		console.log('Owner LIST: Render');

		return (
			<div className='container-cards'>
				{this.state.owners.map(owner => (
					<OwnerCard
						key={owner.id}
						firstName={owner.firstName}
						lastName={owner.lastName}
						phoneNumber={owner.phoneNumber}
						petName={owner.petName}
						id={owner.id}
						removeOwner={this.removeOwner}
					/>
				))}
			</div>
		);
	}
}

export default OwnerList;
