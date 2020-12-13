import React from 'react'
import { Spinner } from 'react-bootstrap'


export default function Loader() {
    return (
        <Spinner animation="border" role="status" className="mx-auto mt-4 mb-5" >
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}
