import React from 'react'
import { Outlet } from 'react-router-dom'

function Main() {
  return (
    <div>
      Main
      <Outlet></Outlet>
    </div>
    
  )
}

export default Main