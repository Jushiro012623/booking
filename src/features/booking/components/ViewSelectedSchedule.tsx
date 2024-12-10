import { useMultiForm } from '../../../context/MultiStepperProvider'
import Typography from '../../../components/ui/Typography'
import { IoIosArrowRoundForward } from 'react-icons/io'
import Button from '../../../components/ui/Button'

export const ViewSelectedSchedule = ({ selectedSchedule, setViewFLight} : any) => {
    const {value, setValue, dispatch} = useMultiForm()
    const handleConfirmSchedule = () => {
        setViewFLight(false)
        setValue((prev : any) => (
            {
                ...prev, 
                data:{...prev.data, schedule_id:selectedSchedule.id },
                fare:selectedSchedule
            }
        ))
        dispatch({type: 'NEXT'})
    }
  return (
    <div className='fixed top-0 left-0 h-screen w-full bg-gray-500 bg-opacity-75 place-content-center place-items-center z-50 '>
        <div className='relative min-w-[800px] bg-bg rounded-lg p-4 animate-topToBottom'>
            <div>
                <div className=' gap-4 flex' key={selectedSchedule.id}>
                    <div className='px-5 py-4 w-full rounded-md bg-white'>
                        <Typography variant='h5' className='!font-bold'>{value.shipment_type}</Typography>
                        <div className='flex mt-3' >
                            <div className='w-full'>
                                <div className='flex items-center'>
                                    <Typography variant='body2'>{value.route.origin}</Typography>
                                    <IoIosArrowRoundForward size={20} />
                                    <Typography variant='body2'>{value.route.destination}</Typography>
                                </div>
                                <Typography variant='info' color='primary'>Total Transit Time : 05 Hours</Typography>
                            </div>
                        </div>
                        <hr className='block my-4' />
                        <div className='flex'>
                            <div className='w-full flex flex-col'>
                                <Typography color='primary' variant='small' className='font-bold'>Departure</Typography>
                                <div className='flex gap-2'>
                                    <Typography variant='info'>{selectedSchedule.date}</Typography>
                                    <Typography variant='info'>{selectedSchedule.departure}</Typography>
                                </div>
                            </div>
                            <div className='w-full flex flex-col'>
                                <Typography color='primary' variant='small' className='font-bold'>Arrival</Typography>
                                <div className='flex gap-2'>
                                    <Typography variant='info'>{selectedSchedule.date}</Typography>
                                    <Typography variant='info'>{selectedSchedule.arrival}</Typography>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/4 px-5 py-4 rounded-md bg-white'>
                        <Typography variant='body2' className='mb-4 font-bold'>Amount Due</Typography>
                        <Typography variant='info' className='flex justify-between'>Base Amount <span>{selectedSchedule.fare}</span></Typography>
                        <Typography variant='info' className='flex justify-between'>Additional Fee <span>₱0.00</span></Typography>
                        <Typography variant='info' className='flex justify-between'>Subtotal <span>{selectedSchedule.fare}</span></Typography>
                        <Typography variant='info' className='flex justify-between'>Amount Off <span>₱0.00</span></Typography>
                        <hr className='my-4'/>
                        <Typography variant='body2' className='font-bold flex justify-between'>Total Amount : <span>{selectedSchedule.fare}</span></Typography>
                    </div>
                </div>
            <div className='mt-4 w-full right-0 flex gap-x-2 justify-end'>
                <Button variant='border' onClick={()=>setViewFLight(false)}>Back</Button>
                <Button variant='primary' onClick={handleConfirmSchedule}>Confirm</Button>
            </div>
            </div>
        </div>

    </div>
  )
}
