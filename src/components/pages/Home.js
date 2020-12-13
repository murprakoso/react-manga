import React, { useEffect, useState } from 'react';
import Pagination from '../Pagination';
import Subheading from '../Subheading';
import Axios from 'axios';
import Card from '../Card';

export default function Home() {

    const [mangaList, setMangaList] = useState([]);

    const URL = 'http://localhost:8080/api/manga/page/1'

    useEffect(() => {
        Axios.get(URL)
            .then(result => {
                // console.log('data API: ', result.data.manga_list);

                const responseAPI = result.data.manga_list;
                setMangaList(responseAPI);
            })
            .catch(err => {
                console.log('error: ', err);
            })
    }, [])

    return (
        <>
            <div className="content__wrapper">
                <Subheading title="Title" />
                <div className="row py-4">
                    {mangaList.map(manga => {
                        return <Card
                            key={manga.endpoint}
                            endpoint={manga.endpoint}
                            title={manga.title}
                            thumb={manga.thumb}
                            type={manga.type}
                            update_on={manga.updated_on}
                            chapter={manga.chapter}
                        />
                    })}
                </div>
                <Pagination />
            </div>
        </>
    )
}
