import React from 'react'
import { useMultiForm } from '../../../context/MultiStepperProvider'
import { mock_schedule } from '../../../mock/Data'
import Typography from '../../../components/ui/Typography'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { ViewSelectedSchedule } from './ViewSelectedSchedule'
import Button from '../../../components/ui/Button'
import { isSelected } from '../../../utils/MultiForm'


const ScheduleList = ({ value, vesselType, currentSelectedSchedule , setSelectedSchedule, setViewFLight} : any) => {
    return mock_schedule
    .filter((schedule : any) => schedule?.type_id == value?.data.type_id && schedule.vessel === vesselType)
    .map((schedule : any) => (
    <div key={schedule.id} className={`cursor-pointer border-b w-full items-center flex  py-3 h-24 mt-2 `} >
        <div className="flex h-full gap-x-3 items-center">
            <Typography variant="body2" color='primary' className="!font-bold min-w-16">{schedule.vessel}</Typography>
        </div>
        <div className="flex h-full gap-x-3 items-center ml-0 md:ml-10">
            <div className="flex gap-x-1 items-center">
                <Typography variant="small" className="font-medium min-w-16 text-left">{schedule.departure_date
                } : {schedule.departure_time} </Typography>
                <IoIosArrowRoundForward size={20} />
                <Typography variant="small" className="font-medium min-w-16 text-right">{schedule.arrival_date
                } : {schedule.arrival_time}</Typography>
            </div>
        </div>
        <div className="flex h-full gap-x-3 flex-col items-end justify-center ml-auto">
            <Typography variant="body1" color='primary' className="!font-bold ">{schedule.fare}</Typography>
            {schedule.available_slots < 10 && 
                <Typography variant="info" className="text-yellow-500 font-semibold">{schedule.available_slots} Slots left in this schedule</Typography>
            }
        </div>
        <Button size="small" variant={`border`} className={`ml-5 h-10 ${currentSelectedSchedule(schedule) ? 'bg-cerulean-blue-500 text-white hover:text-white hover:bg-cerulean-blue-600' : ''}`} onClick={()=>{setViewFLight(true); setSelectedSchedule(schedule)}} >{currentSelectedSchedule(schedule) ? 'Selected' : 'Select'}</Button>
    </div>))
}
export const SelectSchedule = () => {
    const { value } = useMultiForm()
    const currentSelectedSchedule = (schedule : any) : boolean => {
        return schedule.id === value?.data?.schedule_id
    }
    const [vesselType, setVesselType ] = React.useState<string>('ARGO 1')
    const [viewFlight, setViewFLight] = React.useState<boolean>(false)
    const [selectedSchedule, setSelectedSchedule] = React.useState<number>()
    
    const schedules = ScheduleList({ value, vesselType, currentSelectedSchedule, setSelectedSchedule, setViewFLight})
    console.log(schedules.length);
    
  return (
    <div className="mt-2 flex flex-col  w-full rounded-xl overflow-hidden shadow-xlborder">
        <div className='flex gap-x-4 mt-1'>
            {['ARGO 1', 'ARGO 2', 'SUDA'].map((vessel : any) => (
                <Button
                    key={vessel}
                    variant="plain"
                    type="button"
                    className={`border-neutral-300 w-24 h-11 transition-colors duration-300 hover:shadow-md ${isSelected(vesselType ,  vessel)}` }
                    onClick={() => setVesselType(vessel)}>
                    {vessel}
                </Button>
            ))}
        </div>
        {schedules.length > 0 ? schedules : <div className='flex place-content-center w-full items-center py-3 h-24'> <Typography variant='small2'>No Schedule</Typography></div>}
        {/* {(schedules.length > 0 && schedules.length === 5) &&
        <Button variant='plain' className='border-none flex items-center justify-center gap-2 mt-3' onClick={handleDisplayedLimit}>{isLimited ? 'See more' : 'See less'}  <IoIosArrowDown className={`transition-transform ${isLimited ? '' : '-rotate-90'}`} /> </Button>
        } */}

        {/* ----------------------------------------------------VIEW SELECTED SCHEDULE---------------------------------------------------- */}
        {viewFlight && <ViewSelectedSchedule setViewFLight={setViewFLight} selectedSchedule={selectedSchedule} />}
    </div>
  )
}
