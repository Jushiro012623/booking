
import { useMultiForm } from "../context/MultiStepperProvider";
import StepController from "../features/booking/components/StepController";
import StepTracker from "../features/booking/components/StepTracker";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { mock_routes  } from "../mock/Data"
import FirstStep from "../features/booking/components/FirstStep";
import { SecondStep } from "../features/booking/components/SecondStep";
import React from "react";
import { ThirdStep } from "../features/booking/components/ThirdStep";
import { useToast } from "../context/ToastProvider";
import { Navigate } from "react-router-dom";

const Booking = () => {
    
    const { setToast, setToastInfo } = useToast()
    const { setValue, value, stepDetails, state, dispatch } = useMultiForm();
    const [ submitting, setIsSubmitting ] = React.useState<boolean>(false)
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
            setIsSubmitting(true)
            await new Promise((resolve) => setTimeout(resolve, 2000));
            setToastInfo({title: 'success', message: 'Booking successful!'})
            setValue(null)
            dispatch({type: 'COMPLETE'})
        }
        catch(e) {
            setToastInfo({title: 'error', message: 'Failed to book'})
        }finally{
            setIsSubmitting(false)
            setToast(true)
        }
    }
    const memoizedTypeId = React.useMemo(() => value?.data?.type_id, [value?.data?.type_id]);
    React.useEffect(() => {
        const typeNumber = value?.data?.type_id
        const whatType = () => {
            if(typeNumber !== 1){
                delete value?.data?.passenger_quantity;
                delete value?.data?.additional;
                delete value?.data?.discount_id;
            }
            if(typeNumber === 1){
                delete value?.data?.weight_id;
            }
            if(typeNumber !== 2){
                delete value?.data?.vehicle_type;
                delete value?.data?.plate_number;
            }
            if(typeNumber !== 3){
                delete value?.data?.item_quantity;
                delete value?.data?.description;
                delete value?.data?.item_name;
            }
            return value?.data
        }
        setValue((prev : any) => ({...prev, 
            data: {
                ...prev?.data,
                schedule_id: null,
                ...whatType()

            },
            weight: null, discount:null
     } ))
    }, [memoizedTypeId])
    useDocumentTitle(`Booking Process | ${DocumentTitleStepNumber()}`);
    if(state.status === 'complete'){
        return <Navigate to="complete" />
    }
    return (
        <section className="w-full min-h-screen py-[120px] px-[5%] place-items-center">
            <div>
                <StepTracker state={state} stepDetails={stepDetails} />
                <form className="relative" onSubmit={handleOnSubmit}>
                    {/* _____________________FIRST STEP_____________________ */}
                    {state.step === 1 && <FirstStep routes={mock_routes}/>}
                    {/* _____________________SECOND STEP____________________ */}
                    {state.step === 2 && <SecondStep />}
                    {/* _____________________THIRD STEP_____________________ */}
                    {state.step === 3 && <ThirdStep />}
                    {<StepController loading={submitting} />}
                </form>

            </div>
        </section>
    )
};

export default Booking;
