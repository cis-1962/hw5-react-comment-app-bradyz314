import { useState } from 'react';

export default function Vote() {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    return (
        <span className='votes'>
            <button
                type='submit'
                className='vote-button'
                onClick={() => setLikes(likes + 1)}
            >   
                <img 
                    src='/images/thumbs-up.png'
                    alt='Thumbs Up'
                />
            </button>
            <p className='like-count'>{likes}</p>
            <button
                type='submit'
                className='vote-button'
                onClick={() => setDislikes(dislikes + 1)}
            >   
                <img 
                    src='/images/thumbs-down.png'
                    alt='Thumbs Down'
                />
            </button>
            <p className='dislike-count'> {dislikes}</p>
        </span>
    )
}