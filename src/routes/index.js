import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
import HomeView from './homeView/homeView';
import AboutView from './aboutView/aboutView';
import ArtistsView from './artistsView/artistsView';

const getRoutes = function() {
	return (
		<div>
		<Route name="Main" component={MainView} />
		<Switch>
		<Route exact path="/" component={HomeView} />
		<Route path="/about" component={AboutView} />
		<Route path="/artists" component={ArtistsView} />
		</Switch>
		</div>
		)
};

export default getRoutes;
