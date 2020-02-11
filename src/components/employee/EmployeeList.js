import React, { Component } from 'react';
//import the components we will need
import EmployeeCard from './EmployeeCard';
import EmployeeManager from '../../modules/EmployeeManager';

class EmployeeList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			employees: []
		};
	}
	//define what this component needs to render

	componentDidMount() {
		console.log('EMPLOYEE LIST: ComponentDidMount');
		//getAll from AnimalManager and hang on to that data; put it in state
		EmployeeManager.getAll().then(employee => {
			this.setState({
				employees: employee
			});
		});
	}

	deleteEmployee = id => {
		EmployeeManager.delete(id).then(() => {
			EmployeeManager.getAll().then(employee => {
				this.setState({
					employees: employee
				});
			})
		})
	}

	render() {
		console.log('EMPLOYEE LIST: Render');

		return (
			<div className='container-cards'>
				{this.state.employees.map(employee => (
					<EmployeeCard
						key={employee.id}
						id={employee.id}
						firstName={employee.firstName}
						lastName={employee.lastName}
						employeeNumber={employee.employeeNumber}
						deleteEmployee={this.deleteEmployee}
					/>
				))}
			</div>
		);
	}
}

export default EmployeeList;
