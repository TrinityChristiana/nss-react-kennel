import React, { Component } from 'react';

class EmployeeCard extends Component {
	render() {
		console.log(this.props)

		return (
		<div>
			<h1>{this.props.firstName} {this.props.lastName}</h1>
			<p>{this.props.employeeNumber}</p>
			<button type="button" onClick={() => this.props.deleteEmployee(this.props.id)}>Discharge</button>
		</div>
		)
	}
}

export default EmployeeCard;
