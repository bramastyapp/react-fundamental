import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

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
