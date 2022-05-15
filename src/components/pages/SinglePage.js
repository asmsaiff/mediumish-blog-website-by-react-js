import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import TwitterIcon from "../icons/TwitterIcon";
import FacebookIcon from "../icons/FacebookIcon";
import CommentIcon from "../icons/CommentIcon";

function SinglePage() {
    const [post, setPost] = useState([])
    const post_id = useParams()

    console.log(post)

    // const API = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3b6bcef0fd194f4b92281ef756625a12"
    const API = "http://api.mediastack.com/v1/news?access_key=986a7aabb5fb55ee4589a120ddeb7f1c&sources=cnn,bbc"
    useEffect(() => {
        fetch(API).then((res) => {
            return res.json()
        }).then(data => {
            setPost(data.data[post_id.postId - 1])
        })
    }, [API])


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2 col-xs-12">
                    <div className="share">
                        <p>
                            Share
                        </p>
                        <ul>
                            <li>
                                <a target="_blank" href="https://twitter.com/home?status=http%3A//www.wowthemes.net">
                                    <TwitterIcon />
                                </a>
                            </li>
                            <li>
                                <a target="_blank"
                                   href="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.wowthemes.net">
                                    <FacebookIcon />
                                </a>
                            </li>
                        </ul>
                        <div className="sep"></div>
                        <p>Talk</p>
                        <ul>
                            <li>
                                <a href="#comments">
                                    42<br/>
                                    <CommentIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-md-8 col-md-offset-2 col-xs-12">
                    <div className="mainheading">
                        <div className="row post-top-meta">
                            <div className="col-md-1">
                                <img className="author-thumb" src="https://www.gravatar.com/avatar/e56154546cf4be74e393c62d1ae9f9d4?s=250&amp;d=mm&amp;r=x" alt={post.title}/>
                            </div>
                            <div className="col-md-11">
                                {post.author}
                                <br />
                                <span className="post-date">{post.published_at}</span>
                            </div>
                        </div>

                        <h1 className="posttitle">
                            {post.title}
                        </h1>

                    </div>

                    <img className="featured-image img-fluid w-100" src={post.image} alt="" />
                    <div className="article-post">
                        <p>
                            {post.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePage
