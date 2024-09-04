import { useState, useEffect } from "react";

function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <>
      <h3>External Posts</h3>
      {posts.map((item, index) => {
        return (
          <>
            <div key={index}>- {item.title}</div>
          </>
        );
      })}
    </>
  );
}

export default Blog;
