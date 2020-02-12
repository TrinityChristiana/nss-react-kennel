import { Route } from 'react-router-dom';
import React, { Component } from 'react';
import Home from './home/Home';
import AnimalList from './animal/AnimalList';
//only include these once they are built - previous practice exercise
import LocationList from './location/LocationList';
import EmployeeList from './employee/EmployeeList';
import OwnerList from './owner/OwnerList';
import AnimalDetail from './animal/AnimalDetail';
import AnimalManager from '../modules/AnimalManager';

class ApplicationViews extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loadingStatus: true
		};
	}

	changeloading = () => {
		this.setState({ loadingStatus: !this.state.loadingStatus });
	};



	render() {
		return (
			<React.Fragment>
				<Route
					exact
					path='/'
					render={props => {
						return <Home />;
					}}
				/>
				<Route
					path='/animals'
					render={props => {
						return (
							<AnimalList
								loadingStatus={this.state.loadingStatus}
							/>
						);
					}}
				/>
				<Route
					path='/animals/:animalId'
					render={props => {
						return (
							<AnimalDetail
								loadingStatus={this.state.loadingStatus}
								animalId={parseInt(props.match.params.animalId)}
								// handleDelete={this.handleDelete}
								changeloading={this.changeloading}
								{...props}
							/>
						);
					}}
				/>
				<Route
					path='/location'
					render={props => {
						return <LocationList />;
					}}
				/>
				<Route
					path='/employee'
					render={props => {
						return <EmployeeList />;
					}}
				/>
				<Route
					path='/owner'
					render={props => {
						return <OwnerList />;
					}}
				/>
			</React.Fragment>
		);
	}
}

export default ApplicationViews;
