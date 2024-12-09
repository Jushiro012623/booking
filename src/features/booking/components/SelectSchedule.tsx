import React from 'react'
import { useMultiForm } from '../../../context/MultiStepperProvider'
import { mock_schedule } from '../../../mock/Data'
import Typography from '../../../components/ui/Typography'
import { IoIosArrowRoundForward, IoIosArrowDown } from 'react-icons/io'
import { ViewSelectedSchedule } from './ViewSelectedSchedule'
import Button from '../../../components/ui/Button'
export const SelectSchedule = () => {
    const { value } = useMultiForm()
    const currentSelectedSchedule = (schedule : any) : boolean => {
        return schedule.id === value?.data?.schedule_id
    }
    const [displayedScheduledLimit, setDisplayedScheduledLimit ] = React.useState(5)
    const [isLimited, setIsLimited ] = React.useState<boolean>(true)
    const [viewFlight, setViewFLight] = React.useState<boolean>(false)
    const [selectedSchedule, setSelectedSchedule] = React.useState<number>()
    const handleDisplayedLimit = () => {
        setIsLimited(!isLimited)
        if(isLimited){
            setDisplayedScheduledLimit(20)
        }else{
            setDisplayedScheduledLimit(5)
        }
    }
  return (
    <div className="mt-2 flex flex-col  w-full rounded-xl overflow-hidden shadow-xlborder">
        {mock_schedule
            .filter((schedule : any) => schedule?.type_id == value?.data.type_id)
            .slice(0, displayedScheduledLimit) 
            .map((schedule : any) => (
            <div key={schedule.id} className={`cursor-pointer border-b w-full items-center flex  py-3 h-24 `} >
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
                <Button size="small" variant={`border`} className={`ml-5 h-10 ${currentSelectedSchedule(schedule) ? 'bg-cerulean-blue-500 text-white hover:text-white hover:bg-cerulean-blue-600/90' : ''}`} onClick={()=>{setViewFLight(true); setSelectedSchedule(schedule)}} >{currentSelectedSchedule(schedule) ? 'Selected' : 'Select'}</Button>
            </div>
        ))}
        <Button variant='plain' className='border-none flex items-center justify-center gap-2 mt-3' onClick={handleDisplayedLimit}>{isLimited ? 'See more' : 'See less'}  <IoIosArrowDown className={`transition-transform ${isLimited ? '' : '-rotate-90'}`} /> </Button>
        {/* ----------------------------------------------------VIEW SELECTED SCHEDULE---------------------------------------------------- */}
        {viewFlight && <ViewSelectedSchedule setViewFLight={setViewFLight} selectedSchedule={selectedSchedule} />}
    </div>
  )
}
