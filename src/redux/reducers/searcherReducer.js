import actionTypes from "../../constants/actionTypes"
import * as artists from "../../database/artists.json"
import constants from "../../constants/constants.js"

const initialState = {
    results: [],
    searchTerm: '',
    min: constants.minResults,
    max: constants.maxResults,
    page: 1,
    results2: []
};

function searcherReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SEARCH_ARTIST:
            const regex = new RegExp([action.payload], 'i');
            return Object.assign({}, state, {          
                results: artists.artists.filter(artist => regex.test(artist.name)),
                searchTerm: action.payload
            });
        case actionTypes.CLEAR_RESULTS:
            return initialState;
        case actionTypes.NEXT_RESULTS:
            return Object.assign({}, state, {
                min: state.max,
                max: state.max + constants.incremential,
                page: state.page + 1
            });
        case actionTypes.PREVIOUS_RESULTS:
            return Object.assign({}, state, {
                min: state.min - constants.incremential,
                max: state.min,
                page: state.page - 1
            });
        case actionTypes.SEARCH_ARTIST2_SUCCESS:
            return Object.assign({}, state, {
                results2: action.payload
            })
        default:
            return state
        }
}

export default searcherReducer