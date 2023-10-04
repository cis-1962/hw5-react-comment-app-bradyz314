import { ReactNode, useState } from "react";

interface PostProps {
    name: string,
    post: string,
    depth: number
}

export default function Post({name, post, depth}: PostProps) {
    const [replies, setReplies] = useState<PostProps[]>([]);
    return (
        <div 
            className={`post-container depth-${depth}`} 
        >
            <div className='post'>
                <h3 className='post-name'>{name}</h3>
                <p className="post-details">{post}</p>
            </div>
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