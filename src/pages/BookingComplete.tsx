import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import Typography from '../components/ui/Typography'
import Button from '../components/ui/Button'
import Navbar from '../components/Navbar'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { useMultiForm } from '../context/MultiStepperProvider'
import complete from '../assets/mail.svg'
const BookingComplete = () => {
    const { state, dispatch } = useMultiForm()
    useDocumentTitle("Booking | Complete");
    if(state.status !== 'complete'){
        return <Navigate to="/"/>
    }
  return (
    <React.Fragment>
            <Navbar />
            <div className='w-full h-screen'>
                <div className='fixed w-full h-screen flex items-center justify-center'>
                    <div className='rounded-xl p-6 flex gap-5'>
                        <div className='relative w-[450px] bg-bgs  h-auto flex flex-col items-center pt-5 pb-5 px-5 text-center rounded-xl'>
                            <img src={complete} alt="" className='w-[300px]'/>
                            <Typography variant='h4' className={`!font-bold mt-10`}>Your booking was completed successfully!</Typography>
                            <Typography variant='small' className={`mt-2`}>We've sent a confirmation email with your booking details and tracking information to your inbox.</Typography>
                            <Link to="/" className='mt-6 w-full'> <Button className={`w-full`} variant='success' onClick={()=>{dispatch({ type: "RESET" })}}> Go back to dashboard</Button> </Link> 
                            {/* <Typography variant='info' className={`absolute bottom-0  translate-y-24 mt-5 w-1/2`}>Need help? Contact our support team at <a href="mailto:support@yourwebsite.com">support@yourwebsite.com</a>.</Typography> */}
                        </div>
                        <div className='relative w-[450px] bg-bg h-auto flex flex-col pt-5 pb-5 px-5 rounded-xl'>
                            <Typography variant='h6' className='text-left'>Flight Summary</Typography>
                            <Typography variant='body2'  className='mt-4'>Client</Typography>
                            <Typography variant='small'>Pacific Ocean</Typography>
                            <Typography variant='body2' className='mt-4'>Shipment Type</Typography>
                            <Typography variant='small'>[Shipment Type]</Typography>

                            <div className='border p-3 mt-6'>
                                <div className='flex justify-between'>
                                    <Typography variant='body2'>Booked time</Typography>
                                    <Typography variant='body2'>[Booked time]</Typography>
                                </div>
                                <div className='flex justify-between'>
                                    <Typography variant='body2'>route</Typography>
                                    <Typography variant='body2'>[route]</Typography>
                                </div>
                                <div className='flex justify-between'>
                                    <Typography variant='body2'>vessel type</Typography>
                                    <Typography variant='body2'>[vessel type]</Typography>
                                </div>
                                <div className='flex justify-between'>
                                    <Typography variant='body2'>departure</Typography>
                                    <Typography variant='body2'>[departure]</Typography>
                                </div>
                                <div className='flex justify-between'>
                                    <Typography variant='body2'>arrival</Typography>
                                    <Typography variant='body2'>[arrival]</Typography>
                                </div>
                            </div>
                            <div className='flex justify-between mt-10'>
                                <Typography variant='body2'>reference number</Typography>
                                <Typography variant='body2'>[reference number]</Typography>
                            </div>
                            <div className='flex justify-between'>
                                <Typography variant='body2'>booking id</Typography>
                                <Typography variant='body2'>[booking id]</Typography>
                            </div>
                            <Typography className='mt-6 text-right'>Amount Payable</Typography>
                            <Typography className='text-right'>[Amount Payable]</Typography>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
  )
}

export default BookingComplete