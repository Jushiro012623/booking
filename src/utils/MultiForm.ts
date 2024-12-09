
export const isSelected = (currentValue : string | number | boolean, comparedValue : string | number | boolean): string => {
    const isTrue : boolean = currentValue === comparedValue;
    return isTrue ? '!bg-cerulean-blue-100 border-cerulean-blue-100 border-2 border-slate-400' : '';
}