import React, { Fragment } from 'react';

const Song = ({letterSong}) => {

    if(letterSong.length === 0) return null;

    return ( 
        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">{letterSong}</p>
        </Fragment>
    );
}
 
export default Song;