import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typography, Input, Button } from '@material-tailwind/react';
import { EyeSlashIcon, EyeIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../../hooks/useAuth';

export function Register() {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => setPasswordShown(cur => !cur);
  const { createUser, setUser, googleLogin } = useAuth();
  const navigate = useNavigate();

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
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/4NrsK0N9/clipboard-with-ribbons-candles.jpg')",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between  ">
        {/* Left image / visual space */}
        <div className="hidden md:flex md:w-1/2" data-aos="fade-right">
          {/* Optionally add illustration or text */}
        </div>

        {/* Right Form Section */}
        <div
          className="w-full md:w-1/2 bg-white bg-opacity-90 rounded-xl px-8 py-10 shadow-lg"
          data-aos="fade-left"
        >
          <Typography variant="h3" className="text-center font-extrabold mb-4">
            Register
          </Typography>
          <Typography className="text-center text-gray-700 text-sm mb-6">
            Create your account by filling in the information below.
          </Typography>
          <form onSubmit={handleRegisterUser} className="space-y-6">
            <div>
              <Typography variant="small" className="mb-2 font-medium">
                Full Name
              </Typography>
              <Input
                name="name"
                type="text"
                size="lg"
                label="Full Name"
                required
              />
            </div>
            <div>
              <Typography variant="small" className="mb-2 font-medium">
                Photo URL
              </Typography>
              <Input name="photo" type="text" size="lg" label="Photo URL" />
            </div>
            <div>
              <Typography variant="small" className="mb-2 font-medium">
                Email
              </Typography>
              <Input
                name="email"
                type="email"
                size="lg"
                label="Email"
                required
              />
            </div>
            <div>
              <Typography variant="small" className="mb-2 font-medium">
                Password
              </Typography>
              <Input
                name="password"
                size="lg"
                type={passwordShown ? 'text' : 'password'}
                label="Password"
                required
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
              className="hover:bg-blue-800 transition-all duration-200"
            >
              Register
            </Button>
            <Button
              onClick={handleGoogleLogin}
              variant="outlined"
              size="lg"
              color="blue"
              className="flex items-center justify-center gap-2 w-full"
            >
              <FaGoogle /> Sign in with Google
            </Button>
            <Typography
              variant="small"
              className="text-center mt-4 text-gray-600"
            >
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-blue-600 hover:underline font-medium"
              >
                Sign in
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
