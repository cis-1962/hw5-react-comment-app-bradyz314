import { useState } from "react";
import Post from "./Post";
import AddPost from "./AddPost";

export default function PostSection() {
    const [posts, setPosts] = useState<React.ReactNode[]>([]);
    return (
        <div className='post-container'>
            <AddPost 
                start=''
                header='New Post'
                addReply={(name, post) => setPosts([...posts, 
                    <Post
                        name={name}
                        post={post}
                        depth={1}
                    />])}
            />
            {posts}
        </div>
    )
}
