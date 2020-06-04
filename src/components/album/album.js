import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './album.css';


class Album extends Component {

    constructor(props) {
        super(props);
        this.handleShowAlbumInfo = this.handleShowAlbumInfo.bind(this);
    }

    handleShowAlbumInfo = (artistId) => {
        window.location.href = `/album/${artistId}`;
    }

    render() {
        const {artist} = this.props;
        return (
            <div
                key={artist.id} 
                className="album"
                onClick={ () => this.handleShowAlbumInfo(artist.id) }
            >
                <div className="album__img">
                    <img src={artist.img} width="200" height="180" alt={artist.img}/>
                </div>
                <div className="album__content">
                    <div className="album__name-artist">
                        {artist.name}
                    </div>
                    <div className="album__name">
                        {artist.album}
                    </div>
                </div>
            </div>
        )
    }
}

Album.propTypes = {
    artist: Proptypes.object.isRequired,
}

export default Album;
