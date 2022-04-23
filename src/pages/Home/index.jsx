import React from 'react'
import styled from 'styled-components'
import SiiymLogo from '../../assets/images/common/siiym_logo_2019.png'

const Logo = styled.img`
  min-width: 100%;
  min-height: 100%;
  object-fit: contain;
`

const Home = () => (
  <div className="relative bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h3 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
              <span className="block xl:inline">Welcome to </span>
              <br />
            </h3>
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-green-500 xl:inline">ST. IGNATIUS INTERNATIONAL YOUTH MINISTRY</span>
            </h1>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  About ST. IGNATIUS Catholic Church
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0">
      <Logo className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={SiiymLogo} alt="" />
    </div>
  </div>
)

export default Home
