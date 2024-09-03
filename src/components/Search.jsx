import { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const onSearchChange = (event) => {
    setSearch(event.target.value);
    props.onSearchChange(event.target.value);
  };

  return (
    <>
      <div>
        Cari Artikel : <input type="text" onChange={onSearchChange} />
      </div>
      <small>Ditemukan 0 data dari pencarian {search}</small>
    </>
  );
}

export default Search;
