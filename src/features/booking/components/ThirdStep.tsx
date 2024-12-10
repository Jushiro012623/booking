import React from 'react'
import Typography from '../../../components/ui/Typography'
import { useMultiForm } from '../../../context/MultiStepperProvider'
import { Summary } from './Summary'

export const ThirdStep = () => {
    const {value} = useMultiForm()
  return (
    <React.Fragment>
        <div className='w-full mt-16 mb-10'>
            <Typography variant="h4" className="font-semibold">Step 3</Typography>
            <Typography variant="body2" className=''>Please take a moment to review and confirm your ticket details.</Typography>
            <div className='mt-6 flex flex-col w-full'>
                <div className='w-full'>
                    <Summary value={value} />
                </div>
                <div className='w-full mt-5'>    
                    <Typography variant="h6" className='text-cerulean-blue-500 border-b-2 border-dotted border-slate-200 pb-2 font-semibold'>Travel Details</Typography>
                    <Typography variant="body2" className='mt-2 flex justify-between capitalize'><span className='font-medium'>Transportation Type</span> <span>{value.route.transportation_type}</span></Typography>
                    <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Origin</span> <span>{value.route.origin}</span></Typography>
                    <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Destination</span> <span>{value.route.destination}</span></Typography>
                    <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Departure</span> <span>{value.fare.date} : {value.fare.departure}</span></Typography>
                    <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Arrival</span> <span>{value.fare.date} : {value.fare.arrival}</span></Typography>
                </div>
                <div className='w-full mt-5'>    
                    <Typography variant="h6" className='text-cerulean-blue-500 border-b-2 border-dotted border-slate-200 pb-2 font-semibold'>Amount</Typography>
                    <Typography variant="body2" className='font-semibold mt-2 flex justify-between capitalize'>Total Amount <span>{value.fare.fare}</span></Typography>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}


