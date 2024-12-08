import { useEffect, useState } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import { Typography, Input, Button } from '@material-tailwind/react';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa'; // Import Google icon
import useAuth from '../../hooks/useAuth';

export function Register() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown(cur => !cur);
  const { createUser, updateUserProfile, setUser, googleLogin } = useAuth(); // Add googleLogin
  const navigate = useNavigate();

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleRegisterUser = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;

    createUser(email, password)
      .then(result => {
        setUser({ ...result.user, displayName: name, photoURL: photo });
        toast.success('Registration Successful!');
        navigate('/');
      })
      .catch(() => {
        toast.error('Registration Failed!');
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(result => {
        setUser(result.user);
        toast.success('SignIn with Google Successfully');
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="flex items-center justify-center py-10 min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-fontPrimary">
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
          Register
        </Typography>
        <Typography
          className="text-center text-gray-700 text-sm mb-8"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Create your account by filling in the information below.
        </Typography>
        <form onSubmit={handleRegisterUser} className="space-y-6">
          <div data-aos="fade-right" data-aos-delay="200">
            <label htmlFor="name">
              <Typography
                variant="small"
                className="block text-gray-700 font-medium mb-2"
              >
                Full Name
              </Typography>
            </label>
            <Input
              id="name"
              color="gray"
              size="lg"
              type="text"
              name="name"
              label="Full Name"
              className="w-full"
            />
          </div>
          <div data-aos="fade-right" data-aos-delay="200">
            <label htmlFor="photo">
              <Typography
                variant="small"
                className="block text-gray-700 font-medium mb-2"
              >
                Photo URL
              </Typography>
            </label>
            <Input
              id="photo"
              color="gray"
              size="lg"
              type="text"
              name="photo"
              label="Photo URL"
              className="w-full"
            />
          </div>
          <div data-aos="fade-right" data-aos-delay="300">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
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
          <div data-aos="fade-left" data-aos-delay="400">
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
          </div>
          <Button
            type="submit"
            color="blue"
            size="lg"
            fullWidth
            className="transition duration-200 ease-in-out hover:shadow-lg hover:bg-blue-800"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Register
          </Button>
          <div
            className="flex items-center justify-center gap-4 mt-4"
            data-aos="fade-up"
            data-aos-delay="600"
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
            data-aos-delay="700"
          >
            Already have an account?{' '}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Sign in
            </Link>
          </Typography>
        </form>
      </div>
    </div>
  );
}

export default Register;
