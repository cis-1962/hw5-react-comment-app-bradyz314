import { useState } from "react";

export default function PostSection() {
    const [posts, setPosts] = useState([]);
    return (
        <div>
            {posts}
        </div>
    )
}
