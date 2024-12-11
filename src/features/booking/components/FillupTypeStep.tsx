import { mock_shipment_type, mock_discount, mock_weights } from '../../../mock/Data'
import Typography from '../../../components/ui/Typography'
import React from 'react'
import { useMultiForm } from '../../../context/MultiStepperProvider'
import { isSelected } from '../../../utils/MultiForm'
import LabeledInputText from '../../../components/ui/LabeledInputText'
import { SelectOption } from '../../../components/ui/SelectOption'
import Button from '../../../components/ui/Button'
export const FillupTypeStep = ({handleInputChange} : any) => {
    const { value, setValue } = useMultiForm()
    const [typeInitData, setTypeInitData] = React.useState<{id:number, name:string}>()
    const [additional, setAdditional] = React.useState<boolean>(false)
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
    const handleWeight = (event : any, ) => {
        const [preSelectWeight] = mock_weights
        .filter((weight : any) => weight.id == event.target.value)
        setValue((prev : any) => ({
            ...prev, 
            data:{ ...prev?.data, weight_id: preSelectWeight?.id},
            weight: preSelectWeight?.name
        }))
    };
    const handleChange = (event : any, ) => {
        const [preSelectDiscount] = mock_discount
        .filter((discount : any) => discount.id == event.target.value)
        setValue((prev : any) => ({
            ...prev, 
            data:{ ...prev?.data, discount_id: preSelectDiscount?.id},
            discount: preSelectDiscount?.name
        }))
    };
    
  return (
    <div className="w-full mt-2 p-10borderrounded-lg">
        <div className='flex w-96 gap-x-5 justify-between'>
            { mock_shipment_type.map((type : any) =>
                <label
                key={type?.id}
                className={`relative w-full border border-neutral-300 overflow-hidden h-11  rounded-lg cursor-pointer flex items-center gap-10 animate-appear transition-colors duration-300 ${isSelected(value?.data?.type_id || typeInitData?.id, type?.id )}`}>
                    <input
                    type="radio"
                    name="shipment_type"
                    value={type.id}
                    className="hidden"
                    onChange={handleOnTypeChoose}
                    />
                    <Typography variant="small" className={`!font-medium capitalize tracking-wide w-full text-center`}>
                        {type?.name} 
                    </Typography>
                </label>
            )}
        </div>
        {value?.data.type_id === 1 && <div className='mt-10 gap-x-5 flex '>
            <SelectOption isRequired={true} className="w-full" label='Discount' data={mock_discount} text={value?.discount}  handleChange={handleChange} name='discount_id'/>
            <LabeledInputText isRequired={true} placeholder='1' value={value?.data?.passenger_quantity || ''} className="w-full" name="passenger_quantity" label="Boarding Count" type="number" onChange={(e) => handleInputChange(e,'passenger_quantity')} />
            <Button variant='plain' size='custom' className={`text-xs w-1/4 py-0 px-4 h-11 place-self-end -translate-y-1 ${isSelected(value.data.additional, true)}`} 
                onClick={() => {
                    const newAdditional = !additional
                    setAdditional(newAdditional); setValue((prev : any) => ({...prev,  data:{ ...prev?.data, additional: newAdditional  } }))
                }}>
                Additional
            </Button>
        </div>}
        {value?.data.type_id === 2 && <div className='mt-10 gap-x-5 flex'>
            <SelectOption isRequired={true} className="w-full" label='Weight' data={mock_weights} text={value?.weight}  handleChange={handleWeight} name='weight_id'/>
            <LabeledInputText isRequired={true} placeholder='Kawasaki Ninja' value={value?.data?.vehicle_type || ''} className="w-full" name="vehicle_type" label="Vehicle Type" type="text" onChange={(e) => handleInputChange(e,'vehicle_type')} />
            <LabeledInputText isRequired={true} placeholder='RGX-GXR-202' value={value?.data?.plate_number || ''} className="w-full" name="plate_number" label="Plate Number" type="text" onChange={(e) => handleInputChange(e,'plate_number')} />
        </div>}
        {value?.data.type_id === 3 && <div className='mt-10 gap-y-5 flex flex-col'>
            <div className="flex gap-x-5 w-full">
                <SelectOption isRequired={true} className="w-full" label='Weight' data={mock_weights} text={value?.weight} handleChange={handleWeight} name='weight_id'/>
                <LabeledInputText isRequired={true} placeholder='Grains' value={value?.data?.item_name || ''} className="w-full" name="item_name" label="Item Name" type="text" onChange={(e) => handleInputChange(e,'item_name')} />
                <LabeledInputText isRequired={true} placeholder='1' value={value?.data?.item_quantity || ''} className="w-full" name="item_quantity" label="Item Quantity" type="number" onChange={(e) => handleInputChange(e,'item_quantity')} />
            </div>
            <LabeledInputText isRequired={true} placeholder='Wheats, rice, barley, oats' value={value?.data?.description || ''} className="w-full" name="description" label="Description" type="text" onChange={(e) => handleInputChange(e,'description')} />
        </div>}
    </div>
  )
}
