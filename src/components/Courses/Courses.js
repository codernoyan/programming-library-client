import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
  const coursesData = useLoaderData();
  // console.log(coursesData);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <aside className="bg-rose-100 shadow-md rounded-md">
          <div className="px-2 py-8">
            <h2 className="text-2xl font-semibold mb-4">Courses:</h2>
            <div className="flex flex-col gap-2">
              {
                coursesData.map(course => <Link className="text-md font-medium bg-rose-300 p-1" key={course.id} to={`/course/${course.id}`}>{course.courseName}</Link>)
              }
            </div>
          </div>
        </aside>
        <div className="lg:col-span-3">
          {/* courses */}
          <div className="grid lg:grid-cols-3 gap-4 m-4 lg:m-0">
            {
              coursesData.map(course => <Course key={course.id} course={course}></Course>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;