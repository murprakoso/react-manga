import React, { useEffect, useState } from 'react'
import ImageChapter from '../atoms/ImageChapter'
import Subheading from '../Subheading'
import Axios from 'axios'
import Loader from '../Loader';

function Chapter(props) {

    // console.log(props.match.params.slug);
    const slug = props.match.params.slug;

    const [chapters, setChapters] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        Axios.get(`http://localhost:8080/api/chapter/${slug}`)
            .then(result => {
                // console.log('data API: ', result.data.manga_list);
                const responseAPI = result.data.chapter_image;
                setChapters(responseAPI);
                setLoading(true);
            })
            .catch(err => {
                console.log('error: ', err);
            })
    }, [slug])

    return (
        <div className="content__wrapper">
            <Subheading title="" />
            <div className="row py-4">
                <div className="col-md-12 text-center">
                    {loading ? chapters.map(chapter => {
                        return <ImageChapter
                            key={chapter.image_number}
                            image_number={chapter.image_number}
                            chapter_image_link={chapter.chapter_image_link}
                        />
                    })
                        : <Loader />
                    }
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Chapter
