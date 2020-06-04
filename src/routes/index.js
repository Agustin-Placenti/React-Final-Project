import React from 'react';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainView from './mainView/mainView';
import AlbumView from './albumView/albumView';

const getRoutes = function() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/" render={() => (
                    <Redirect to="/main"/>
                )}/>
                <Route path='/main' component={MainView} />
                <Switch>
                    <Route path="/album/:id" component={AlbumView} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};

export default getRoutes;
