import React, { useEffect } from 'react';
import { Description, Wrapper, Image } from './components/Components';
import { useData } from '../../hooks/useData';

const Vision = () => {
  const { vision, actions } = useData();

  useEffect(() => {
    actions.getVision();
  }, []);

  return (
    <Wrapper id="vision" className="flex flex-wrap bg-white pt-40">
      <div className="flex-1 text-gray-700 text-center px-4 py-4 m-2">
        <h1
          className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl"
          style={{ textAlign: 'left' }}>
          {vision?.head}
        </h1>
        {vision?.descriptions.map((description, index) => {
          return (
            <Description
              key={index}
              className="mt-4 text-xl text-gray-500"
              dangerouslySetInnerHTML={{ __html: description.replace('\n', '<br />') }}
            />
          );
        })}
      </div>
      <div className="flex-none text-gray-700 text-center py-2 m-2">
        <Image src={`${process.env.REACT_APP_S3_ASSETS_BASE_URL}${vision?.image}`} />
      </div>
    </Wrapper>
  );
};

export default Vision;
