import React from 'react'
import { Hero } from './components/LandingArea'
import { isMobile } from '../../utils/utils'

const LandingArea = () => {
  return(
    <div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-xl">
      <img src={`${process.env.REACT_APP_S3_ASSETS_BASE_URL}/web-assets/public/siiym_logo_2019.png`} />
      {/* <h1 class="text-5xl font-bold">Hello there</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>)
  // <Hero isMobile={isMobile()} />)
}

export default LandingArea
