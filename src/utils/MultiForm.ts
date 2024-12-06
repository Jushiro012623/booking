
export const isSelected = (currentValue : string | number, comparedValue : string | number): string => {
    const isTrue : boolean = currentValue === comparedValue;
    return isTrue ? '!bg-cerulean-blue-100 border-cerulean-blue-100' : '';
}