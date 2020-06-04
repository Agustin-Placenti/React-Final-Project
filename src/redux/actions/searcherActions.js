import actionTypes from "../../constants/actionTypes"
const axios = require('axios').default;

const searchArtistWithApiSuccess = (json) => {
    return {
        type: actionTypes.SEARCH_ARTIST2_SUCCESS,
        payload: json
    }
}

const searchArtistWithApi = () => (dispatch) => {
    const url = 'https://jsonplaceholder.typicode.com/todos';  
    const request = axios({
        method: 'GET',
        url,
        headers: []
    });
    
    const searchArtistWithApiPromise = request.then(
        response => dispatch(searchArtistWithApiSuccess(response)),
    );

    return searchArtistWithApiPromise;
}

const searchArtist = artistName => {
    return {
        type: actionTypes.SEARCH_ARTIST,
        payload: artistName
    }
}

const clearResults = () => {
    return {
        type: actionTypes.CLEAR_RESULTS
    }
}

const nextResults = () => {
    return {
        type: actionTypes.NEXT_RESULTS
    }
}

const previousResults = () => {
    return {
        type: actionTypes.PREVIOUS_RESULTS
    }
}

module.exports = {
    searchArtist,
    clearResults,
    nextResults,
    previousResults,
    searchArtistWithApi
}