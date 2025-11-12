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
          }
    ]

    
  },
]);
  