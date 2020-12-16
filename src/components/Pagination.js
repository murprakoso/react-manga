import React from 'react'
// import { Button } from 'react-bootstrap';

const Pagination = ({ title, ...res }) => {

    const prev = '« Sebelumnya';
    const next = 'Selanjutnya »';

    return (
        <button {...res}>{title === 'next' ? next : title === 'prev' ? prev : null}</button>
    )
}

export default Pagination;

