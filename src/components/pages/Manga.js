import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import Subheading from '../Subheading';
import Axios from 'axios';
import Card from '../Card';
import Loader from '../Loader';
import { useParams } from 'react-router-dom';


/**
 * Manga List (Japanese Comic)
 */
function Manga() {

    // const page = useParams() ? useParams() : 1;
    const [page, setPage] = useState(1);
    const [mangaList, setMangaList] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(page);


    useEffect(() => {
        Axios.get(`http://localhost:8080/api/manga/page/${page}/`)
            .then(result => {
                const responseAPI = result.data.manga_list;
                setMangaList(responseAPI);
                setLoading(true);
            })
            .catch(err => {
                console.log('error: ', err);
            })
    }, [page])

    console.log(page);

    return (
        <div className="content__wrapper">
            <Subheading title="Manga" titleActive="Manga" />
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

export default Manga
