import React from 'react'
import notfound from '../assets/notfound.svg'
import Typography from '../components/ui/Typography'
import { NavLink } from 'react-router-dom'
import Button from '../components/ui/Button'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { useAuthProvider } from '../context/AuthenticationProvider'
export default function NotFound() {
    const {token} = useAuthProvider()
    useDocumentTitle('404 | Not Found');
  return (
    <React.Fragment>
        <div className='w-full h-screen place-items-center place-content-center'>
            <img src={notfound} alt="" className='w-[250px]'/>
            <Typography color='danger' className={`mt-10 text-[3rem] font-bold`}>404 | Page Not Found</Typography>
            <Typography variant='body2' className={`w-[450px] text-center mt-10`}>Sorry, the page you’re looking for doesn’t seem to exist. It might have been moved, deleted, or never existed in the first place.</Typography>
            <NavLink to="/"> <Button variant='border' className={`mt-6 w-full !px-10`}> Go back to {token ? 'Homepage' : 'Login'}</Button> </NavLink>
        </div>
    </React.Fragment>
  )
}
