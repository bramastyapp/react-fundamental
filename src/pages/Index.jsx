import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
import { useEffect, useState } from "react";

function Home() {
  const [posts, setPosts] = useState(postsData);
  const [totalPosts, setTotalPosts] = useState(0);
  const [externalPosts, setExternalPosts] = useState([]);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setExternalPosts(json));
  }, []);

  useEffect(() => {
    console.log("ada useEffect dari posts");
  }, [posts]);

  useEffect(() => {
    console.log("render");
  });

  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((props, index) => {
        return (
          <>
            <Article {...props} key={index} />
          </>
        );
      })}
      <hr />
      <h3>External Posts</h3>
      {externalPosts.map((item, index) => {
        return (
          <>
            <div key={index}>- {item.title}</div>
          </>
        );
      })}
    </>
  );
}

export default Home;
