import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Loadable from './Loadable';

const MainLayout = Loadable(React.lazy(() => import('../layouts/MainLayout')));
const NotFound = Loadable(React.lazy(() => import('../pages/NotFound')));
const Login = Loadable(React.lazy(() => import('../pages/Login')));
const Booking = Loadable(React.lazy(() => import('../pages/Booking')));
const BookingComplete = Loadable(React.lazy(() => import('../pages/BookingComplete')));

// const UserEdit = Loadable(React.lazy(() => import('../layout/pages/users/userEdit')));

const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
        <Route path='/' element={<MainLayout />} >
            <Route index element={<Booking />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/complete" element={<BookingComplete />} />
    </React.Fragment>
  )
);

export default MainRouter;
