import React from 'react'
import { Heading, Heading2 } from './components/Components'
import page from '../../assets/data/LandingPage/Leaders/Leaders.json'
import { isMobile } from '../../utils/utils'

const Leaders = () => (
  <div id="leaders" className="bg-white">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <Heading className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl pb-10">
        {page.head}
      </Heading>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 py-8">
        {!isMobile() && 
          <div />
        }
        {page.representatives.map((leader) => (
          <a key={leader.id} href={leader.href} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={`${process.env.REACT_APP_S3_ASSETS_BASE_URL}${leader.icon}`}
                alt={leader.alt}
                className="w-full h-full object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{leader.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{leader.groupName}</p>
          </a>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-2 gap-x-12 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8">
        {page.leaders.map((leader) => (
          <a key={leader.id} href={leader.href} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={`${process.env.REACT_APP_S3_ASSETS_BASE_URL}${leader.icon}`}
                alt={leader.alt}
                className="w-full h-80 object-center object-cover group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{leader.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{leader.groupName}</p>
          </a>
        ))}
      </div>
    </div>
  </div>
)

export default Leaders
