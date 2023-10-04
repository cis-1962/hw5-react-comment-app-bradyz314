import { useState } from "react";

interface PostProps {
    name: string,
    post: string,
    depth: number
}

export default function Post({name, post, depth}: PostProps) {
    const [replies, setReplies] = useState<PostProps[]>([]);
    return (
        <div className="post">
            <textarea>{name}</textarea>
            <textarea>{post}</textarea>
            {replies.map((postP: PostProps) => 
                <Post name={postP.name} post={postP.post} depth={postP.depth} key={postP.name}/>)
            }
            {(depth === 3) || (
                <button 
                    type='submit'
                    onClick={() => setReplies([...replies, {name: 'hi', post: 'there', depth: depth + 1}])}
                    className='submit-button'
                    disabled = {(depth === 3)}
                >
                    Reply
                </button>
            )
            }
        </div>
    )
}