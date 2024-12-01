import React from "react";
import { RiSearch2Line } from "react-icons/ri";

function Search() {
  return (
    <div className="flex items-center h-12 min-h-12 rounded-full  shadow-sm  px-4 gap-2 border">
      <RiSearch2Line size={20} />
      <input
        type="text"
        className="flex-1 h-full flex outline-none border-none bg-transparent"
        placeholder="Search a file"
      />
    </div>
  );
}

export default Search;
