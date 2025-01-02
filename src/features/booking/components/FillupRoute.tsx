import React from 'react'
import { IoIosArrowDown, IoIosArrowRoundForward } from 'react-icons/io'
import Button from '../../../components/ui/Button'
import { isSelected } from '../../../utils/MultiForm'
import Typography from '../../../components/ui/Typography'
import { useMultiForm } from '../../../context/MultiStepperProvider'
import isRequired from '../../../assets/icon-required.svg'
import {origins} from '../../../mock/Data'
export const FillupRoute = ({initialRouteType, handleOnRouteChoose, firstStepInitData,routes} : any) => {
    const { value } = useMultiForm() 
    const [routeType, setRouteType] = React.useState<string>(initialRouteType);
    const [routeOpen, setRouteOpen] = React.useState<boolean>(false);
    const [routeOrigin, setRouteOrigin] = React.useState<string>(value.route.origin || 'San Jose')
    const handleActiveRouteType= () =>{
        return !routeOpen ? value?.route?.transportation_type : routeType
    }
    console.log(value);
    
  return (
    <React.Fragment>
        <div className={``}>
            <div className={`w-full flex gap-3 mt-2`}>
                <Button
                    variant="plain"
                    type="button"
                    className={`border-neutral-300 w-24 h-11 transition-colors duration-300 hover:shadow-md ${isSelected(handleActiveRouteType() ,  'out')} ${!routeOpen ? 'opacity-40 pointer-events-none' : '' }` }
                    onClick={() => setRouteType("out")}>
                    OUT
                </Button>
                <Button
                    variant="plain"
                    type="button"
                    className={`border-neutral-300 w-24 h-11 transition-colors duration-300 hover:shadow-md ${isSelected(handleActiveRouteType() ,  'in')} ${!routeOpen ? 'opacity-40 pointer-events-none' : '' }`}
                    onClick={() => setRouteType("in")}>
                    IN
                </Button>
                {/*---------------------------Chosen Route---------------------------*/}
                <div className="grow overflow-hidden relative border h-11 rounded-md place-content-center place-items-center cursor-pointer select-none" onClick={() => setRouteOpen(!routeOpen)}>
                    <IoIosArrowDown className={`absolute top-1/2 right-5 -translate-y-1/2 transition-transform  ${routeOpen ? '' : '-rotate-90'}`}/>
                    <img src={isRequired} alt="" className='absolute top-0 left-0'/>
                    <div className={`w-full`}>
                        { value?.data.route_id ? 
                            <div key={value?.route.id} className='w-full relative flex justify-center gap-10'>
                                <Typography variant="small" className="font-medium capitalize " >
                                    {value?.route.origin}
                                </Typography>
                                <IoIosArrowRoundForward size={20} className="text-primary " />
                                <Typography variant="small" className="font-medium capitalize " >
                                    {value?.route.destination}
                                </Typography>
                            </div> :   
                            <Typography variant="small" className="font-medium capitalize text-center" >
                                No Route Chosen
                            </Typography>
                        }
                    </div>
                </div>
            </div>
            <div className={`overflow-hidden transition-all duration-300 ${routeOpen ? 'auto' : 'h-0'}`}>
                <div className='mt-3 flex gap-3'>
                {origins.map((origin) => (
                    <Button 
                        key={origin.name}
                        variant="plain"
                        type="button"
                        className={`border-neutral-300 w-24 h-11 transition-colors duration-300 hover:shadow-md ${isSelected(routeOrigin || value?.route?.origin ,origin.name)}` }
                        onClick={() => setRouteOrigin(origin.name)}>
                    {origin.name}</Button>
                ))}
                </div>
                {routeOpen && 
                    (routes.filter((route: any) => route.transportation_type === routeType && route.origin === routeOrigin).length === 0 ? (
                        <div className='mt-3 text-sm text-center border py-3 rounded-md'>No Routes Available</div>
                    ) : (
                    routes
                    .filter((route: any) => route.transportation_type === routeType && route.origin === routeOrigin)
                    .map((route: any) => (
                        <Typography
                            variant="label"
                            key={route?.id}
                            className={`w-full hover:shadow-md border border-neutral-300 h-12 px-5 mt-3 rounded-md cursor-pointer flex items-center gap-10 animate-appear transition-colors duration-300 ${isSelected(route?.id, firstStepInitData?.id || value?.route?.id)}`}>
                            <input
                                type="radio"
                                name="route"
                                value={route.id}
                                className="hidden"
                                onChange={handleOnRouteChoose}
                            />
                            <Typography
                                variant="info"
                                className="relative uppercase font-medium tracking-wide w-full justify-between px-10 flex items-center gap-x-3">
                                {route?.origin}
                                <IoIosArrowRoundForward
                                    size={20}
                                    className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2"
                                />
                                {route?.destination}
                            </Typography>
                        </Typography>
                    ))
                ))}

            </div>
        </div>
    </React.Fragment>
  )
}
