import { ArrowLeftOutlined } from '@ant-design/icons'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="text-center fs-4">
            <img alt="not found" src="../resource/not-found.png" width="60%" />
            <p>Ooops Page Not Found</p>
            <Link to="/" className="btn btn-link fs-5"><ArrowLeftOutlined/> Back Home</Link>
        </div>
    )
}

export default NotFound
