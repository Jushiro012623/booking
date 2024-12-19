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
    console.log(value?.data);
    
    const filterPreSelectData = (dataToFilter : any, filter : React.ChangeEvent<HTMLInputElement>) => {
        return dataToFilter.filter((type : any) => type.id == filter)
    }
    const handleChoosingType = (e : any) => {
        // const [preSelectType] = mock_shipment_type
        // .filter((type : any) => type.id == e.target.value)
        const [filterShipmentType] = filterPreSelectData(mock_shipment_type, e.target.value)
        setValue((prev : any) => ({
            ...prev, 
            data:{ ...prev?.data, type_id: filterShipmentType?.id},
            shipment_type:filterShipmentType?.name
        })) 
        setTypeInitData(( prev : any )=>({...prev, ...filterShipmentType}));
    }
    const handleChoosingWeight = (e : any, ) => {
        // const [preSelectWeight] = mock_weights
        // .filter((weight : any) => weight.id == event.target.value)
        const [selectedWeight] = filterPreSelectData(mock_weights, e.target.value)
        setValue((prev : any) => ({
            ...prev, 
            data:{ ...prev?.data, weight_id: selectedWeight?.id},
            weight: selectedWeight?.name
        }))
    };
    const handleChoosingDiscount = (e : any, ) => {
        const [selectedDiscount] = filterPreSelectData(mock_discount, e.target.value)
        setValue((prev : any) => ({
            ...prev, 
            data:{ ...prev?.data, discount_id: selectedDiscount?.id},
            discount: selectedDiscount?.name
        }))
    };
  return (
    <div className="w-full mt-2 p-10borderrounded-lg">
        <div className='flex w-96 gap-x-5 justify-between'>
            { mock_shipment_type.map((type : any) =><label
                key={type?.id}
                className={`relative w-full border border-neutral-300 overflow-hidden h-11  rounded-lg cursor-pointer flex items-center gap-10 animate-appear transition-colors duration-300 ${isSelected(value?.data?.type_id || typeInitData?.id, type?.id )}`}>
                    <input
                    type="radio"
                    name="shipment_type"
                    value={type.id}
                    className="hidden"
                    onChange={handleChoosingType}
                    />
                    <Typography variant="small" className={`!font-medium capitalize tracking-wide w-full text-center`}>
                        {type?.name} 
                    </Typography>
            </label>)}
        </div>
        {value?.data.type_id === 1 && <div className='mt-10 gap-x-5 flex '>
            <SelectOption isRequired={true} className="w-full" label='Discount' data={mock_discount} text={value?.discount}  handleChange={handleChoosingDiscount} name='discount_id'/>
            <LabeledInputText isRequired={true} placeholder='1' value={value?.data?.passenger_quantity || ''} className="w-full" name="passenger_quantity" label="Boarding Count" type="number" onChange={(e) => handleInputChange(e,'passenger_quantity')} />
            <Button variant='plain' size='custom' className={`text-xs w-1/4 py-0 px-4 h-11 place-self-end ${isSelected(value.data.additional, true)}`} 
                onClick={() => {
                    const newAdditional = !additional
                    setAdditional(newAdditional); setValue((prev : any) => ({...prev,  data:{ ...prev?.data, additional: newAdditional  } }))
                }}>
                Additional
            </Button>
        </div>}
        {value?.data.type_id === 2 && <div className='mt-10 gap-x-5 flex'>
            <SelectOption isRequired={true} className="w-full" label='Weight' data={mock_weights} text={value?.weight}  handleChange={handleChoosingWeight} name='weight_id'/>
            <LabeledInputText isRequired={true} placeholder='Kawasaki Ninja' value={value?.data?.vehicle_type || ''} className="w-full" name="vehicle_type" label="Vehicle Type" type="text" onChange={(e) => handleInputChange(e,'vehicle_type')} />
            <LabeledInputText isRequired={true} placeholder='RGX-GXR-202' value={value?.data?.plate_number || ''} className="w-full" name="plate_number" label="Plate Number" type="text" onChange={(e) => handleInputChange(e,'plate_number')} />
        </div>}
        {value?.data.type_id === 3 && <div className='mt-10 gap-y-5 flex flex-col'>
            <div className="grid grid-cols-5 gap-x-5 gap-y-7 w-full">
                <SelectOption isRequired={true} className="col-span-2" label='Weight' data={mock_weights} text={value?.weight} handleChange={handleChoosingWeight} name='weight_id'/>
                <LabeledInputText isRequired={true} placeholder='Grains' value={value?.data?.item_name || ''} parentClass="col-span-2" name="item_name" label="Item Name" type="text" onChange={(e) => handleInputChange(e,'item_name')} />
                <LabeledInputText isRequired={true} placeholder='1' value={value?.data?.item_quantity || ''} parentClass="col-span-1" name="item_quantity" label="Item Quantity" type="number" onChange={(e) => handleInputChange(e,'item_quantity')} />
                <LabeledInputText isRequired={true} placeholder='Baggage' value={value?.data?.baggage || ''} parentClass="col-span-2" name="baggage" label="Baggage" type="text" onChange={(e) => handleInputChange(e,'baggage')} />
                <LabeledInputText isRequired={true} value={value?.data?.bill_of_landing || ''} parentClass="col-span-2 " className='pt-2.5 uppercase' name="bill_of_landing" label="Bill of Landing" type="file" onChange={(e) => handleInputChange(e,'bill_of_landing')} />
                {/* <input type="file" id="bill_of_landing" name="bill_of_landing" accept="image/png, image/jpeg" className='col-span-2 border text-[10px] flex items-center justify-center pt-4 rounded' /> */}
                <LabeledInputText isRequired={true} placeholder='Wheats, rice, barley, oats' value={value?.data?.description || ''} parentClass="col-span-3" name="description" label="Description" type="text" onChange={(e) => handleInputChange(e,'description')} />
            </div>
        </div>}
    </div>
  )
}
