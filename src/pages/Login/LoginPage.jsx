import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <>
      <div
        className="bg-cover bg-center h-full bg-[#172228] py-24"
        style={{ backgroundImage: "url('/images/layer.png')" }}
      >
        <section className="bg-gray-50 dark:bg-gray-300 mt-5 w-10/12 mx-auto     ">
          <div className="flex flex-col lg:flex-row ">
            <div className="lg:w-3/5 bg-white py-6 ">
              <div className="p-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl ">
                  Login
                </h1>
                <span className="py-5">
                  <p className="py-2">Please fill in these details</p>
                </span>

                <form className="space-y-4 md:space-y-6" action="#">
                  <div className="mt-5">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Enter Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500"
                      placeholder="name@gmail.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5"></div>
                    </div>
                    <Link
                      to="#"
                      className="text-sm font-light hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-green-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Login
                  </button>
                  <p className="text-sm font-light text-center">
                    Have not any account?
                    <Link
                      to="#"
                      className="font-medium text-green-600 hover:underline dark:text-primary-500"
                    >
                      Create Now
                    </Link>
                  </p>
                </form>
              </div>
            </div>

            <div className="lg:w-1/2 bg-[#F9F5F2] py-36 items-center sm-spacing-y-4 ">
              <div className="flex flex-col items-center justify-center ">
                <p className=" mr-52 mt-6">Continue with:</p>
                <div className="flex flex-col items-center  ">
                  <div className="flex items-center  mr-52 mt-6  ">
                    <Link className="  ml-16  rounded-full border border-white bg-white py-2 px-2 relative left-2  ">
                      <img
                        src="/images/OBJECTS.png"
                        alt="google-iconss"
                        height="33"
                        width="33"
                        className="   "
                      />
                    </Link>
                    <span className="bg-white px-10 p-1 ">Google</span>
                    <div className="bg-[#0000001A] w-2 h-8 "></div>
                  </div>
                  <div className="flex items-center  mr-40 mt-6 ">
                    <Link className="rounded-full border border-black mr-2 bg-white p-2 px-3 relative left-6 ">
                      <img
                        src="/images/object1.png"
                        alt="apple-icon"
                        height="34"
                        width="27"
                        className=" "
                      />
                    </Link>
                    <span className=" bg-white px-10 p-1 ">Apple ID</span>
                    <div className="bg-[#00000033] w-2 h-8 "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default LoginPage;
