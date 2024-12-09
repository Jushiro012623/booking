
import { useMultiForm } from "../context/MultiStepperProvider";
import StepController from "../features/booking/components/StepController";
import StepTracker from "../features/booking/components/StepTracker";
import useDocumentTitle from "../hooks/useDocumentTitle";
import { mock_routes  } from "../mock/Data"
import FirstStep from "../features/booking/components/FirstStep";
import { Toast } from "../components/ui/Toast";
import { SecondStep } from "../features/booking/components/SecondStep";
import React from "react";
const Booking = () => {
    const {setValue, value, stepDetails, state, toast, toastInfo} = useMultiForm();
    const DocumentTitleStepNumber = () => {
        switch(state.step){
            case 1: return 'Step 1'
            case 2: return 'Step 2'
            case 3: return 'Step 3'
            case 4: return 'Step 4'
            default: return 'Step 1'
        }
    }
    const memoSchedule = React.useMemo(() => value?.data?.type_id, [value?.data?.type_id]);
    React.useEffect(() => {
        setValue((prev : any) => ({...prev, data: {...prev?.data, schedule_id: null} } ))
    }, [memoSchedule])
    useDocumentTitle(`Booking Process | ${DocumentTitleStepNumber()}`);
    return (
        <section className="w-full min-h-screen py-[120px] px-[5%] place-items-center">
            <div>
                <StepTracker state={state} stepDetails={stepDetails} />
                {/* _____________________FIRST STEP_____________________ */}
                {state.step === 1 && <FirstStep mock_routes={mock_routes}/>}
                {/* _____________________SECOND STEP____________________ */}
                {state.step === 2 && <SecondStep />}
                {/* _____________________THIRD STEP_____________________ */}
                <StepController loading={false}/>
            </div>
            {toast && <Toast variant={toastInfo?.title} message={toastInfo?.message}/>}
        </section>
    )
};

export default Booking;
