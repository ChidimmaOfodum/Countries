import React, { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";

function Navigation(props) {
  const [regionFilteredData, setRegionFilteredData] = useState([])
  

   function handleFilter(event) {
     let index = event.target.selectedIndex;
     if(index) {
      let value = event.target[index].value;
      let filtered = props.main.filter((item) => {
        return item.region === value;
      });
      props.setData(filtered);
      setRegionFilteredData(filtered);
     }
     else props.setData(props.main)
   }

  function handleSearch(event) {
    let filtered = ((regionFilteredData) || (props.main)).filter((item) => {
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
      <Filter onChange = {handleFilter} />
    </div>
  );
}

export default Navigation;
