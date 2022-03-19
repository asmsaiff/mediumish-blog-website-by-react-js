import React from 'react'
import PostImg from '../../assets/img/demopic/1.jpg'
import BookmarkIcon from '../icons/BookmarkIcon'

function FeaturedPostItem() {
    return (
        <div className="card">
            <div className="row">
                <div className="col-md-5 wrapthumbnail">
                    <a href="post.html">
                        <div className="thumbnail" style={{backgroundImage: `url(${PostImg})`}}>
                        </div>
                    </a>
                </div>
                <div className="col-md-7">
                    <div className="card-block">
                        <h2 className="card-title"><a href="post.html">The beauty of this world is in your heart</a></h2>
                        <h4 className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</h4>
                        <div className="metafooter">
                            <div className="wrapfooter">
                                <span className="meta-footer-thumb">
                                <a href="author.html"><img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt="Sal"/></a>
                                </span>
                                <span className="author-meta">
                                <span className="post-name"><a href="author.html">Jane</a></span><br/>
                                <span className="post-date">22 July 2017</span><span className="dot"></span><span className="post-read">6 min read</span>
                                </span>
                                <span className="post-read-more"><a href="post.html" title="Read Story">
                                    <BookmarkIcon />
                                </a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPostItem
