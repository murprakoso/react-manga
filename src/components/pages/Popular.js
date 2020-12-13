import React, { useEffect, useState } from 'react'
import Card from '../Card'
import Subheading from '../Subheading'
import Axios from 'axios'
import Loader from '../Loader'

export default function Popular() {

    const URL = 'http://localhost:8080/api/manga/popular/1'
    const [popularMangaList, setPopularMangaList] = useState([]);
    const [loading, setLoading] = useState(false);


    const mangaFunction = async () => {
        // try {
        //     await Axios
        //         .get(URL)
        //         .then(res => {
        //             setPopularMangaList(res.data.manga_list)
        //         })
        //     setLoading(true);
        // } catch (e) {
        //     console.log('error: ', e);
        // }
        // //
        Axios.get(URL)
            .then(result => {
                const responseAPI = result.data.manga_list;
                setPopularMangaList(responseAPI);
                setLoading(true);
            })
            .catch(err => {
                console.log('error: ', err);
            });
    }


    useEffect(() => {
        mangaFunction();
    }, [])


    return (
        <div className="content__wrapper">
            <Subheading title="Manga Populer" titleActive="Populer" />
            <div className="row">
                {loading ? popularMangaList.map(manga => {
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
        </div>
    )
}
