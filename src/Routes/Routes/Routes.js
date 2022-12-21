import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Checkout from "../../components/Checkout/Checkout";
import Faq from "../../components/Faq/Faq";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import NotFound from "../../components/NotFound/NotFound";
import Register from "../../components/Register/Register";
import Spinner from "../../components/Spinner/Spinner";
import Main from "../../layouts/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
const LazyCourseDetails = React.lazy(() => import("../../components/CourseDetails/CourseDetails"))
const LazyCourses = React.lazy(() => import("../../components/Courses/Courses"))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/courses',
        loader: () => fetch('https://programming-library-assignment-server.vercel.app/courses'),
        element: (
          <React.Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <LazyCourses></LazyCourses>
            </PrivateRoute>
          </React.Suspense>
        )
      },
      {
        path: '/course/:id',
        loader: ({ params }) => fetch(`https://programming-library-assignment-server.vercel.app/courses/${params.id}`),
        // element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
        element: (
          <React.Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <LazyCourseDetails></LazyCourseDetails>
            </PrivateRoute>
          </React.Suspense>
        )
      },
      {
        path: '/checkout/:id',
        loader: ({ params }) => fetch(`https://programming-library-assignment-server.vercel.app/courses/${params.id}`),
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path: '/faq',
        element: <Faq></Faq>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
    ]
  }
])