import React, { useState } from 'react';

const Form = ({setSearchLetterSong}) => {

    const [search, setSearch] = useState({
        artist: '',
        song: ''
    });

    // state error
    const [ error, setError] = useState(false);

    const { artist, song } = search;

    // function to get the  inputs field value
    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    // handle submit
    const handleSubmit = e => {
        e.preventDefault();

        //validation 
        if(artist.trim() === '' || song.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        // pass info to main component

        setSearchLetterSong(search);
    }

    return ( 
        <div className="bg-info">
            { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p> : null}
            <div className="container">
                <div className="row">
                    
                    <form 
                        onSubmit={handleSubmit}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">Buscador Letras Canciones</legend>

                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Nombre Artista"
                                            onChange={handleChange}
                                            value={artist}
                                        />
                                    </div>
                                    
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Nombre Canción"
                                            onChange={handleChange}
                                            value={song}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button 
                                type="submit" 
                                className="btn btn-primary float-right"
                            >Buscar</button>
                        </fieldset>

                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Form;