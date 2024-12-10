
import { useMultiForm } from "../context/MultiStepperProvider";
import StepController from "../features/booking/components/StepController";
import StepTracker from "../features/booking/components/StepTracker";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { mock_routes  } from "../mock/Data"
import FirstStep from "../features/booking/components/FirstStep";
import { Toast } from "../components/ui/Toast";
import { SecondStep } from "../features/booking/components/SecondStep";
import React from "react";
import { ThirdStep } from "../features/booking/components/ThirdStep";
import { useToast } from "../context/ToastProvider";
const Booking = () => {
    const {toast, toastInfo,setToast, setToastInfo} = useToast()
    const {setValue, value, stepDetails,setIsDisable, state, dispatch} = useMultiForm();
    const [submitting, setIsSubmitting] = React.useState<boolean>(false)
    const DocumentTitleStepNumber = () => {
        switch(state.step){
            case 1: return 'Step 1'
            case 2: return 'Step 2'
            case 3: return 'Step 3'
            case 4: return 'Step 4'
            default: return 'Step 1'
        }
    }
    const handleOnSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try{
            dispatch({type: 'COMPLETE'})
            setIsSubmitting(true)
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setToastInfo({title: 'success', message: 'Booking successful!'})
        }
        catch(e) {
            setToastInfo({title: 'error', message: 'Failed to book'})
        }finally{
            setIsSubmitting(false)
            setToast(true)
        }
    }
    
    React.useEffect(() => {
        const hasRoute = value?.data.route_id
        const hasPersonalInfo = value?.data?.name && value?.data?.email
        const hasShipmentType = value?.data?.type_id
        const hasCompletedTypeFillup= () => {
            switch(value?.data?.type_id){
                case 1:
                    return value?.data?.discount_id && value?.data?.passenger_quantity
                case 2:
                    return value?.data?.plate_number && value?.data?.weight_id &&  value?.data?.vehicle_type
                case 3:
                    return value?.data?.description && value?.data?.item_quantity &&  value?.data?.item_name &&  value?.data?.weight_id
                default: 
                    return false
            }
        }
        const canProceed = hasRoute && hasPersonalInfo && hasShipmentType && hasCompletedTypeFillup()
        if(canProceed){
            setIsDisable(false)
        }else{
            setIsDisable(true)
        }
    },[value])
    const memoSchedule = React.useMemo(() => value?.data?.type_id, [value?.data?.type_id]);
    React.useEffect(() => {
        setValue((prev : any) => ({...prev, data: {...prev?.data, schedule_id: null} } ))
    }, [memoSchedule])
    useDocumentTitle(`Booking Process | ${DocumentTitleStepNumber()}`);
    return (
        <section className="w-full min-h-screen py-[120px] px-[5%] place-items-center">
            <form onSubmit={handleOnSubmit}>
                <StepTracker state={state} stepDetails={stepDetails} />
                {/* _____________________FIRST STEP_____________________ */}
                {state.step === 1 && <FirstStep mock_routes={mock_routes}/>}
                {/* _____________________SECOND STEP____________________ */}
                {state.step === 2 && <SecondStep />}
                {/* _____________________THIRD STEP_____________________ */}
                {state.step === 3 && <ThirdStep />}

                <StepController loading={submitting}/>
            </form>
            {toast && <Toast variant={toastInfo?.title} message={toastInfo?.message}/>}
        </section>
    )
};

export default Booking;
