import React from 'react'
import Typography from '../../../components/ui/Typography'

export const Summary = ({value} : any) => {
  return (
    <React.Fragment>
                <Typography variant="h6" className='text-cerulean-blue-500 border-b-2 border-dotted border-slate-200 pb-2 font-semibold'>Selection Details</Typography>
        {value.data.type_id === 1 && <React.Fragment>
                <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Discount</span> <span>{value.discount}</span></Typography>
                <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Boarding Count</span> <span>{value.data.passenger_quantity}</span></Typography>
                <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Accomodation</span> <span>{value.data.additional ? 'AIRCONDITION' : "BASIC"}</span></Typography>
        </React.Fragment>}
        {value.data.type_id === 2 && <React.Fragment>
                <Typography variant="body2" className='mt-2 flex justify-between uppercase'><span className='font-medium'>Plate Number</span> <span>{value.data.plate_number}</span></Typography>
                <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Weight</span> <span>{value.weight}</span></Typography>
                <Typography variant="body2" className='mt-2 flex justify-between capitalize'><span className='font-medium'>Vehicle Type</span> <span>{value.data.vehicle_type}</span></Typography>
        </React.Fragment>}
        {value.data.type_id === 3 && <React.Fragment>
                <Typography variant="body2" className='mt-2 flex justify-between capitalize'><span className='font-medium'>Item Name</span> <span>{value.data.item_name}</span></Typography>
                <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Weight</span> <span>{value.weight}</span></Typography>
                <Typography variant="body2" className='mt-2 flex justify-between'><span className='font-medium'>Item Quantity</span> <span>{value.data.item_quantity}</span></Typography>
                <Typography variant="body2" className='mt-2 flex justify-between capitalize'><span className='font-medium'>Description</span> <span>{value.data.description}</span></Typography>
        </React.Fragment>}
    </React.Fragment>
  )
}
