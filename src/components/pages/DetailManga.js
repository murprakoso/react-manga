import React, { useEffect, useState } from 'react'
// import { Redirect } from 'react-router-dom';
import Subheading from '../Subheading';
import Content from '../Content';
import Loader from '../Loader';
import Axios from 'axios';
import { Failed } from '../Failed';

export default function DetailManga(props) {

    const slug = props.match.params.slug;
    // const URL = `http://localhost:8080/api/manga/detail/${slug}`;

    const [mangaDetail, setMangaDetail] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            Axios.get(`http://localhost:8080/api/manga/detail/${slug}`)
                .then(result => {
                    console.log('data API: ', result.data);
                    const responseAPI = result.data;
                    setMangaDetail(responseAPI);
                    setLoading(true);
                })
        }, 2000);
        return () => clearTimeout(timeout);
    }, [slug])


    return (
        <>
            <div className="content__wrapper">
                <Subheading titleActive="Detail" />
                <div className="row mb-5">

                    {loading ? mangaDetail &&
                        <Content
                            title={mangaDetail.title}
                            thumb={mangaDetail.thumb}
                            type={mangaDetail.type}
                            author={mangaDetail.author}
                            status={mangaDetail.status}
                            synopsis={mangaDetail.synopsis}
                            genres={mangaDetail.genre_list}
                            chapters={mangaDetail.chapter}
                        />
                        :
                        mangaDetail.title === null ? <Failed />
                            :
                            <Loader />
                    }
                </div>
                <hr />
            </div>
        </>
    );
}
