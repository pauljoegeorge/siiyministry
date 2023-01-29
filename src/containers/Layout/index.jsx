import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;
const LayoutContainer = (props) => {
  const { children } = props;

  return (
    <Wrapper>
      <Navbar />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default LayoutContainer;

LayoutContainer.propTypes = {
  match: PropTypes.shape({
    children: PropTypes.node.isRequired
  }).isRequired
};
