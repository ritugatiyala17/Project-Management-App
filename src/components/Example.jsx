import React from "react";
import loginImage from "../assets/jungle-book.jpg";

function Example() {
  return (
    <div>
      <section className="container mx-auto pt-10 pb-10 md:pt-20 md:pb-20 lg:pt-28 lg:pb-28 xl:pt-32 xl:pb-32">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:gap-x-10">
          <div className="col-span-1 hidden lg:block">
            <img
              src={loginImage}
              alt="Image"
              className="object-cover w-full h-full"
            />
          </div>
          <form
            action="#"
            method="post"
            className="col-span-1 p-6 space-y-6 rounded-lg shadow-lg bg-white lg:space-y-8"
          >
            <input
              type="email"
              name="username"
              id="username"
              placeholder="Username"
              required
              className="block w-full px-4 py-2 mt-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              required
              className="block w-full px-4 py-2 mt-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            />
            <button
              type="submit"
              className="py-2 px-4 block w-full text-base font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
            >
              Login
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Example;
