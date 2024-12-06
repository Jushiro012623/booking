export const firstStepValition = (value : any) : boolean => {
    let error : string  | undefined;
    const name = value?.data?.name
    const email = value?.data?.email
    
    if(name == undefined){
        error = 'Name is Required';
    }
    if(email?.length === 0){
        error = 'Name is Required';
    }
    if(name?.length < 8){
        error = 'Full Name must be at least 8 characters';
    }
    if (email?.length === 0 || email?.length < 15) {
        error = 'Invalid email address';
    }
    if(!email?.endsWith('@gmail.com')){
        error = 'Email address must end with @gmail.com';
    }
    if(!value?.route){
        error = 'Please select a route';
    }
    if(error){
        return true;
    }
    return false;
}