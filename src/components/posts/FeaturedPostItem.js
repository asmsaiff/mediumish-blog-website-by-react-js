import React from 'react'
import BookmarkIcon from '../icons/BookmarkIcon'
import {NavLink} from 'react-router-dom'

function FeaturedPostItem(props) {
    const { urlToImage, title, description, publishedAt, author, source } = props.article
    console.log(props.article)

    return (
        <div className="card">
            <div className="row">
                <div className="col-md-5 wrapthumbnail">
                    <NavLink to={`/post/${title.split(' ').join('-').toLowerCase()}`}>
                        <div className="thumbnail" style={{backgroundImage: `url(${urlToImage})`}}>
                        </div>
                    </NavLink>
                </div>
                <div className="col-md-7">
                    <div className="card-block">
                        <h2 className="card-title">
                            <NavLink to={`/post/${title.split(' ').join('-').toLowerCase()}`}>
                                {title.slice(0, 50).concat('...')}
                            </NavLink>
                        </h2>
                        <h4 className="card-text">
                            {description.slice(0, 100)}
                        </h4>
                        <div className="metafooter">
                            <div className="wrapfooter">
                                <span className="meta-footer-thumb">
                                <a href="author.html"><img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"/></a>
                                </span>
                                <span className="author-meta">
                                <span className="post-name"><a href="author.html">{author}</a></span><br/>
                                <span className="post-date">{publishedAt}</span><span className="dot"></span><span className="post-read">{source.name}</span>
                                </span>
                                <span className="post-read-more">
                                    <a href="post.html" title="Read Story">
                                        <BookmarkIcon />
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPostItem
