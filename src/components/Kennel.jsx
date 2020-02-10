import React, { Component } from 'react';
import AnimalCard from './animal/AnimalCard';
import LocationCard from "./location/LocationCard";
import EmployeeCard from "./employee/EmployeeCard";
import OwnerCard from './owner/OwnerCard'
import './Kennel.css';

class Kennel extends Component {
	render() {
		return (
			<div>
				<h2>
					Student Kennels
					<br />
					<small>Loving care when you're not there.</small>
				</h2>
                <LocationCard />
                <EmployeeCard />
                <OwnerCard />
				
				<div>
					<AnimalCard />
					<AnimalCard />
					<AnimalCard />
				</div>
			</div>
		);
	}
}

export default Kennel;
