import React from 'react'
import Navbar from '../components/Navbar'
import { Navigate, Outlet } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import Footer from '../components/Footer'
import { useAuthProvider } from '../context/AuthenticationProvider'

export default function MainLayout() {
    useDocumentTitle('Pacific Ocean')
    const { token } = useAuthProvider();
    return (
            token ? <React.Fragment>
                        <Navbar />
                        <Outlet />
                        <Footer />
                    </React.Fragment> 
            : <Navigate to="/login" />)

            
}
