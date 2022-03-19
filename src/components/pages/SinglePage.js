import React from 'react'
import {useParams} from "react-router-dom";

function SinglePage(props) {
    console.log(props)

    const post_id = useParams()

    return (
        <div className="container">
            <h2>
                Single Post Page of the {post_id.postId}
            </h2>
        </div>
    )
}

export default SinglePage
