import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Loadable from './Loadable';

const NotFound = Loadable(React.lazy(() => import('../pages/NotFound')));
const Booking = Loadable(React.lazy(() => import('../pages/Booking')));

// const UserEdit = Loadable(React.lazy(() => import('../layout/pages/users/userEdit')));

const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
        <Route path='/' element={<MainLayout />} >
            <Route index element={<Booking />} />
        </Route>
        <Route path="*" element={<NotFound />} />
    </React.Fragment>
  )
);

export default MainRouter;
