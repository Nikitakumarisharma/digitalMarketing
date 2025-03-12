import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home";
import Main from "../Layout/Main";
import Home2 from "../Pages/Home2";
import Layout2 from "../Layout/Layout2";
import TeamPage from "../Pages/TeamPage";
import TeamDetailsPage from "../Pages/TeamDetailsPage";
import ContactPage from "../Pages/ContactPage";
import BlogPage from "../Pages/BlogPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout2></Layout2>,
      children: [        
        {
          path: "/team",
          element: <TeamPage></TeamPage>,
        },   
        {
          path: "/team/team-details",
          element: <TeamDetailsPage></TeamDetailsPage>,
        },   
 
        {
          path: "/contact",
          element: <ContactPage></ContactPage>,
        },   
     
        {
          path: "/blog",
          element: <BlogPage></BlogPage>,
        }, 
        {
          path: "/blog/blog-details",
          element: <BlogDetailsPage></BlogDetailsPage>,
        },         
        {
          path: "/blog/:id", // ✅ Dynamic Blog Route Added Here
          element: <BlogDetailsPage></BlogDetailsPage>,
        },                                                                     
      ],
    }, 
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          index: true,
          element: <Home></Home>,
        },                           
      ],
    },
    {
      path: 'home2',
      element: <Main></Main>,
      children: [
        {
          index: true,
          element: <Home2></Home2>,
        },                           
      ],
    },


       

    
  ]);