import React from 'react'
import Span from './atoms/Span';
import ChapterList from './ChapterList';

const Content = (props) => {

    const { title, thumb, type, author, status, genres, synopsis, chapters } = props;

    const imgStyle = {
        width: '100%'
    };


    return (

        <div className="col-12" >
            <div className="row">
                <div className="col-md-4">
                    <img className="img-thumbnail mb-3" src={thumb ? thumb : "http://placehold.it/750x500"} alt="Thumbnail" style={imgStyle} />

                </div>
                <div className="col-md-8">
                    <h3 className="my-3">{title}</h3>

                    <strong>Info </strong>
                    <table className="table table-sm text-secondary mt-2">
                        <tbody>
                            <tr>
                                <td>Tipe</td>
                                <td>{type}</td>
                            </tr>
                            <tr>
                                <td>Author</td>
                                <td>{author}</td>
                            </tr>
                            <tr>
                                <td>Genre</td>
                                <td>{genres ? genres.map(genre => {
                                    return <Span
                                        key={genre.genre_name}
                                        title={genre.genre_name} />
                                }) : null}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>{status}</td>
                            </tr>
                        </tbody>
                    </table>
                    <strong>Sinopsis </strong>
                    <p className="sysnopsis">{synopsis}</p>
                </div>
            </div>


            <div className="row">
                <div className="table-responsive mt-3">
                    <table className="table table-fixed">
                        <thead>
                            <tr>
                                <th scope="col" className="col-12">Chapters</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chapters ? chapters.map(chapter => {
                                return <ChapterList
                                    key={chapter.chapter_endpoint}
                                    slug={chapter.chapter_endpoint}
                                    title={chapter.chapter_title}
                                />
                            }) : null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default Content;
