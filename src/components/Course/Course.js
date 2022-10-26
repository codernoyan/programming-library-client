import React from 'react';
import { useNavigate } from 'react-router-dom';

const Course = ({ course }) => {
  const { courseName, duration, courseStyle, modules, rating, id } = course;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/course/${id}`);
  }

  return (
    <aside className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
      <img alt="course" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="h-56 w-full object-cover" />
      <div className="bg-white p-4 sm:p-6">
        <p className="block text-xs text-gray-500">
          {duration}
        </p>
        <div>
          <h3 className="mt-0.5 text-lg font-semibold text-rose-400">
            {courseName}
          </h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
          {courseStyle}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">Modules: {modules}</p>
        <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">Rating: {rating}</p>
        <div className="my-2">
          <button onClick={handleNavigate} className="bg-rose-400 w-full p-2 font-semibold text-white">Details</button>
        </div>
      </div>
    </aside>
  );
};

export default Course;