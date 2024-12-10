import React from 'react'
import Typography from '../../../components/ui/Typography'
import { useMultiForm } from '../../../context/MultiStepperProvider'
import { Summary } from './Summary'

export const ThirdStep = () => {
    const {value} = useMultiForm()
    const data = {
        shipment_type: value?.shipment_type,
        vessel:value?.fare?.vessel,
        transportation_type:value?.route?.transportation_type,
        origin:value?.route?.origin,
        destination:value?.route?.destination,
        departure: value?.fare?.departure_time,
        arrival: value?.fare?.arrival_time,
        arrival_date: value?.fare?.arrival_date,
        departure_date: value?.fare?.departure_date,
        fare: value?.fare?.fare
    }
    
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
                    <Typography variant="body2" className='mt-2 flex justify-between capitalize'><span className='font-medium'>Shipment Type</span> <span>{data.shipment_type}</span></Typography>
                    <Typography variant="body2" className='mt-2 flex justify-between capitalize'><span className='font-medium'>Vessel</span> <span>{data.vessel}</span></Typography>
                    <Typography variant="body2" className='mt-2 flex justify-between capitalize'><span className='font-medium'>Transportation Type</span> <span>{data.transportation_type}</span></Typography>
                    <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Origin</span> <span>{data.origin}</span></Typography>
                    <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Destination</span> <span>{data.destination}</span></Typography>
                    <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Departure</span> <span>{data.arrival_date} : {data.departure}</span></Typography>
                    <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Arrival</span> <span>{data.departure_date} : {data.arrival}</span></Typography>
                </div>
                <div className='w-full mt-5'>    
                    <Typography variant="h6" className='text-cerulean-blue-500 border-b-2 border-dotted border-slate-200 pb-2 font-semibold'>Amount</Typography>
                    <Typography variant="body2" className='font-semibold mt-2 flex justify-between capitalize'>Total Amount <span>{data.fare}</span></Typography>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}


