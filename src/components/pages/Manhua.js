import React, { useEffect, useState } from 'react'
import Card from '../Card';
import Loader from '../Loader';
import Pagination from '../Pagination';
import Subheading from '../Subheading';
import Axios from 'axios';


/**
 * Manhua List (Chinese Comic)
 */
export default function Manhua() {

    const URL = 'http://localhost:8080/api/manhua/1'
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
        <div className="content__wrapper">
            <Subheading title="Manhua (Chinese comic)" titleActive="Manhua" />
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
    )
}
