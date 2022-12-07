import React from "react";
import Search from "./Search";
import Filter from "./Filter";

function Navigation(props) {
  function handleSearch(event) {
    console.log(event.target.value);
    let filtered = props.main.filter((item) => {
      return item.name.common.includes(event.target.value)
    });
    props.setData(filtered)
  }

  return (
    <div>
      <div>
        <p>Where in the world</p>
        <p>Dark mode</p>
      </div>
      <Search onChange={handleSearch} />
      <Filter />
    </div>
  );
}

export default Navigation;
