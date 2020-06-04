import './albumView.css';
import React, { Component } from 'react';
import constants from '../../constants/constants.js';

class AlbumView extends Component {

    render () {
        const { match: { params } } = this.props;
        return (
            <article className="album-view">
                <div className="album-view__body">
                    <div className="album-view__title"> {constants.ALBUM_VIEW_TITLE} </div>
                    <div className="album-view__description"> {params.id} </div>
                </div>
            </article>
        );
    }
}

export default AlbumView