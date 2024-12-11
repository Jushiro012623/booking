import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Loadable from './Loadable';
import { Login } from '../pages/Login';

const NotFound = Loadable(React.lazy(() => import('../pages/NotFound')));
const Booking = Loadable(React.lazy(() => import('../pages/Booking')));
const BookingComplete = Loadable(React.lazy(() => import('../pages/BookingComplete')));

// const UserEdit = Loadable(React.lazy(() => import('../layout/pages/users/userEdit')));

const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
        <Route path='/' element={<MainLayout />} >
            <Route index element={<Booking />} />
            <Route path="/complete" element={<BookingComplete />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
    </React.Fragment>
  )
);

export default MainRouter;
