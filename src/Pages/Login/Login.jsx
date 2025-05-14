import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
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
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center font-fontPrimary"
      style={{
        backgroundImage: `url('https://i.postimg.cc/KYbZNv5G/5850995-3047902.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-60 w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-8 md:px-16">
        {/* Optional left side */}
        <div className="hidden md:flex w-1/2 h-full items-center justify-center text-white p-8">
          <div data-aos="fade-right">
            <Typography variant="h2" className="font-bold">
              Welcome Back!
            </Typography>
            <Typography className="mt-4 text-gray-300">
              Please log in to access your account.
            </Typography>
          </div>
        </div>

        {/* Login form on right side */}
        <div
          className="w-full md:w-1/2 max-w-md bg-white rounded-lg shadow-lg p-6 md:p-8"
          data-aos="fade-left"
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
                  className="block text-gray-800 font-medium mb-2"
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
                  className="block text-gray-800 font-medium mb-2"
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
              >
                <Link
                  to="#"
                  onClick={e => e.preventDefault()}
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
                className="flex items-center justify-center gap-2 w-full bg-white"
              >
                <FaGoogle className="text-lg text-blue-700" />
                Sign in with Google
              </Button>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="text-center mt-4"
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
    </div>
  );
}

export default Login;
