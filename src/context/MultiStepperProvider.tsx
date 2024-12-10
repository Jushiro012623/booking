import React from 'react'
import useStepManager from '../hooks/useStepManager';
import { IoBoat } from "react-icons/io5";

interface MultiStepperProvider{
    children:React.ReactNode
}
interface MultiStepper {
    stepDetails: Array<{ id: number, icon: React.ReactElement, details: string }>;
    setValue: (value: any) => void;
    value: any;
    dispatch: (action: { type: string }) => void;
    state: any;
    setIsDisable: (isDisable: boolean) => void;
    isDisable: boolean;
    maxStep: number;
    toast: boolean;
    setToast: (toast: boolean) => void;
    toastInfo: any;
    setToastInfo: (toast: any) => void;
}

export const MultiStepper = React.createContext<MultiStepper | undefined>(undefined);
export default function MultiStepperProvider({children}:MultiStepperProvider) {
    const stepDetails = [
        { id: 1, icon: <IoBoat />, details: "Fillup Details" },
        { id: 2, icon: <IoBoat />, details: "Search Flights" },
        { id: 3, icon: <IoBoat />, details: "Confirm" },
        // { id: 4, icon: <IoBoat />, details: "Confirm" },
    ];
    const [isDisable, setIsDisable] = React.useState(true)
    const { dispatch, state, maxStep } = useStepManager(stepDetails.length)
    const [value, setValue] = React.useState()   
    const [toast, setToast] = React.useState<boolean>(false);
    const [toastInfo, setToastInfo] = React.useState<any>({title: null, message: null});

    const contextValue = {stepDetails, setValue, value, dispatch, state, setIsDisable, isDisable, maxStep, toast, setToast, toastInfo, setToastInfo}

    return (
        <MultiStepper.Provider value={contextValue}>
            {children}
        </MultiStepper.Provider>
    )
    
}
export const useMultiForm = (): MultiStepper => {
    const context = React.useContext(MultiStepper);
    if (!context) {
      throw new Error('useAuthProvider must be used within an AuthenticationProvider');
    }
    return context;
}
