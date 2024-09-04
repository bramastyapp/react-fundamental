import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Post() {
  const param = useParams();
  const [post, setPost] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${param.id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, []);

  return (
    <>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </>
  );
}

export default Post;
