import { FaArrowLeftLong,FaArrowRightLong  } from "react-icons/fa6";
import Button from '../../../components/ui/Button';
import { useMultiForm } from '../../../context/MultiStepperProvider';

interface MultiStepper{
    loading: boolean;
}
export default function StepController({loading}:MultiStepper) {
    const {state, dispatch, maxStep, isDisable, setToast, setToastInfo, toast} = useMultiForm()
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
        <div className={`step-buttons flex w-full  mt-auto py-8 ${state.step === 1 ? 'justify-end' : 'justify-between'}`}>
            <Button 
                className={`flex items-center gap-1 justify-center ${state.step === 1 ? 'hidden' : ''} `} 
                onClick={() => {dispatch({ type: "BACK" })} } 
                type="button" 
                variant='light'
            >
                <FaArrowLeftLong />Back
            </Button>
            <Button 
                className={`flex items-center gap-1 justify-center`} 
                type={state.status === 'complete' ? 'submit' : 'button'}
                onClick={handleDispatch}  
            >
                {state.step === maxStep ? (loading ? <>Please Wait...</> : <>Complete<FaArrowRightLong /></>) : <>Next<FaArrowRightLong /></>}
            </Button>
        </div>
    )
}
