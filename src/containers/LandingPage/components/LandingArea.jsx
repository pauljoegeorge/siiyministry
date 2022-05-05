import styled from 'styled-components';

export const Hero = styled.div`
  height: ${props => props.isMobile ? '400px' : '100vh'};
  position: relative;
  color: #fff;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  background-position: center center;
  background-position-y: 50px;
  background-image: url(${`${process.env.REACT_APP_S3_ASSETS_BASE_URL}/web-assets/public/siiym_logo_2019.png`});
`;