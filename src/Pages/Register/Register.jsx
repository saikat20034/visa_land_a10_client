import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@material-tailwind/react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';
import useAuth from '../../hooks/useAuth';

function Register() {
  const [error, setError] = useState('');
  const { createUser, setUser, updateUserProfile } = useAuth();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown(cur => !cur);
  const navigate = useNavigate();

  const handleRegistration = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const profile = e.target.photoURL.value;
    setError('');

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError('Password must contain an uppercase letter');
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError('Password must contain a lowercase letter');
      return;
    }

    createUser(email, password)
      .then(result => {
        updateUserProfile(name, profile)
          .then(() => {
            setUser(result.user);
            toast.success('Successfully Created Account!');
            navigate('/');
          })
          .catch(err => console.log(err));
      })
      .catch(error => console.log(error.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-lg rounded-xl p-6 sm:p-10">
        <h4 className="text-2xl font-semibold leading-snug text-black text-center">
          Sign Up
        </h4>
        <p className="mt-1 text-base text-black text-center">
          Nice to meet you! Enter your details to register.
        </p>
        <form onSubmit={handleRegistration} className="mt-4 w-80 sm:w-96">
          <div className="flex flex-col gap-6">
            <div>
              <h6 className="text-base font-semibold text-black">Your Name</h6>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="w-full mt-1 p-2 border rounded-md text-sm"
              />
            </div>
            <div>
              <h6 className="text-base font-semibold text-black">Your Email</h6>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
                className="w-full mt-1 p-2 border rounded-md text-sm"
              />
            </div>
            <div>
              <h6 className="text-base font-semibold text-black">Photo URL</h6>
              <input
                type="text"
                name="photoURL"
                placeholder="https://www.photo.com"
                className="w-full mt-1 p-2 border rounded-md text-sm"
              />
            </div>
            <div>
              <h6 className="text-base font-semibold text-black">Password</h6>
              <div className="relative">
                <Input
                  size="lg"
                  name="password"
                  type={passwordShown ? 'text' : 'password'}
                  className="w-full"
                  label="Password"
                  icon={
                    <i onClick={togglePasswordVisiblity}>
                      {passwordShown ? (
                        <EyeIcon className="h-5 w-5" />
                      ) : (
                        <EyeSlashIcon className="h-5 w-5" />
                      )}
                    </i>
                  }
                />
                <p className="text-red-600 mt-1">
                  <small>{error || ''}</small>
                </p>
              </div>
            </div>
          </div>
          <button
            className="mt-6 w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-3 rounded-lg uppercase font-bold text-sm hover:opacity-90"
            type="submit"
          >
            Sign Up
          </button>
          <p className="mt-2 text-center text-sm text-black">
            Already have an account?{' '}
            <Link to="/login" className="text-gray-900 font-semibold">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
