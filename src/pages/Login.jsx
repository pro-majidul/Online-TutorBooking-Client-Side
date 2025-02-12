import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import { toast } from 'react-toastify';
import loginImg from '../assets/SignUp.json'
import Lottie from 'lottie-react';
const Login = () => {
    const { setUser, googleLogin, loginUser } = useUsers();
    const location = useLocation()
    const navigate = useNavigate()
    const handelLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(result => {
                toast.success('user login Success')
                setUser(result.user)
                navigate('/')
            })
            .catch(error => {
                // console.log(error);
                toast.error(`${error.code}`)

            })



    }

    const handelGoogleLogin = () => {

        googleLogin()
            .then(result => {
                // console.log(result.user);
                setUser(result.user)
                const email = result.user?.email;
                toast.success('user login Success')
                const data = { email: result.user.email, name: result.user.displayName, photo: result.user.photoURL }
                fetch(`https://online-tutorial-booking-platform-server-side.vercel.app/users/${email}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                    }).catch(error => {
                        // console.log(error);
                    })

                navigate('/')
            })
            .catch(error => {
                // console.log(error);
                toast.error(`${error.code}`)
            })
        // console.log("handelgooglelogin added");

    }

    return (
        <div className='md:flex items-center justify-center gap-5 pt-28 py-5'>
            <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 ">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>

                <div className="my-6 space-y-4">
                    <button onClick={handelGoogleLogin} aria-label="Login with Google" type="button" className="flex hover:bg-green-400 items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        <p>Login with Google</p>
                    </button>
                </div>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr className="w-full dark:text-gray-600" />
                </div>
                <form onSubmit={handelLogin} className="space-y-6">

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    </div>

                    <button className="block w-full p-3 text-center rounded-sm hover:bg-green-300 hover:text-black dark:text-gray-50 dark:bg-violet-600">Login </button>
                </form>

                <p className="text-md text-center dark:text-gray-600 my-5 py-5 w-full">Dont have account?
                    <Link to='/signUp' className="focus:underline hover:underline ml-1  text-red-400">Sign up here</Link>
                </p>
            </div>
            <div>
                <Lottie animationData={loginImg}></Lottie>
            </div>
        </div>
    );
};

export default Login;