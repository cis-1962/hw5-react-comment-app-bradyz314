import { ReactNode, useState } from 'react';

interface AddPostProps {
    start: string,
    header: string,
    addReply: (name: string, post: string) => void,
}

export default function AddPost({start, header, addReply} : AddPostProps) {
    const [name, setName] = useState('');
    const [content, setContent] = useState(start);
    return (
        <div className='add-post'>
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
                onClick={() => {
                    addReply(name, content);
                    setName('');
                    setContent('');
                }}
                className='submit-button'
                disabled = {(!name || !content)}
            >
                Submit
            </button>
        </div>
    )
}