import React from 'react';

const LandingArea = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-xl">
          <img
            src={`${process.env.REACT_APP_S3_ASSETS_BASE_URL}/web-assets/public/siiym_logo_2019.png`}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingArea;
