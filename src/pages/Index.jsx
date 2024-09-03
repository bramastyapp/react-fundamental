import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";
import { useState } from "react";

function Home() {
  const [posts, setPosts] = useState(postsData);
  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} />
      {posts.map(({ title, tags, date }, index) => {
        return (
          <>
            <Article {...{ title, tags, date }} key={index} />
          </>
        );
      })}
    </>
  );
}

export default Home;
