import React from 'react'
import Typography from '../../../components/ui/Typography'
import { useMultiForm } from '../../../context/MultiStepperProvider'
import { SelectSchedule } from './SelectSchedule'
import { secondStepValidation } from '../../../utils/validation'

export const SecondStep = () => {
    const {value, setIsDisable} = useMultiForm()
    React.useEffect(() => {
        const canProceed = secondStepValidation(value)
        setIsDisable(canProceed)
        // const hasSelectedSchedule = value?.data?.schedule_id !== null || undefined
        // if(hasSelectedSchedule){
        //     setIsDisable(false)
        // }else{
        //     setIsDisable(true)
        // }
    },[value])
  return (
    <div className='w-full mt-16 mb-10'>
        <Typography variant="h4" className="  font-semibold">Step 2</Typography>
        <Typography variant="body2" className=''>Select the flight that best suits your travel needs and schedule.</Typography>
        {/* --------------FLIGHTS SELECTION-------------- */}
        <SelectSchedule />

    </div>
  )
}
