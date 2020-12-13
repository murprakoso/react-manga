import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import Subheading from '../Subheading';
import Loader from '../Loader';
import Pagination from '../Pagination';
import Card from '../Card';

export default function Recommended() {

    const URL = 'http://localhost:8080/api/recommended/'
    const [mangaList, setMangaList] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        Axios.get(URL)
            .then(result => {
                // console.log('data API: ', result.data.manga_list);
                const responseAPI = result.data.manga_list;
                setMangaList(responseAPI);
                setLoading(true);
            })
            .catch(err => {
                console.log('error: ', err);
            })
    }, [])

    return (
        <>
            <div className="content__wrapper">
                <Subheading title="Recommended" />
                <div className="row py-4">
                    {loading ? mangaList.map(manga => {
                        return <Card
                            key={manga.endpoint}
                            endpoint={manga.endpoint}
                            title={manga.title}
                            thumb={manga.thumb}
                            type={manga.type}
                            update_on={manga.updated_on}
                            chapter={manga.chapter}
                        />
                    }) :
                        <Loader />
                    }
                </div>
                <Pagination />
            </div>
        </>
    )
}
