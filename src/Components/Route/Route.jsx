import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddHabit from "../AddHabit/AddHabit";
import PrivateRoute from "../privetRoute/pivetRoute";
import MyHabits from "../MyHabits/MyHabits";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PublicHabit from "../PublicHabit/PublicHabit";
import HabitDetails from "../HabitDetails/HabitDetails";
import NotFound from "../NotFound/NotFound";
import AboutSection from "../About/AboutSection";
import ContactSection from "../Contact/ContactSection";
import DashboardLayout from "../Dashboard/DashboardLayout";
import DashboardHome from "../Dashboard/DashboardHome";
import Profile from "../Dashboard/Profile";
import HabitCalendar from "../Dashboard/User/HabitCalculator";
import MyHabit from "../Dashboard/User/MyHabit";
import AddHabits from "../Dashboard/User/AddHabit";
import UserHome from "../Dashboard/User/Home";
import AdminHome from "../Dashboard/Admin/AdminHome";
import UsersManagement from "../Dashboard/Admin/UsersManagement";
import ManageHabits from "../Dashboard/Admin/Managehabit";




export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            
        index: true,
        element: <Home/>,
      
        },
        {
          path:'about',
          element:<AboutSection/>
        },
        {
          path:'contact',
          element:<ContactSection></ContactSection>
        },
        {
            path:"add-habit",
            element:<PrivateRoute>
                <AddHabit/>
            </PrivateRoute>
        },
        {
            path:"my-habits",
            element:<PrivateRoute>
                <MyHabits/>
            </PrivateRoute>
        },
        {
            path:"public-habit",
            element:<PublicHabit/>
        },
        {
            path:"login",
            element:<Login/>
        },
        {
            path:'register',
            element:<Register/>
        },
          {
    path: "/habit/:id",
    element: 
      <PrivateRoute>
        <HabitDetails />
      </PrivateRoute>
          },

           {
        path: "dashboard",
        element:<DashboardLayout />,
         children: [
          { index: true, element: <DashboardHome/> },
          {path:'home',element:<UserHome/>},
          { path: "calendar", element: <HabitCalendar /> },
          
          {path:'my-habits',element:<MyHabit/>},
        { path:'homes',element:<AdminHome/>},
          {
            path:'add-habit',element:<AddHabits/>
          },
          {
              path:'users-management',element:<UsersManagement/>
          },
          {
              path:'manage-habits',element:<ManageHabits/>
          },
          {
            path:'profile',
            element:<Profile/>
          }
        ]
      },
           {
        path: "*",
        element: <NotFound/>,
      },
    ]

    
  },
]);
  