import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <section className="search__container">
      <form className="form__control">
        <input
          type="search"
          name=""
          id=""
          placeholder="Search for a country..."
        />
        <button>
          <FaSearch />
        </button>
      </form>
    </section>
  );
}

export default Search;
