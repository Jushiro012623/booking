import { mock_shipment_type, mock_discount } from '../../../mock/Data'
import Typography from '../../../components/ui/Typography'
import React from 'react'
import { useMultiForm } from '../../../context/MultiStepperProvider'
import { isSelected } from '../../../utils/MultiForm'
import LabeledInputText from '../../../components/ui/LabeledInputText'
import { SelectOption } from '../../../components/ui/SelectOption'
export const FillupTypeStep = ({handleRouteTypeChange} : any) => {
    const { value, setValue } = useMultiForm()
    const [typeInitData, setTypeInitData] = React.useState<{id:number, name:string}>()
    const handleOnTypeChoose = (e : any) => {
        const [preSelectType] = mock_shipment_type
        .filter((type : any) => type.id == e.target.value)
        setValue((prev : any) => ({
            ...prev, 
            data:{ ...prev?.data, type_id: preSelectType?.id},
            shipment_type:preSelectType?.name
        })) 
        setTypeInitData(( prev : any )=>({...prev, ...preSelectType}));
    }
    console.log(value);
    
    const handleChange = (event : any) => {
        const [preSelectDiscount] = mock_discount
        .filter((discount : any) => discount.id == event.target.value)
        setValue((prev : any) => ({
            ...prev, 
            data:{ ...prev?.data, discount_id: preSelectDiscount?.id},
            discount: preSelectDiscount?.name
        }))
    };
    
  return (
    <div className="w-full mt-4 px-1  p-10borderrounded-lg">
        <div className='flex w-96 gap-x-5 justify-between'>
            { mock_shipment_type.map((type : any) =>
                <label
                key={type?.id}
                className={`relative w-full border border-neutral-300 overflow-hidden h-11  mt-3 rounded-lg cursor-pointer flex items-center gap-10 animate-appear transition-colors duration-300 ${isSelected(value?.data?.type_id || typeInitData?.id, type?.id )}`}>
                    <input
                    type="radio"
                    name="shipment_type"
                    value={type.id}
                    className="hidden"
                    onChange={handleOnTypeChoose}
                    />
                    <Typography variant="small" color="gray" className={`!font-medium capitalize tracking-wide w-full text-center`}>
                        {type?.name} 
                    </Typography>
                </label>
            )}
        </div>
        {value?.data.type_id === 1 && <div className='mt-9 gap-x-5 flex'>
            <SelectOption className="w-full" label='Discount' data={mock_discount} value={value}  handleChange={handleChange} name='discount_id'/>
            <LabeledInputText placeholder='1' value={value?.data?.passenger_quantity || ''} className="w-full" name="passenger_quantity" label="Boarding Count" type="number" onChange={(e) => handleRouteTypeChange(e,'passenger_quantity')} />
        </div>}
        {value?.data.type_id === 2 && <>LOCAL</>}
        {value?.data.type_id === 3 && <>PRIVATE</>}

    </div>
  )
}
