import React, { useEffect, useState } from 'react';
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Avatar,
  Tooltip,
} from '@material-tailwind/react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function NavBar() {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();

  const handleToggle = e => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogOut = () => {
    logOut();
    navigate('/');
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? 'flex items-center px-3 py-2 bg-orange-700 text-white rounded-md duration-300 font-semibold font-lato'
      : 'flex items-center font-display text-black px-3 py-2 font-lato';

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 md:gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {[
        { name: 'Home', path: '/' },
        { name: 'All visas', path: '/all-visas' },
        { name: 'Add Visa', path: '/add-visa' },
        { name: 'My Added Visas', path: '/my-added-visas' },
        { name: 'My Visa Applications', path: '/my-visa-applications' },
      ].map(({ name, path }) => (
        <Typography
          key={name}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <NavLink to={path} className={navLinkClass}>
            {name}
          </NavLink>
        </Typography>
      ))}

      {/* Theme Toggle */}
      <Typography>
        <label className="swap swap-rotate cursor-pointer">
          {/* Hidden checkbox controls theme state */}
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme !== 'light'}
            className="theme-controller"
          />

          {/* Sun icon (shown in dark mode, to switch to light) */}
          <svg
            className="swap-on h-10 w-10 fill-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* Moon icon (shown in light mode, to switch to dark) */}
          <svg
            className="swap-off h-10 w-10 fill-black"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </Typography>
    </ul>
  );

  return (
    <div className="sticky top-0 z-50 bg-blue-900">
      <Navbar className="max-w-full px-4 py-2 lg:px-8 lg:py-4 rounded-none shadow-md">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <Typography className="mr-4 cursor-pointer py-1.5 font-semibold lg:font-bold text-xl md:text-2xl text-black font-lato">
              Visa<span className="text-yellow-900">L</span>and
            </Typography>
          </Link>

          <div className="flex items-center justify-between gap-6">
            <div className="hidden lg:block">{navList}</div>

            {!user ? (
              <div className="hidden lg:flex items-center gap-x-2">
                <Link to="/login">
                  <Button variant="filled" size="md" className="font-lato">
                    Sign In
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="filled" size="md" className="font-lato">
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="hidden lg:flex items-center gap-3">
                <Tooltip content={user.displayName || 'User'}>
                  <Link to="/profile">
                    <div className="flex items-center gap-2 cursor-pointer">
                      <Avatar
                        size="sm"
                        variant="circular"
                        alt="User Avatar"
                        src={
                          user.photoURL ||
                          'https://i.ibb.co/2y6n1Yf/default-avatar.jpg'
                        }
                        className="border-2 border-white hover:z-10"
                      />
                      <Typography className="text-white font-lato font-semibold hover:underline">
                        {user.displayName || 'Profile'}
                      </Typography>
                    </div>
                  </Link>
                </Tooltip>
                <Button
                  onClick={handleLogOut}
                  variant="filled"
                  size="md"
                  className="font-lato"
                >
                  LogOut
                </Button>
              </div>
            )}

            {/* Mobile Toggle Button */}
            <IconButton
              variant="text"
              className="lg:hidden text-white"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>

        {/* Mobile Nav Content */}
        <Collapse open={openNav}>
          {navList}
          {!user ? (
            <div className="flex flex-col gap-2 mb-4 px-4">
              <Link to="/login">
                <Button variant="filled" fullWidth>
                  Sign In
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="filled" fullWidth>
                  Sign Up
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-2 mb-4 px-4">
              <Link to="/profile" onClick={() => setOpenNav(false)}>
                <Button variant="text" fullWidth>
                  Profile
                </Button>
              </Link>
              <Button
                onClick={() => {
                  handleLogOut();
                  setOpenNav(false);
                }}
                variant="text"
                fullWidth
              >
                LogOut
              </Button>
            </div>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
