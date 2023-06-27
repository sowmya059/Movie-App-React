import React from "react";
const SearchBox = (props) => {
  return (
    <div className="search">
      <input
        className="form-control"
        value={props.value}
        onChange={(event) => props.setSearch(event.target.value)}
        placeholder="Search Movie"
      ></input>
    </div>
  );
};

export default SearchBox;
