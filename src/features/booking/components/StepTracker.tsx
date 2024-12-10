import { FaCheck} from "react-icons/fa6";
import Typography from '../../../components/ui/Typography';
import { useMultiForm } from "../../../context/MultiStepperProvider";
import React from "react";

interface StepTracker{
    state: { step: number; status: string; id: number };
    stepDetails?: any;
}

const StepTracker = ({ state, stepDetails }:StepTracker) => {
    const stateClass = (state : any, detail : any) => {
        if(state.step > detail.id || state.status === 'complete'){
            return 'bg-cerulean-blue-400 text-white'
        }else if (state.step === detail.id){
            return 'bg-transparent  text-cerulean-blue-400 border-cerulean-blue-400'
        }else{
            return 'bg-transparent  text-gray-400 border-gray-400'
        }
    }
    console.log(state);
    
    return (
        <div className='rounded-[40px] border flex  px-4 py-4 gap-16 select-none shadow-md'>
            {stepDetails.map((detail : any)=>(
                <React.Fragment>
                    <div key={detail.id} className='cursor-pointer relative step-detail flex items-center mr-16 gap-x-4'>
                        <div className={`step-icon flex items-center justify-center rounded-full transition-colors duration-500 ${stateClass(state, detail)} border w-11  h-11 p-3`} >
                            {state.step > detail.id || state.status === 'complete' ? <FaCheck /> : detail.icon}
                        </div>
                        <div className='inline-block space-y-1'>
                            <Typography className="block font-regular " color='gray' variant="small">Steps {detail.id}/{stepDetails.length}</Typography>
                            <Typography className="block" variant="subheading2">{detail.details}</Typography>
                        </div>
                    </div >
                </React.Fragment>
            ))}
        </div>
  )
}

export default StepTracker