import React, { Component } from 'react';

class OwnerCard extends Component {
	render() {
		return (
			<div>
				<h1>
					Owner: {this.props.firstName} {this.props.lastName}
				</h1>
				<p>Pet: {this.props.petName}</p>
				<p>Phone: {this.props.phoneNumber}</p>
				<button
					type='button'
					onClick={() => this.props.removeOwner(this.props.id)}>
					Remove
				</button>
			</div>
		);
	}
}

export default OwnerCard;
