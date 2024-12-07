import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Error from '../Pages/Error/Error';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import AllVisas from '../Pages/AllVisas/AllVisas';
import AddVisa from '../Pages/AddVisa/AddVisa';
import MyAddedVisas from '../Pages/MyAddedVisas/MyAddedVisas';
import MyVisaApplications from '../Pages/MyVisaApplications/MyVisaApplications';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import VisaDetails from '../components/VisaDetails/VisaDetails';
import PrivateRoute from './PrivateRoute';
import CountryDetails from '../components/CountryDetails/CountryDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/all-visas',
        element: <AllVisas />,
      },
      {
        path: '/add-visa',
        element: <AddVisa />,
      },
      {
        path: '/my-added-visas',
        element: <MyAddedVisas />,
      },
      {
        path: '/my-visa-applications',
        element: (
          <PrivateRoute>
            <MyVisaApplications />
          </PrivateRoute>
        ),
      },
      {
        path: '/country-details/:id',
        element: <CountryDetails />,
      },
      {
        path: '/visa-details/:id',
        element: (
          <PrivateRoute>
            <VisaDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
