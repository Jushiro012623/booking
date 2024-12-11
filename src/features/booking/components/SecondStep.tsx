import React from 'react'
import Typography from '../../../components/ui/Typography'
import { useMultiForm } from '../../../context/MultiStepperProvider'
import { SelectSchedule } from './SelectSchedule'
import { IoIosArrowRoundForward } from 'react-icons/io'

export const SecondStep = () => {
    const {value, setCanProceed} = useMultiForm()
    React.useEffect(() => {
        const hasSelectedSchedule = value?.data?.schedule_id === null || undefined ? true : false
        setCanProceed(hasSelectedSchedule)
    },[value])
    console.log(value);
    
  return (
    <div className='w-full mt-16 mb-10'>
        <Typography variant="h4" className="  font-semibold">Step 2</Typography>
        <Typography variant="body2" className=''>Select the flight that best suits your travel needs and schedule.</Typography>
        <div className='border flex items-center h-11 px-10 mt-6 gap-x-16 bg-cerulean-blue-50 border-cerulean-blue-100'>
            <Typography variant="body2" className='font-medium'>Route</Typography>
            <div className='flex gap-x-5 w-full place-content-center'>
                <Typography variant="body2" color="primary" className='font-medium'>{value?.route?.origin}</Typography>
                <IoIosArrowRoundForward size={20} />
                <Typography variant="body2" color="primary" className='font-medium'>{value?.route?.destination}</Typography>
            </div>
            <Typography variant="body2" color={value?.route?.transportation_type == 'out' ? 'danger' : 'teal'} className='font-medium capitalize'>{value?.route?.transportation_type}</Typography>
        </div>
        {/* --------------FLIGHTS SELECTION-------------- */}
        <Typography variant="body2" className='mt-6 font-medium'>Available Flights</Typography>
        <SelectSchedule />

    </div>
  )
}
