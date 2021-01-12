import React, {useEffect, useState} from 'react';
import LikeButton from './LikeButton';


const Article = (props) => {
    const [isPublished, togglePublished] = useState(true);

    // useEffect(() => {
        // console.log("Mounted")
        // return(
            // console.log("Unmounted!")
        // )
    // })

    return(
        <div>
            <h2>On my way to learn {props.title}</h2>
            <label htmlFor="check">Published</label>
            <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)}/>
            <LikeButton />
        </div>
    )
};

export default Article