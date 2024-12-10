import { FaArrowLeftLong,FaArrowRightLong  } from "react-icons/fa6";
import Button from '../../../components/ui/Button';
import { useMultiForm } from '../../../context/MultiStepperProvider';
import { useToast } from "../../../context/ToastProvider";

interface MultiStepper{
    loading: boolean;
}
export default function StepController({loading}:MultiStepper) {

    const {setToast, setToastInfo, toast} = useToast()
    const {state, dispatch, maxStep, isDisable} = useMultiForm()
    const handleDispatch = () => {
        
        if (!isDisable){
            if (state.step !== maxStep) {
                dispatch({ type: "NEXT" });
            } 
            else {
                dispatch({ type: "COMPLETE" });
            }
            setToastInfo({title: null, message: null});
            return
        }
        if(toast){
            setToast(false)
            setTimeout(()=>{
                setToast(true)
            }, 100)
        }else{
            setToast(true)
        }
        setToastInfo({title: 'error', message: 'All Fields are required'})
        
    }
    return (
        <div className={` step-buttons flex w-full  mt-auto py-8 ${state.step === 1 ? 'justify-end' : 'justify-between'}`}>
            <Button 
                className={`flex items-center gap-2 justify-center min-w-20 ${state.step === 1 ? 'hidden' : ''} `} 
                onClick={() => {dispatch({ type: "BACK" })} } 
                type="button" 
                variant='light'
            >
                <FaArrowLeftLong />Back
            </Button>
            <Button 
                className={`flex items-center gap-2 justify-center min-w-20 ${isDisable ? 'opacity-50 pointer-events-none' : null}`} 
                type={state.status === 'complete' ? 'submit' : 'button'}
                onClick={handleDispatch}  
            >
                {state.step === maxStep ? (loading ? <>Please Wait...</> : <>Complete<FaArrowRightLong /></>) : <>Next<FaArrowRightLong /></>}
            </Button>
        </div>
    )
}
