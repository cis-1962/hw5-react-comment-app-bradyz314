import React, { useState } from 'react';

export default function MakePost() {
    const [name, setName] = useState('');
    const [content, setContent] = useState('');
    return (
        <div className='post-component'>
            <h2>New Post</h2>
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