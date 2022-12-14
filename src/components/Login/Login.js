import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spinner from '../Spinner/Spinner';

const Login = () => {
  const { loginUser, googleSignIn, githubSignIn, loading, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const [userInfo, setUserInfo] = useState({
    userEmail: "",
    userPassword: ""
  });

  const [error, setError] = useState({
    emailError: "",
    passwordError: ""
  })

  const handleEmailChange = (e) => {
    const email = e.target.value;
    // email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError({ ...error, emailError: 'Please input valid email address' });
      setUserInfo({ ...userInfo, userEmail: "" });
    } else {
      setError({ ...error, emailError: "" });
      setUserInfo({ ...userInfo, userEmail: email });
    }
  }

  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const lengthError = !/(?=.{6,})/.test(password);

    if (lengthError) {
      setError({ ...error, passwordError: 'Password should be at least 6 characters or longer' });
      setUserInfo({ ...userInfo, userPassword: '' });
    } else {
      setError({ ...error, passwordError: '' });
      setUserInfo({ ...userInfo, userPassword: password });
    }
    
    // setUserInfo({ ...userInfo, userPassword: password });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    loginUser(userInfo.userEmail, userInfo.userPassword)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Login Successful');
        form.reset();
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
        setLoading(false);
      })
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Sign in with Google Successful');
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
        setLoading(false);
      })
  }

  const handleGithubSignIn = () => {
    githubSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Sign in with Github Successful');
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
        setLoading(false);
      })
  };

  if (loading) {
    return <Spinner />
  }

  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block dark:text-gray-400">Email</label>
            <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md border-2 dark:border-gray-700 bg-white text-black focus:dark:border-violet-400" />
            {/* error message */}
            {error.emailError && <p className="text-red-500 font-medium">{error.emailError}</p>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-400">Password</label>
            <input onChange={handlePasswordChange} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 border-2 rounded-md dark:border-gray-700 bg-white text-black focus:dark:border-violet-400" />
            {/* error message */}
            {error.passwordError && <>
              <p className="text-red-500 font-medium">{error.passwordError}</p>
              <p className="text-gray-600 font-medium">Password Hint: mY4585</p>
            </>}
            <div className="flex justify-end text-xs dark:text-gray-400">
              <Link rel="noopener noreferrer" to="/forgotpass">Forgot Password?</Link>
            </div>
          </div>
          <button className="block w-full p-3 font-semibold text-center rounded-sm text-white dark:bg-rose-400">Login</button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
          <button onClick={handleGithubSignIn} aria-label="Log in with GitHub" className="p-3 rounded-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 dark:text-gray-400">Don't have an account?
          <Link rel="noopener noreferrer" to="/register" className="underline dark:text-rose-600 font-bold">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;