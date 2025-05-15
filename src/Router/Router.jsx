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
import FastProcessing from '../components/FastProcessing/FastProcessing';
import SecurePayment from '../components/SecurePayment/SecurePayment';
import ExpertSupport from '../components/Expert/Expert';
import SimplifyingVisaApplications from '../components/SimplifyingVisaApplications/SimplifyingVisaApplications';
import UnderstandingVisaCategories from '../components/UnderstandingVisaCategories/UnderstandingVisaCategories';
import InterviewTipsBlog from '../components/InterviewTipsBlog/InterviewTipsBlog';
import UnitedStatesVisa from '../components/UnitedStatesVisa/UnitedStatesVisa';
import UnitedKingdomVisa from '../components/UnitedKingdomVisa/UnitedKingdomVisa';
import CanadaVisa from '../components/CanadaVisa/CanadaVisa';
import AustraliaVisa from '../components/AustraliaVisa/AustraliaVisa';
import Profile from '../components/Profile/Profile';




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
        path: '/secure-payment',
        element: <SecurePayment></SecurePayment>,
      },

      {
        path: '/fast-processing',
        element: <FastProcessing></FastProcessing>,
      },
      {
        path: '/expert-support',
        element: <ExpertSupport></ExpertSupport>,
      },
      {
        path: '/simplify',
        element: <SimplifyingVisaApplications></SimplifyingVisaApplications>,
      },
      {
        path: '/visa-categories',
        element: <UnderstandingVisaCategories></UnderstandingVisaCategories>,
      },
      {
        path: '/interview-tips',
        element: <InterviewTipsBlog></InterviewTipsBlog>,
      },
      {
        path: '/profile',
        element: <Profile></Profile>,
      },

      {
        path: '/usa',
        element: <UnitedStatesVisa></UnitedStatesVisa>,
      },
      {
        path: '/australia',
        element: <AustraliaVisa></AustraliaVisa>,
      },

      {
        path: '/uk',
        element: <UnitedKingdomVisa></UnitedKingdomVisa>,
      },
      {
        path: '/canada',
        element: <CanadaVisa></CanadaVisa>,
      },

      {
        path: '/all-visas',
        element: <AllVisas />,
      },
      {
        path: '/add-visa',
        element: (
          <PrivateRoute>
            <AddVisa></AddVisa>
          </PrivateRoute>
        ),
      },
      {
        path: '/my-added-visas',
        element: (
          <PrivateRoute>
            <MyAddedVisas></MyAddedVisas>
          </PrivateRoute>
        ),
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
