import React, {useState} from 'react';
import LikeButton from './LikeButton';


const Article = (props) => {
    const [isPublished, togglePublished] = useState(true);

    return(
        <div>
            <h2>On my way to learn {props.title}</h2>
            <label htmlFor="check">公開状態</label>
            <input type="checkbox" checked={isPublished} id="check" onClick={() => togglePublished(!isPublished)}/>
            <LikeButton count={props.count}/>
        </div>
    )
};

export default Article