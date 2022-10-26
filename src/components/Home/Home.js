import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/coding.gif';

const Home = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Want to learn and master
              <br className="hidden md:block" />
              <span className="inline-block text-rose-400">
                Programming?
              </span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Explore and get fluent in programming languages you want. We offer courses over some popular programming languages. Every programming language has its own way of doing things. Our mentors will help you learn to think like a developer and how to write idiomatic code. We have live support with google meet 2 times in a day. You can enroll in any our course at any time.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-rose-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3">Explore Our Courses</span>
            </Link>
          </div>
        </div>
        <div className="relative lg:w-1/2">
          <img
            className="object-cover w-full h-full rounded sm:h-full"
            src={heroImage}
            alt="hero"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;