
export const isSelected = (currentValue : string | number | boolean, comparedValue : string | number | boolean): string => {
    const isTrue : boolean = currentValue === comparedValue;
    return isTrue ? '!bg-cerulean-blue-100 border-cerulean-blue-100 border-2 border-slate-400' : '';
}

export const GENERATE_TRANSACTION_ID = `GT-${Math.random().toString(36).substring(2, 10000000000).toUpperCase()} `
export const formatDate = (dateStr : any, full : boolean = true  ) => {
    const date = new Date(dateStr);
    const options : any = { year: 'numeric', month: 'long', day: '2-digit'};
    const fullDate = date.toLocaleDateString('en-US', options)
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    const year = date.toLocaleDateString('en-US', { year: 'numeric' });
    const month = date.toLocaleDateString('en-US', { month: 'long' });
    const day = date.toLocaleDateString('en-US', { day: '2-digit' });
    
    const formatedDate = {
        weekday: weekday,
        year: year,
        month: month,
        day: day,
    };
    if(full === true){
        return fullDate
    }
    return formatedDate;
};