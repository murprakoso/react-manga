import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import Subheading from '../Subheading';
import Content from '../Content';
import Loader from '../Loader';
import Axios from 'axios';

export default function DetailManga(props) {

    // console.log(props.match.params.slug);
    const slug = props.match.params.slug;
    const URL = `http://localhost:8080/api/manga/detail/${slug}`;

    const [mangaDetail, setMangaDetail] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Axios.get(URL)
            .then(result => {
                console.log('data API: ', result.data);
                const responseAPI = result.data;
                setMangaDetail(responseAPI);
                setLoading(true);
            })
            .catch(err => {
                console.log('error: ', err);
                <Redirect to="/" />
            })
    }, [URL])


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
                        <Loader />
                    }
                </div>
                <hr />
            </div>
        </>
    );
}
