import { NavLink, Outlet, useLocation } from 'react-router-dom'

import logo from '../logo.svg';

export default function RootLayout() {
  const location = useLocation()

  const isStoreActive = location.pathname === '/' || location.pathname === '/store'

  return(
    <div className="root-layout">
      <nav className="sidebar">
        <img src={logo} alt="Company Logo" className="navbar-logo" />
        <NavLink to="/store" className={isStoreActive ? 'active-link' : 'link'}>
          Store
        </NavLink>
        <NavLink to="/library" className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
          Library
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
          Profile
        </NavLink>
      </nav>
      <main className="content">
        <Outlet />
      </main>
    </div>
  )
}