import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import PageHeader from '../partials/PageHeader'
import FeaturedSection from '../sections/FeaturedSection'

function FrontPage() {
    return (
        <div>
            <Header />
            <PageHeader />
            <FeaturedSection />
            <Footer />
        </div>
    )
}

export default FrontPage
