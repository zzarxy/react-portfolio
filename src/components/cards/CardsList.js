import Card from './Card';
import React, { useState } from 'react';


const CardsList = ({ posts, ...props }) => {
    return (
        <div className={` mt-[48px] ${props.className} `}>
            {posts.map((post) =>
                <Card post={post} key={post.id} className={props.card}/>
            )}
        </div>
    );
};

export default CardsList;