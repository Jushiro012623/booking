import React from 'react'
import Typography from '../../../components/ui/Typography';
import LabeledInputText from '../../../components/ui/LabeledInputText';
import { useMultiForm } from '../../../context/MultiStepperProvider';
import { FillupTypeStep } from './FillupTypeStep';
import { FillupRoute } from './FillupRoute';
import { firstStepValition  } from '../../../utils/validation';
import requiredImg from '../../../assets/icon-required.svg'
import { IoIosWarning } from "react-icons/io";
const FirstStep = ({routes}:any) => {
    const { value, setValue, setCanProceed } = useMultiForm();
    const [firstStepInitData, setFirstStepInitData] = React.useState<any>();
    const initialRouteType : string = firstStepInitData?.transportation_type || value?.route?.transportation_type || "out";
    
    const handleOnRouteChoose = (e : any) => {
        const [selectedRoute] = routes
        .filter((route : any) => route.id == e.target.value)
        setValue((prev : any) => ({
            ...prev, 
            data:{ ...prev?.data, route_id: selectedRoute?.id},
            route:selectedRoute
        })) 
        setFirstStepInitData(( prev : any )=>({...prev, ...selectedRoute}));
    }
    const handleInputChange = (e : any, name : any) => {
        setValue((prev : any) => ({...prev, data:{ ...prev?.data, [name]: e.target.value}}));
        setFirstStepInitData((prev : any ) => ({...prev, [name] : e.target.value}))
    }

    React.useEffect(() => {
        const firstStep = firstStepValition(value)
        setCanProceed(firstStep)
    },[value])
    return (
        <React.Fragment>
            <div className="relative w-full mt-16 mb-10 p-10borderrounded-lg">
                <Typography variant='h4' className=" font-semibold">Step 1</Typography>
                <Typography variant="body2">Please fill up all the necessary information</Typography>
                <div className='flex gap-x-2 items-center mt-6 py-3 border border-cerulean-blue-100 bg-cerulean-blue-50 px-5'>
                    <IoIosWarning className='text-red-500' />
                    <Typography variant="small">All fields with </Typography>
                    <div className='border border-slate-300 w-12 h-5 rounded overflow-hidden'>
                        <img src={requiredImg} alt="" />
                    </div>
                    <Typography variant="small">is Required </Typography>
                </div>
                {/* -----------------------------------ROUTES FIELD----------------------------------- */}
                <Typography variant="body2" className='mt-6 font-medium'>Route information</Typography>
                <FillupRoute routes={routes} initialRouteType={initialRouteType} handleOnRouteChoose={handleOnRouteChoose} firstStepInitData={firstStepInitData}/>
                <span className='block border-b-2 border-dotted  h-1 mt-7' />
                {/* -------------------------------SHIPMENT TYPE FIELD-------------------------------- */}
                <Typography variant="body2" className='mt-5 font-medium'>Shipment information</Typography>
                <FillupTypeStep handleInputChange={handleInputChange}/>
                <span className='block border-b-2 border-dotted  h-1 mt-7' />

                {/* -------------------------------PERSONAL INFO FIELDS------------------------------- */}
                <Typography variant="body2" className='mt-5 font-medium'>Other information</Typography>
                <div className="mt-7  w-full flex gap-x-5">
                    <LabeledInputText isRequired={true} value={value?.data?.name || ''} onChange={(e)=>{handleInputChange(e,'name' )}} className="border-neutral-300" name="name" label="Full Name" placeholder="Doom Bringer"/>
                    <LabeledInputText isRequired={true} value={value?.data?.email || ''} onChange={(e)=>{handleInputChange(e,'email')}} className="border-neutral-300" name="email" label="Email Address" placeholder="doom.bringer@gmail.com"/>
                </div>
            </div>
        </React.Fragment>
    )
}
export default FirstStep

