import React from 'react';

const navigation = [
  { name: 'About', href: '#about', current: false },
  { name: 'Mission & Vision', href: '#vision', current: false },
  { name: 'Leaders', href: '#leaders', current: false },
  { name: 'Events', href: '#events', current: false },
  { name: 'Social', href: '#social', current: false }
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => (
  <div className="navbar bg-neutral text-neutral-content">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex="0" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex="0"
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          {navigation.map((item, index) => (
            <li key={`${index}-parent`}>
              <a
                key={index}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-900 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium'
                )}
                aria-current={item.current ? 'page' : undefined}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <a className="btn btn-ghost normal-case text-xl" href="/#">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-2xl md:text-2xl">
          <span className="block text-green-500 xl:inline">SIIYM</span>
        </h1>
      </a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal p-0">
        {navigation.map((item, index) => (
          <li key={`${index}-child`}>
            <a
              key={`child-${index}`}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'px-3 py-2 rounded-md text-sm font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn" href={`/#events`}>
        Upcoming Events
      </a>
    </div>
  </div>
);

export default Navbar;
