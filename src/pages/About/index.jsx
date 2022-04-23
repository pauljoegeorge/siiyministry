import React from 'react'
import { Description } from './components/Components'
import page from '../../assets/data/LandingPage/About/About.json'

const About = () => (
  <div id="about" className="flex flex-wrap bg-white pt-40">
    <div className="text-gray-700 text-center px-4 py-2 m-2 sm:max-w-lg">
      <h1
        className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl"
        style={{ textAlign: 'left' }}
      >
        {page.head}
      </h1>
      {page.descriptions.map((description, index) => {
        return (
          <Description
            key={index}
            className="mt-4 text-xl text-gray-500"
            dangerouslySetInnerHTML={{ __html: description.replace('\n', '<br />') }}
          />
        )
      })}
    </div>
    <div className="flex-1 text-gray-700 text-center px-4 py-4 m-2">
      <img src={require(`../../assets/data/LandingPage/About/${page.image}`)} />
    </div>
  </div>
)

export default About
