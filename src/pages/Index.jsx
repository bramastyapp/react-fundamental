import posts from "../posts.json";
import Article from "../components/Article";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const changeSearch = (event) => {
    setSearch(event.target.value);
  };
  return (
    <>
      <h1>Simple Blog</h1>
      <div>
        Cari Artikel : <input type="text" onChange={changeSearch} />
      </div>
      <small>Ditemukan 0 data dari pencarian {search}</small>
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
