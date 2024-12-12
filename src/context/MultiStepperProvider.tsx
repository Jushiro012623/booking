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
    setCanProceed: (canProceed: boolean) => void;
    canProceed: boolean;
    setRequired: (required: any) => void;
    required: any;
    maxStep: number;
}

export const MultiStepper = React.createContext<MultiStepper | undefined>(undefined);
export default function MultiStepperProvider({children}:MultiStepperProvider) {
    const stepDetails = [
        { id: 1, icon: <IoBoat />, details: "Fillup Details" },
        { id: 2, icon: <IoBoat />, details: "Search Flights" },
        { id: 3, icon: <IoBoat />, details: "Confirm" },
        // { id: 4, icon: <IoBoat />, details: "Confirm" },
    ];
    const { dispatch, state, maxStep } = useStepManager(stepDetails.length)

    const [ canProceed, setCanProceed ] = React.useState(true)
    const [ value, setValue ] = React.useState()   
    const [ required, setRequired ] = React.useState()   

    const contextValue = {required, setRequired, stepDetails, setValue, value, dispatch, state, setCanProceed, canProceed, maxStep}

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
