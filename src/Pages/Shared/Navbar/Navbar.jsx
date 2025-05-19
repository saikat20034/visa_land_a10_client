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
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

function NavBar() {
  const { user, logOut } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Toggle theme
  const handleToggle = e => {
    setTheme(e.target.checked ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme]);

  // Close drawer on route change (for mobile)
  useEffect(() => {
    setOpenNav(false);
  }, [location]);

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

  const routes = [
    { name: 'Home', path: '/' },
    { name: 'All visas', path: '/all-visas' },
    { name: 'Add Visa', path: '/add-visa' },
    { name: 'My Added Visas', path: '/my-added-visas' },
    { name: 'My Visa Applications', path: '/my-visa-applications' },
  ];

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 md:gap-3 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {routes.map(({ name, path }) => (
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
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme !== 'light'}
            className="theme-controller"
          />
          {/* Moon Icon – shows when dark mode is active */}
          <svg
            className="swap-on h-8 w-8 fill-indigo-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 1 0 21 12.79Z" />
          </svg>

          {/* Sun Icon – shows when light mode is active */}
          <svg
            className="swap-off h-8 w-8 fill-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m16.95 6.95l-1.414-1.414M6.464 6.464L5.05 5.05m12.02-1.414l1.414 1.414M6.464 17.536l-1.414 1.414M12 6a6 6 0 1 1 0 12a6 6 0 0 1 0-12Z" />
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
                      <Typography className="text-black font-lato font-semibold hover:underline">
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

            {/* Mobile Menu Button */}
            <IconButton
              variant="text"
              className="lg:hidden  text-white"
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
          <div className="sticky  bg-white top-14 z-40">{navList}</div>
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
              <Link to="/profile">
                <Button variant="text" fullWidth>
                  Profile
                </Button>
              </Link>
              <Button onClick={handleLogOut} variant="text" fullWidth>
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
