import React, {useState, useEffect} from 'react'
import FeaturedPostItem from '../posts/FeaturedPostItem'

function FeaturedSection() {
    const [articles, setArticles] = useState([])

    const API = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3b6bcef0fd194f4b92281ef756625a12"
    useEffect(() => {
        fetch(API).then((res) => {
            return res.json()
        }).then(data => {
            setArticles(data.articles);
        })
    }, [API])

    return (
        <section className="featured-posts">
            <div className="container">
                <div className="section-title">
                    <h2><span>All Stories</span></h2>
                </div>
                <div className="card-columns listfeaturedtag">
                    {articles && articles.map((item, index) => {
                        return <FeaturedPostItem article={ item } index={index}/>
                    })}
                </div>
            </div>
        </section>
    )
}

export default FeaturedSection
