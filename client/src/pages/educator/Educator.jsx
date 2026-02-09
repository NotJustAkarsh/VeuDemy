import React from 'react'
import { Outlet } from 'react-router-dom'

const Educator = () => {
  return (
    <div>
      <h1>Educator Page</h1>
      <div>
        {<Outlet/>}       {/*See the routes in app.jsx , when two route matches outlet renders both on the same page*/}
      </div>
    </div>
  )
}

export default Educator
