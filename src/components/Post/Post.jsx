import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Singlepost from '../Singlepost/Singlepost';


const Post = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h3>This is Post Page: {posts.length}</h3>
            <div>
            {
                posts.map(post => <Singlepost
                key={post.id}
                post={post}></Singlepost>)
            }
            </div>
            
        </div>
    );
};

export default Post;