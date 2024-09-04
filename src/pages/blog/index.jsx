import { Link, useLoaderData } from "react-router-dom";

function Blog() {
  const posts = useLoaderData();

  return (
    <>
      <h3>External Posts</h3>
      {posts.map((item, index) => {
        return (
          <>
            <div key={index}>
              <Link to={`/blog/${item.id}`}>- {item.title}</Link>
            </div>
          </>
        );
      })}
    </>
  );
}

export default Blog;
