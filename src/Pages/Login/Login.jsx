import { Link } from "react-router-dom";
import loginimage from "../../assets/others/authentication1.png";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useRef, useState } from "react";
const Login = () => {
    const captchaRef=useRef(null)
    const [disabled,setdisabled]=useState(true)
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
  const handlelogin = (e) => {
   
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
  };

  const handleCaptcha=()=>{
    const value =captchaRef.current.value
    if(validateCaptcha(value)){
        setdisabled(false)
        alert('captcha verifyed')
       }
       else{
        setdisabled(true)
        alert('oops!')
       }
  }
  return (
    <div className="">
      <div className="flex lg:flex-row md:flex-row flex-col mx-auto justify-center items-center  mt-4 gap-8">
        <div className="w-1/2">
          <img src={loginimage} alt="" />
        </div>
        <div className="lg:w-2/3 md:w-2/3">
          <section className="  dark:bg-gray-900">
            <div className="container  flex items-center justify-start min-h-screen px-6 mx-auto ">
              <form onSubmit={handlelogin} className="w-full max-w-md ">
                <h1 className="mt-3 text-center text-2xl font-semibold  capitalize sm:text-3xl dark:text-white">
                  Login
                </h1>
                <label>Email </label>

                <input
                  type="email"
                  name="email"
                  className="block w-full p-3 mt-1  border rounded-lg  dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address"
                  //   {...register("email", { required: true })}
                />

                {/* {errors.email && (
                <span className="text-red-500">This field is required</span>
              )} */}

                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="block w-full p-3    border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Password"
                  //   {...register("password", { required: true })}
                />
                <br />
                {/* {errors.password && (
                <span className="text-red-500">This field is required</span>
              )} */}
                 <LoadCanvasTemplate />
              
                <input ref={captchaRef}
                  type="text"
                  name="captcha"
                  className="block w-full p-3    border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Type the Captcha"
                  //   {...register("password", { required: true })}
                />
                <button onClick={handleCaptcha} className="btn btn-xs mt-2">Valid you captcha</button>
                <div className="mt-6">
                  <button disabled={disabled} className="w-full disabled:bg-gray-300 px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#D1A054] rounded-lg hover:bg-[#D1A054] focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    Sign in
                  </button>

                  <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
                    or sign in with
                  </p>

                  <button
                    href="#"
                    className="w-full flex items-center justify-center px-6 py-3 mt-4  transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <svg className="w-6 h-6 mx-2" viewBox="0 0 40 40">
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#FFC107"
                      />
                      <path
                        d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                        fill="#FF3D00"
                      />
                      <path
                        d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                        fill="#4CAF50"
                      />
                      <path
                        d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                        fill="#1976D2"
                      />
                    </svg>

                    <span className="mx-2">Sign in with Google</span>
                  </button>

                  <div className="mt-6 text-center ">
                    <a
                      href="#"
                      className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                    >
                      Don’t have an account yet?
                      <Link to={"/registation"}> Sign up</Link>
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
