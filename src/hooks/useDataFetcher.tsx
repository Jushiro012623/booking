import { useAuthProvider } from '../context/AuthenticationProvider';
import api from '../api/api'
import React from 'react'
const useDataFetcher = (route : string | null , params : any | null = null) => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);
    const { logout, token } = useAuthProvider()
    React.useEffect(() => {
        api.get({route, params, token})
        .then((response : any) => {
            response && setData(response.data.data);
        }).catch((error : any) => {
            setError(error)
            if(error?.status == 401){
                logout()                 
            }
        }).finally(() => {
            setLoading(false)
        });
    }, [route])
    return { data, loading, error }
}
export default useDataFetcher
