import React from "react";
import "./Search.scss";

const Search = () => {
  return (
    <form className='search-form'>
      <input type="text" className='search-input' placeholder='Enter the name' />
    </form>
  );
};

export default Search;
