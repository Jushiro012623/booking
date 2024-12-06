import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Footer from '../components/Footer'

export default function MainLayout() {
    useDocumentTitle('Pacific Ocean')
    return <React.Fragment>
                <Navbar />
                <Outlet />
                <Footer />
            </React.Fragment> 
}
