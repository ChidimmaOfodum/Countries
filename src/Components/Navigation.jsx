import React from 'react'
import Search from './Search'
import Filter from './Filter'

function Navigation() {
  return (
    <div>
      <div>
        <p>Where in the world</p>
        <p>Dark mode</p>
      </div>
      <Search />
      <Filter />
    </div>
  )
}

export default Navigation
