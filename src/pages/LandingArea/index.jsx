import React from 'react'
import SiiymLogo from '../../assets/images/common/siiym_logo_2019.png'

const LandingArea = () => (
  <div
    id="home"
    className="hero bg-image"
    style={{
      backgroundImage: `url(${SiiymLogo})`,
    }}
  />
)

export default LandingArea
