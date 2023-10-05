import { useState } from "react";
import AddPost from "./AddPost";
import Vote from "./Vote";

interface PostProps {
    name: string,
    post: string,
    depth: number
}

export default function Post({name, post, depth}: PostProps) {
    const [replies, setReplies] = useState<PostProps[]>([]);
    const [replying, setReplying] = useState(false);
    const AddReply = (replyName: string, replyPost: string) => {
        setReplies([...replies, {
            name: replyName, 
            post: replyPost, 
            depth: depth + 1}]);
        setReplying(!replying);
    }
    return (
        <div className={`post depth-${depth}`}>
            <h3 className='post-name'>{name}</h3>
            <p className="post-details">{post}</p>
            <div className='reply-and-like'>
                <button 
                    type='submit'
                    onClick={() => setReplying(!replying)}
                    className='reply-button'
                    disabled = {(depth === 3)}
                >
                    Reply
                </button>
                <Vote />
            </div>
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