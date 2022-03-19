import React from 'react'
import FeaturedPostItem from '../posts/FeaturedPostItem'

function FeaturedSection() {
    return (
        <section className="featured-posts">
            <div className="container">
                <div className="section-title">
                    <h2><span>Featured</span></h2>
                </div>
                <div className="card-columns listfeaturedtag">
                    <FeaturedPostItem />
                </div>
            </div>
        </section>
    )
}

export default FeaturedSection
