import React from 'react'

const ImageChapter = (props) => {

    const { image_number, chapter_image_link } = props;

    return (
        <img src={chapter_image_link} className="img img-fluid border" alt={image_number} />
    )
}

export default ImageChapter
