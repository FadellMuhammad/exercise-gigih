import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addDataApi } from "./actions";

const FormComp = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const getApi = (e:any) => {
    e.preventDefault();
    fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=a7o7uMaZyfICKK7sBoww5UXHPbXMTS2p&q=${search}&limit=12`
    )
      .then((response) => response.json())
      .then((data) => dispatch(addDataApi(data)));
  };

  return (
    <>
      <form onSubmit={getApi}>
        <input
          name="search"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          className="input"
        />
        <input className="btn" type="submit" value="Submit"></input>
      </form>
    </>
  );
};

export default FormComp;
