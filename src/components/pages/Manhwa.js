import React, { useEffect, useState } from 'react'
import Card from '../Card';
import Loader from '../Loader';
import Pagination from '../Pagination';
import Subheading from '../Subheading';
import Axios from 'axios';


/**
 * Manhwa List (Korean Comic)
 */
function Manhwa() {
    const URL = 'http://localhost:8080/api/manhwa/1'
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
            <Subheading title="Manhwa (Korean Comic)" titleActive="Manhwa" />
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

export default Manhwa
