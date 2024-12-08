import { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { FaGoogle } from 'react-icons/fa';
import { Typography, Input, Button } from '@material-tailwind/react';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';

export function Login() {
  const [error, setError] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown(cur => !cur);
  const { googleLogin, loginUser, setUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state || '/';

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        setUser(result.user);
        toast.success('SignIn with Google Successfully');
        navigate(from);
      })
      .catch(error => console.log(error));
  };

  const handleLoginUser = e => {
    e.preventDefault();
    setPasswordShown(false);
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then(result => {
        setUser(result.user);
        toast.success('Login Successfully!');
        navigate(from);
      })
      .catch(() => {
        setError('Wrong Email or Password');
        toast.error('Wrong Email or Password');
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-fontPrimary">
      <div
        className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <Typography
          variant="h3"
          color="black"
          className="text-center mb-4 font-extrabold"
          data-aos="fade-down"
        >
          Sign In
        </Typography>
        <Typography
          className="text-center text-gray-700 text-sm mb-8"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Enter your email and password to sign in.
        </Typography>
        <form onSubmit={handleLoginUser} className="space-y-6">
          <div data-aos="fade-right" data-aos-delay="200">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              label="Email"
              className="w-full"
            />
          </div>
          <div data-aos="fade-left" data-aos-delay="300">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </Typography>
            </label>
            <Input
              size="lg"
              label="Password"
              name="password"
              className="w-full"
              type={passwordShown ? 'text' : 'password'}
              icon={
                <i onClick={togglePasswordVisibility}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5 cursor-pointer" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5 cursor-pointer" />
                  )}
                </i>
              }
            />
            <Typography
              variant="small"
              color="blue-gray"
              className="text-right mt-2"
              data-aos="fade-in"
              data-aos-delay="300"
            >
              <Link
                to="#"
                onClick={e => e.preventDefault()} // Prevent functionality
                className="text-blue-600 hover:underline"
              >
                Forget Password?
              </Link>
            </Typography>
          </div>
          {error && (
            <Typography
              variant="small"
              color="red"
              className="text-center mt-2"
              data-aos="fade-in"
            >
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            color="blue"
            size="lg"
            fullWidth
            className="transition duration-200 ease-in-out hover:shadow-lg hover:bg-blue-800"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Sign In
          </Button>
          <div
            className="flex items-center justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <Button
              onClick={handleGoogleLogin}
              variant="outlined"
              color="blue-gray"
              size="md"
              className="flex items-center justify-center gap-2 w-full"
            >
              <FaGoogle className="text-lg" />
              Sign in with Google
            </Button>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="text-center mt-4"
            data-aos="fade-in"
            data-aos-delay="600"
          >
            Not registered?{' '}
            <Link
              to="/register"
              className="font-medium text-blue-600 hover:underline"
            >
              Create account
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
}

export default Login;
