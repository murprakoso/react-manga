import React, { useEffect, useState } from 'react';
import Subheading from '../Subheading';
import Axios from 'axios';
import Card from '../Card';
import Loader from '../Loader';
import Pagination from '../Pagination';

const Home = () => {
    // const page = 1;

    const [mangaList, setMangaList] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const basePathApi = 'http://localhost:8080/api';
    // const URL = `${basePathApi}/manga/page/${page}`;

    useEffect(() => {
        const fetchManga = async () => {
            const responseAPI = await Axios.get(`${basePathApi}/manga/page/${page}`);
            setMangaList(responseAPI.data.manga_list);
            setLoading(true);
        }

        fetchManga();
    }, [page])


    const nextNumberPage = page + 1;
    const prevNumberPage = page - 1;
    // Pagination
    function prevPage() {
        setLoading(false);
        setPage(parseInt(prevNumberPage));
    }
    function nextPage() {
        setLoading(false);
        setPage(parseInt(nextNumberPage));
    }
    // console.log(page);

    return (
        <div className="content__wrapper">
            <Subheading title='' titleActive={`Page / ${page}`} />
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

            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-between">
                    <li className="page-item">
                        {page !== 1 &&
                            <Pagination className="page-link" title="prev" onClick={() => prevPage()} />
                        }
                    </li>
                    <li className="page-item">
                        <Pagination className="page-link" title="next" onClick={() => nextPage()} />
                    </li>
                </ul>
            </nav >
        </div>
    )
}

export default Home;