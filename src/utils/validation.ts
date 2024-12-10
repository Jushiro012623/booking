export const firstStepValition = (value : any) : any => {
    const returnValue : any = []
    const hasRoute = value?.data.route_id
    const hasName = value?.data?.name
    const hasEmail = value?.data?.email
    const hasPersonalInfo = hasName && hasEmail
    const hasShipmentType = value?.data?.type_id
    const hasDescription = value?.data?.description
    const hasItemQuantity = value?.data?.item_quantity
    const hasItemName = value?.data?.item_name
    const hasPlateNumber = value?.data?.plate_number
    const hasWeight = value?.data?.weight
    const hasVehicleType = value?.data?.vehicle_type
    const hasDiscount = value?.data?.discount_id
    const hasPassengerQuantity = value?.data?.passenger_quantity
    const hasCompletedTypeFillup= () => {
        switch(value?.data?.type_id){
            case 1:
                return hasDiscount &&hasPassengerQuantity
            case 2:
                return  hasPlateNumber && hasWeight && hasVehicleType
            case 3:
                return hasDescription && hasItemQuantity &&  hasItemName &&  hasWeight
            default: 
                return false
        }
    }
    const canProceed = hasRoute && hasPersonalInfo && hasShipmentType && hasCompletedTypeFillup()
    if(!hasName){
        returnValue.inputs = 'Name'
        returnValue.canProceed = false
        return returnValue
        // setIsDisable(true)
    }
    if(canProceed){
        returnValue.inputs = null
        returnValue.canProceed = false
        return returnValue
        // setIsDisable(false)
    }else{
        returnValue.inputs = null
        returnValue.canProceed = true
        return returnValue
        // setIsDisable(true)
    }
}

export  const secondStepValidation = (value : any) : boolean => {
    const hasSelectedSchedule = value?.data?.schedule_id !== null || undefined
    if(hasSelectedSchedule){
        return false
    }else{
        return true
    }
}