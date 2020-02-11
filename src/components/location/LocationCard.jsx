import React, { Component } from 'react';

class LocationCard extends Component {
	render() {
		return (
			<div>
				<p>Checkout our {this.props.branchName} branch</p>
				<address>{this.props.address}</address>
				<button
					type='button'
					onClick={() => this.props.closeLocation(this.props.id)}>
					Close
				</button>
			</div>
		);
	}
}

export default LocationCard;
