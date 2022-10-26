import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import Faq from "../../components/Faq/Faq";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import NotFound from "../../components/NotFound/NotFound";
import Register from "../../components/Register/Register";
import Main from "../../layouts/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        loader: () => fetch('http://localhost:5000/courses'),
        element: <PrivateRoute><Courses></Courses></PrivateRoute>
      },
      {
        path: '/course/:id',
        loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
        element: <CourseDetails></CourseDetails>
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