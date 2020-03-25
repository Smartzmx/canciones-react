import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Song from './components/Song';
import ArtistInfo from './components/ArtistInfo';
import axios from 'axios';

function App() {

  // states
  const [ searchLetterSong, setSearchLetterSong ] = useState({});
  const [ letterSong, setLetterSong] = useState('');
  const [artistInfo, setArtistInfo] = useState({});

  useEffect(() => {
    //if condition to prevent call to the API's if the object of the state is empty
    if(Object.keys(searchLetterSong).length === 0 ) return; 

    const consultApiLetter = async () => {
      const { artist, song } = searchLetterSong;
      const url = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const url2 = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      //como son dos consultas de APIs necesitamos colocar promise.all declarandolo como un arreglo para que inicien al mismo tiempo
      const [infoSong, infoArtist] = await Promise.all([
        axios(url),
        axios(url2)
      ]);

      setLetterSong(infoSong.data.lyrics);
      setArtistInfo(infoArtist.data.artists[0]);

      // guardarLetra(resultado.data.lyrics);
    }
    consultApiLetter();
  }, [searchLetterSong, artistInfo]);

  return (
      <Fragment>
          <Form 
            setSearchLetterSong={setSearchLetterSong}
          />

          <div className="container mt-5">
            <div className="row">
              <div className="col-md-6">
                <ArtistInfo 
                  artistInfo={artistInfo}
                />
              </div>
              <div className="col-md-6">
                  <Song 
                    letterSong={letterSong}
                  />
              </div>
            </div>
          </div>
      </Fragment>
  );
}

export default App;
