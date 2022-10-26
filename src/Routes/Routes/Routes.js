import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Checkout from "../../components/Checkout/Checkout";
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
        loader: () => fetch('https://programming-library-assignment-server.vercel.app/courses'),
        element: <PrivateRoute><Courses></Courses></PrivateRoute>
      },
      {
        path: '/course/:id',
        loader: ({params}) => fetch(`https://programming-library-assignment-server.vercel.app/courses/${params.id}`),
        element: <PrivateRoute><CourseDetails></CourseDetails></PrivateRoute>
      },
      {
        path: '/checkout/:id',
        loader: ({params}) => fetch(`https://programming-library-assignment-server.vercel.app/courses/${params.id}`),
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