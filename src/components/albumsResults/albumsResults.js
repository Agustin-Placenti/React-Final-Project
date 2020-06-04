import React, { Component } from 'react';
import Proptypes from 'prop-types';
import constants from '../../constants/constants.js';
import flechaDer from '../../assets/flecha-der.png';
import flechaIzq from '../../assets/flecha-izq.jpg';
import './albumsResults.css';

class AlbumsResults extends Component {

    constructor(props) {
        super(props);
        this.handleClearResults = this.handleClearResults.bind(this);
        this.handleNextResults = this.handleNextResults.bind(this);
        this.handlePreviousResults = this.handlePreviousResults.bind(this);
    }

    handleClearResults = () => {
        this.props.clearResults();
    }

    handleNextResults = () => {
        const {resultsCount, page} = this.props;
        if (resultsCount > page * constants.incremential) {
            this.props.nextResults();
        }
    }

    handlePreviousResults = () => {
        if (this.props.page > 1) {
            this.props.previousResults();
        }
    }

    parsePaginator = () => {
        const rightArroW = (
            <img width="60" height="40" 
                className="albums-results__next-arrow"
                src={flechaDer} 
                alt="flecha-der" 
                onClick={this.handleNextResults}
            />
        );
        const leftArrow = (
            <img width="60" height="40" 
                className="albums-results__back-arrow"
                src={flechaIzq} 
                alt="flecha-izq" 
                onClick={this.handlePreviousResults}
            />
        )
        return (
            <div className="albums-results__footer">
                {leftArrow}
                {rightArroW}
            </div>
        );
    }

    parseResults2 = (results2) => {
        results2.map(e => {
            return (
                <div>{e.id}</div>
            )
        })
    }

    render () {
        const results2Content = this.parseResults2(this.props.results2);
        const paginator = this.parsePaginator();
        return (
            <div className="albums-results">
                <div className="albums-results__body">
                    <div className="albums-results__title">
                        {constants.MAIN_VIEW_RESULTS_TITLE}<strong>{this.props.searchTerm}</strong>
                        <button 
                            className="albums-results__clear-button" 
                            onClick={this.handleClearResults}
                        >
                            {constants.MAIN_VIEW_CLEAR_RESULTS}
                        </button>
                    </div>
                    {this.props.albums}
                </div>
                {paginator}
                {results2Content}
            </div>
        )
    }
}

AlbumsResults.propTypes = {
    albums: Proptypes.object.isRequired,
    searchTerm: Proptypes.string.isRequired,
    clearResults: Proptypes.func,
    nextResults: Proptypes.func,
    previousResults: Proptypes.func,
    page: Proptypes.number,
    resultsCount: Proptypes.number,
    results2: Proptypes.object
}

export default AlbumsResults;
