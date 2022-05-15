import React, {createContext} from 'react'
import BookmarkIcon from '../icons/BookmarkIcon'
import {NavLink} from 'react-router-dom'

function FeaturedPostItem(props) {
    const { image, title, description, published_at, author, source } = props.article

    return (
        <div className="card">
            <div className="row">
                <div className="col-md-5 wrapthumbnail">
                    <NavLink to={`/post/${props.index + 1}`}>
                        <div className="thumbnail" style={{backgroundImage: `url(${image ? image : 'https://a.omappapi.com/users/0f689f765126/images/d4f355b554111644298712-Announcement.jpg'})`}}>
                        </div>
                    </NavLink>
                </div>
                <div className="col-md-7">
                    <div className="card-block">
                        <h2 className="card-title">
                            <NavLink to={`/post/${props.index + 1}`}>
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
                                <span className="post-date">{published_at}</span><span className="dot"></span><span className="post-read">{source.name}</span>
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
