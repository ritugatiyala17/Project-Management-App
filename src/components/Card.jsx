import React from "react";

const Card = () => {
  return (
    <div className="flex flex-wrap justify-start">
      <div
        className="max-w-sm bg-white rounded shadow-lg overflow-hidden sm:rounded-xl mb-4 mr-4"
        style={{
          borderRadius: "8px",
          background: "linear-gradient(to right, #fafafa, #e6e6e6)",
        }}
      >
        {/* Card content */}
        <img
          src="https://news.artnet.com/app/news-upload/2015/01/CalvinHobbes1.jpg"
          alt=""
          className="w-[100%]"
        />
        <div className="p-6 text-gray-900">
          <h3 className="text-xl font-semibold tracking-tight mb-2">
            Calvin and Hobbes
          </h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button
            type="submit"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button 1
          </button>
          <button
            type="submit"
            className="ml-4 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button 2
          </button>
        </div>
      </div>
      <div
        className="max-w-sm bg-white rounded shadow-lg overflow-hidden sm:rounded-xl mb-4 mr-4"
        style={{
          borderRadius: "8px",
          background: "linear-gradient(to right, #fafafa, #e6e6e6)",
        }}
      >
        {/* Card content */}
        <img
          src="https://lwlies.com/wp-content/uploads/2016/04/the-jungle-book-1967-1108x0-c-default.jpg"
          alt=""
          className="w-[100%]"
        />
        <div className="p-6 text-gray-900">
          <h3 className="text-xl font-semibold tracking-tight mb-2">
            Jungle Book
          </h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button
            type="submit"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button 1
          </button>
          <button
            type="submit"
            className="ml-4 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button 2
          </button>
        </div>
      </div>

      <div
        className="max-w-sm bg-white rounded shadow-lg overflow-hidden sm:rounded-xl mb-4 mr-4"
        style={{
          borderRadius: "8px",
          background: "linear-gradient(to right, #fafafa, #e6e6e6)",
        }}
      >
        {/* Card content */}
        <img
          src="https://cdna.artstation.com/p/assets/images/images/013/664/230/large/mike-bear-27752139-10102110917711177-2325884093845875928-n.jpg?1540598310"
          alt=""
          className="w-[100%]"
        />
        <div className="p-6 text-gray-900">
          <h3 className="text-xl font-semibold tracking-tight mb-2">
            Talespin
          </h3>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <button
            type="submit"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button 1
          </button>
          <button
            type="submit"
            className="ml-4 inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Button 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
