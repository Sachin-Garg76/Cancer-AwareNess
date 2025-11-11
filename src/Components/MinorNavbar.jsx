import React from 'react'
import { Link } from 'react-router-dom'

const MinorNavbar = () => {
    return (
        <>
            <div className="row w-100 secondnav">
                <div className="col-sm-4"></div>
                <div className="minorNav col-sm-8">
                    <Link className="items">About US</Link>
                    <Link className="items">Program & Services</Link>
                    <Link className="items">Get Involved</Link>
                    <Link className="items">Our Research & Journals</Link>
                </div>
            </div>

        </>
    )
}

export default MinorNavbar
