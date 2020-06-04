import React, { Component } from 'react';
import Proptypes from 'prop-types';
import lupa from '../../assets/lupa.jpg';
import './searcher.css';
import searcherActions from '../../redux/actions/searcherActions.js'
import { connect } from 'react-redux'

class Searcher extends Component {

    constructor(props) {
        super(props);
        this.handleSearchArtist = this.handleSearchArtist.bind(this);
    }

    busquedaRef = React.createRef();
 
    handleSearchArtist = (e) => {
        e.preventDefault();
        this.props.searchArtist(this.busquedaRef.current.value);
        //this.props.searchArtistWithApi();
    }

    render() {
        return (
            <form className="searcher" onSubmit={this.handleSearchArtist}>
                <img src={lupa} 
                    onClick={this.handleSearchArtist} 
                    className="searcher__search-img"
                    alt="lupa"
                />
                <input 
                    ref={this.busquedaRef} 
                    type="text" id="artistInput" 
                    placeholder={this.props.placeholder} 
                    className={this.props.className}
                />
            </form>
        );
    }
}

Searcher.propTypes = {
    placeholder: Proptypes.string,
    className: Proptypes.string
};

export default connect (
    null, {
        searchArtist: searcherActions.searchArtist,
        searchArtistWithApi: searcherActions.searchArtistWithApi
    }
)(Searcher)
