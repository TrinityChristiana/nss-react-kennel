import React, { Component } from 'react';

class EmployeeCard extends Component {
	render() {
		return (
		<div>
			<h1>{this.props.firstName} {this.props.lastName}</h1>
			<p>{this.props.employeeNumber}</p>
			</div>
		)
	}
}

export default EmployeeCard;
