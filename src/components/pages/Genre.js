import React, { useEffect, useState } from 'react';
import ButtonGenre from '../ButtonGenre';
import Subheading from '../Subheading';
import Axios from 'axios';
import Loader from '../Loader';


export default function Genre() {

    const URL = 'http://localhost:8080/api/genres/';

    const [genreList, setGenreList] = useState([]);
    const [loading, setLoading] = useState(false);

    const genreFunction = async () => {
        Axios.get(URL)
            .then(result => {
                const responseAPI = result.data.list_genre;
                setGenreList(responseAPI);
                setLoading(true);
            })
            .catch(err => {
                console.log('error: ', err);
            })
    }


    useEffect(() => {
        genreFunction();
    }, [])

    return (
        <>
            <div className="content__wrapper">
                <Subheading title="Genre" titleActive="Genres" />
                <div className="row py-4">
                    {loading ? genreList.map(genre => {
                        return <ButtonGenre
                            key={genre.genre_name}
                            genre_name={genre.genre_name}
                        />
                    }) : <Loader />}
                </div>
            </div>
        </>
    )
}
