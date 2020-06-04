import './mainView.css';
import React, { Component } from 'react';
import logo from '../../assets/spoty.png';
import constants from '../../constants/constants.js';
import Searcher from '../../components/searcher/searcher.js';
import Album from '../../components/album/album.js';
import AlbumsResults from '../../components/albumsResults/albumsResults.js';
import searcherActions from '../../redux/actions/searcherActions.js'
import { connect } from 'react-redux';

class MainView extends Component {

    parseInfoArtist(artists) {
        const {min, max} = this.props.searchReducer;
        if (artists.length > 1) {
            const albums = artists.slice(min, max).map(artist =>
                    <Album artist={artist} />
                );
        
            return (
                <AlbumsResults 
                    albums={albums}
                    searchTerm={this.props.searchReducer.searchTerm}
                    page={this.props.searchReducer.page}
                    clearResults={this.props.clearResults}
                    nextResults={this.props.nextResults}
                    previousResults={this.props.previousResults}
                    resultsCount={artists.length}
                    results2={this.props.searchReducer.results2}
                />
            )
        }
        return null;
    }

    render() {
        const infoArtists = this.parseInfoArtist(this.props.searchReducer.results);
        return (
            <article className="main-view">
                <header className="main-view__header">
                    <img src={logo} className="main-view__logo" alt="logo" />
                </header>
                <div className="main-view__body">
                    <div className="main-view__title"> {constants.MAIN_VIEW_SUBTITLE} </div>
                    <div className="main-view__subtitle"> {constants.MAIN_VIEW_TITLE} </div>
                    <Searcher placeholder={constants.MAIN_VIEW_INPUT_PLACEHOLDER} className="main-view__input"/>
                </div>
                {infoArtists}
            </article>
        );
    }
}

export default connect(
    state => ({
        searchReducer: state.searcherReducer,
    }),
    {
        clearResults: searcherActions.clearResults,
        nextResults: searcherActions.nextResults,
        previousResults: searcherActions.previousResults
    }
)(MainView);


