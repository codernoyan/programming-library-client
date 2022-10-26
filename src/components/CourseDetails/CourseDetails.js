import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Features from '../Features/Features';

const CourseDetails = () => {
  const details = useLoaderData();
  const navigate = useNavigate();
  console.log(details);
  const { about, id, img, price, languageName, keyFeatures } = details;

  const handleNavigate = () => {
    navigate(`/checkout/${id}`);
  }

  return (
    <div>
      {/* course title */}
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-0 sm:text-center sm:mb-0">

            <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-2">
              <h2 className="max-w-lg mb-0 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">{languageName} Course Details</span>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* course details */}
      <div className="px-4 pb-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {languageName}
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                {about.slice(0, 350)}...
              </p>
            </div>
            <p className="mb-4 text-sm font-bold tracking-widest uppercase">
              Key Features:
            </p>
            <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
              <ul className="space-y-3">
                {
                  keyFeatures.map((feature, index) => <Features key={index} feature={feature}></Features>)
                }
              </ul>
            </div>
            <hr className='my-3' />
            <div>
              <h2 className="text-2xl font-bold">Price: <span className="text-rose-400">{price}$</span></h2>
              <div className="flex gap-2 my-1">
                <button className="bg-rose-400 py-1 px-2 text-white font-medium rounded-sm">Download PDF</button>
                <button onClick={handleNavigate} className="bg-rose-400 py-1 px-2 text-white font-medium rounded-sm">Get Premium Access</button>
              </div>
            </div>
          </div>
          <div>
            <img
              className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
              src={img}
              alt="course"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;