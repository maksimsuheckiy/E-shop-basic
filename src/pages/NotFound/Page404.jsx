import React from "react";
import './Page404.scss'
import {Link} from "react-router-dom";

const Page404 = () => {
    return (
        <section className='error-wrapper'>
            <div className='error'>
                <h1 className='error__title'>Error - 404</h1>
                <p className='error__desc'>Page not found</p>
                <Link to='/' className='error__back-link'>Return to the homepage &#8617;</Link>
            </div>
        </section>
    )
}

export default Page404