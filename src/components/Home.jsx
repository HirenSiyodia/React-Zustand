import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-12 mx-2 sm:py-12">
        <div className="relative z-10 max-w-screen-xl px-2 pb-5 pt-6 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:left sm:ml-auto">
            <h2 className="text-3xl font-semibold mb-4 text-orange-700">
              React Routing DOM
              </h2>
              <span className="hidden sm:block text-lg">
                React Router DOM is used for routing in React apps. It allows
                navigation between pages without reloading the whole app.
                </span>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8" >
                <li>
                    BrowserRouter → Enables routing
                </li>
                <li>
                    Routes / Route → Define paths & components
                </li>
                <li>
                    Link / NavLink → Navigate between pages.
                </li>
                </ul>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Download now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-4 h-full ">
          <img
            className="w-96"
            src="https://amarakosha.in/static/images/aboutus/userLogin1.jpg"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid place-items-center">
        <img
          className="sm:w-26 w-18"
          src="https://png.pngtree.com/png-vector/20240724/ourmid/pngtree-cool-about-us-images-png-image_12801239.png"
          alt="image2"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-4xl py-5 font-medium">
        React Routing DOM
        
      </h1>
      <span className="hidden sm:block text-lg text-center py-2">
                React Router DOM is used for routing in React apps. It allows
                navigation between pages without reloading the whole app.
                </span>
    </div>
  );
}
