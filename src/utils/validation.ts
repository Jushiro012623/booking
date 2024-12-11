export const firstStepValition = (value: any): boolean => {
    const { data } = value || {}; // Destructure data to avoid deep null checks

    const hasRoute = !!data?.route_id;
    const hasPersonalInfo = !!(data?.name && data?.email);
    const hasShipmentType = !!data?.type_id;
    const hasDescription = !!data?.description;
    const hasItemQuantity = !!data?.item_quantity;
    const hasItemName = !!data?.item_name;
    const hasPlateNumber = !!data?.plate_number;
    const hasWeight = !!data?.weight_id;
    const hasVehicleType = !!data?.vehicle_type;
    const hasDiscount = !!data?.discount_id;
    const hasPassengerQuantity = !!data?.passenger_quantity;

    const hasCompletedTypeFillup = () => {
        switch (data?.type_id) {
            case 1: return hasDiscount && hasPassengerQuantity;
            case 2: return hasPlateNumber && hasWeight && hasVehicleType;
            case 3: return hasDescription && hasItemQuantity && hasItemName && hasWeight;
            default: return false;
        }
    };

    return !(hasRoute && hasPersonalInfo && hasShipmentType && hasCompletedTypeFillup());
};


export  const secondStepValidation = (value : any) : boolean => {
    return value?.data?.schedule_id
}