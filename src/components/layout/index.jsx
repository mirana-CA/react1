import React from 'react'
import "./index.scss"
import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
  <>
    <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/basket">Basket</NavLink>
          </li>
          <li>
            <NavLink to="/wishlist">Wishlist</NavLink>
          </li>
          <li>
            <NavLink to="/admin">Admin Panel</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
  </>
  )
}

export default Layout
