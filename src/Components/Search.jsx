import React from "react";

function Search(props) {
 
  return (
    <div>
      <input type="search" placeholder="Search for a country..."
      onChange= {props.onChange} />
    </div>
  );
}

export default Search;
