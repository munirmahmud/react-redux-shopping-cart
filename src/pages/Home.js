import React from 'react'
import HeaderBanner from '../components/Header/HeaderBanner'
import Products from '../components/Products/Products'

const Home = () => {
    return (
        <>
            <HeaderBanner />
            <div className="container">
                <Products />
            </div>
        </>
    )
}

export default Home
