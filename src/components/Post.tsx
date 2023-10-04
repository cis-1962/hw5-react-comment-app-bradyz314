import { useState } from "react";
import AddPost from "./AddPost";

interface PostProps {
    name: string,
    post: string,
    depth: number
}

export default function Post({name, post, depth}: PostProps) {
    const [replies, setReplies] = useState<PostProps[]>([]);
    const [replying, setReplying] = useState(false);
    const AddReply = (name: string, post: string) => {
        setReplies([...replies, {
            name: name, 
            post: post, 
            depth: depth + 1}]);
        setReplying(!replying);
    }
    return (
        <div className={`post${depth === 1 ? ' depth-1' : ''}`}>
            <h3 className='post-name'>{name}</h3>
            <p className="post-details">{post}</p>
            {(depth === 3) || (
                <button 
                    type='submit'
                    onClick={() => setReplying(!replying)}
                    className='reply-button'
                    disabled = {(depth === 3)}
                >
                    Reply
                </button>
            )
            }
            {replying && (
                <AddPost 
                    start={`@${name}`}
                    header=''
                    addReply={AddReply}
                />
            )}
            {replies.map((postP: PostProps) => 
                <Post name={postP.name} post={postP.post} depth={postP.depth} key={postP.name}/>)
            }
        </div>
    )
}