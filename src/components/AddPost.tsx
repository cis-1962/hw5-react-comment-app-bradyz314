import { useState } from 'react';

interface AddPostProps {
    start: string,
    header: string
}

export default function AddPost({start, header} : AddPostProps) {
    const [name, setName] = useState('');
    const [content, setContent] = useState(start);
    return (
        <div className='post-component'>
            <h2>{header}</h2>
            <textarea
                value={name}
                placeholder='Name...'
                className='name-input'
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                value={content}
                placeholder='Write a new post...'
                className='content-input'
                onChange={(e) => setContent(e.target.value)}
            />
            <button 
                type='submit'
                onClick={() => setContent('Submitted')}
                className='submit-button'
                disabled = {(!name || !content)}
            >
                Submit
            </button>
        </div>
    )
}