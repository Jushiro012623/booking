import React from 'react'
import Typography from '../../../components/ui/Typography'
import { useMultiForm } from '../../../context/MultiStepperProvider'
import { SelectSchedule } from './SelectSchedule'

export const SecondStep = () => {
    const {value,setIsDisable} = useMultiForm()
    React.useEffect(() => {
        if(value?.data?.schedule_id){
            setIsDisable(false)
        }else{
            setIsDisable(true)
        }
    },[value])
  return (
    <div className='w-full mt-16 mb-10'>
        <Typography className=" px-1 font-medium">Step 2</Typography>
        <Typography variant="small" className='px-1'>Select the flight that best suits your travel needs and schedule.</Typography>
        {/* --------------FLIGHTS SELECTION-------------- */}
        <SelectSchedule />

    </div>
  )
}
