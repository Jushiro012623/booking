import React from 'react'
import Typography from '../../../components/ui/Typography';
import LabeledInputText from '../../../components/ui/LabeledInputText';
import { useMultiForm } from '../../../context/MultiStepperProvider';
import { FillupTypeStep } from './FillupTypeStep';
import { FillupRoute } from './FillupRoute';
const FirstStep = ({mock_routes}:any) => {
    const { value, setValue, setIsDisable } = useMultiForm();
    const [firstStepInitData, setFirstStepInitData] = React.useState<any>();
    const initialRouteType : string = firstStepInitData?.transportation_type || value?.route?.transportation_type || "out";
    const handleOnRouteChoose = (e : any) => {
        const [preSelectRoute] = mock_routes
        .filter((route : any) => route.id == e.target.value)
        setValue((prev : any) => ({
            ...prev, 
            data:{ ...prev?.data, route_id: preSelectRoute?.id},
            route:preSelectRoute
        })) 
        setFirstStepInitData(( prev : any )=>({...prev, ...preSelectRoute}));
        
    }
    const handleInputChange = (e : any, name : any) => {
        setValue((prev : any) => ({...prev, data:{ ...prev?.data, [name]: e.target.value}}));
        setFirstStepInitData((prev : any ) => ({...prev, [name] : e.target.value}))
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
    return (
        <React.Fragment>
            <div className="w-full mt-16 mb-10  p-10borderrounded-lg">
                <Typography className=" px-1 font-medium">Step 1</Typography>
                <Typography variant="small" className='px-1'>Please fill up all the necessary information</Typography>
                {/* ----------------------------ROUTES FIELD---------------------------- */}
                <FillupRoute initialRouteType={initialRouteType} handleOnRouteChoose={handleOnRouteChoose} firstStepInitData={firstStepInitData}/>
                <span className='block border-b-2 border-dotted  h-1 mt-7 mx-1' />
                {/* ------------------------SHIPMENT TYPE FIELD------------------------- */}
                <FillupTypeStep handleInputChange={handleInputChange}/>
                <span className='block border-b-2 border-dotted  h-1 mt-7 mx-1' />
                {/* ------------------------PERSONAL INFO FIELDS------------------------ */}
                <div className="mt-7 px-1">
                    <div className="w-full flex gap-x-5">
                        <LabeledInputText value={value?.data?.name || ''} onChange={(e)=>{handleInputChange(e,'name' )}} className="border-neutral-300" name="name" label="Full Name" placeholder="Doom Bringer"/>
                        <LabeledInputText value={value?.data?.email || ''} onChange={(e)=>{handleInputChange(e,'email')}} className="border-neutral-300" name="email" label="Email Address" placeholder="doom.bringer@gmail.com"/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default FirstStep
