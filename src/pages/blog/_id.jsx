import { useLoaderData } from "react-router-dom";

function Post() {
  const post = useLoaderData();

  return (
    <>
      <h2>{post?.title}</h2>
      <p>{post?.body}</p>
    </>
  );
}

export default Post;
