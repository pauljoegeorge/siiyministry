import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const LayoutContainer = (props) => {
  const { children } = props

  return (
    <>
      <Navbar {...children?.props} />
      {children}
      <Footer />
    </>
  )
}

export default LayoutContainer

LayoutContainer.propTypes = {
  match: PropTypes.shape({
    children: PropTypes.string,
  }).isRequired,
}
