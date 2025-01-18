import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Dashboard from './pages/Dashboard';
import Layout from './Layout/Layout';
import Login from './pages/Login';
import Signup from './pages/Signup';
import AddEvent from './pages/AddEvent';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/add-event" element={<AddEvent />}></Route>
      </Route>
    </>
  )
);

const App = () => {
 return <RouterProvider router={router} />;
}

export default App