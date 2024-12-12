import React from 'react'
import LabeledInputText from '../components/ui/LabeledInputText'
import Button from '../components/ui/Button';
import Typography from '../components/ui/Typography';
import { FaReact } from "react-icons/fa";
import useDocumentTitle from '../hooks/useDocumentTitle';
import { Link, Navigate } from 'react-router-dom';
import { cred } from '../mock/Credentials';
import { useAuthProvider } from '../context/AuthenticationProvider';
import { BiLoaderAlt } from "react-icons/bi";
import { useToast } from '../context/ToastProvider';
export const Login = () => {
    useDocumentTitle('Booking Process | Login')
    const {login, token} = useAuthProvider()
    const {setToast, setToastInfo} = useToast()
    const [input, setInput] = React.useState<any>({});
    const [loading, setLoading] = React.useState<boolean>(false);
    const handleChange = (field : string, value : string) => {
        setInput((prev : any) => ({ ...prev, [field]: value }));
    };
    const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            setLoading(true);
            if (!input.email || !input.password) {
                throw new Error('All fields are required');
            }
            const user = cred.find((user) => user.email === input.email && user.password === input.password);
            if (user) {
                const response = 
                {
                    user : user,
                    access_token: 'sampleasdasdas1231231231231'
                }
                login(response);
                setToastInfo({ title: 'success', message: 'Login successful' });
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (e : any) {
            setToastInfo({ title: 'error', message: e.message });
        } finally {
            setToast(true);
            setLoading(false);
        }
    };
    if (token) {
        return <Navigate to="/" />;
    }
  return (
    <React.Fragment>
        <div className='flex'>
            <div className='w-[750px] h-screen border place-content-center'>
                <div className='flex items-center justify-center gap-2'>
                    <FaReact size={30} className='text-cerulean-blue-400'/>
                    <Typography variant="h3" className='font-bold !text-slate-blue-400'>React + Vite</Typography>
                </div>
                <form onSubmit={handleLoginSubmit} className='flex flex-col mt-12 mx-20'>
                    <LabeledInputText 
                        name='email'
                        label='Email Address'
                        placeholder='jonoh.nombeng'
                        onChange={(e : React.ChangeEvent<HTMLInputElement>) => handleChange('email', e.target.value)}
                    />
                    <LabeledInputText 
                        name='password'
                        type="password"
                        label='Password'
                        placeholder='•••••••••••'
                        parentClass='mt-8'
                        onChange={(e : React.ChangeEvent<HTMLInputElement>) => handleChange('password', e.target.value)}
                    />
                    <Typography variant='small' className='text-right mt-3'>Forgot password?</Typography>
                    <Button type='submit' className='mt-3 place-content-center place-items-center'>{loading ? <BiLoaderAlt className='text-[16px] animate-spin' /> : 'Login'}</Button>
                    <Typography
                    variant="small"
                    className={`text-center mt-6 relative after:absolute  after:w-[38%] after:h-[.5px] after:bg-gray-300 after:left-0 after:top-1/2 after:-translate-y-1/2  before:absolute  before:w-[38%] before:h-[.5px] before:bg-gray-300 before:right-0 before:top-1/2 before:-translate-y-1/2`}>
                    No Account
                    </Typography>
                    <Link
                    className="mt-6 bg-border border text-slate-900 py-3 px-4 text-xs text-center"
                    to={"/register"}>
                    Create Account
                    </Link>
                </form>
            </div>
            <div className='w-full overflow-hidden h-screen'>
                {/* <img src={img} alt="" className='w-full opacity-40' /> */}
            </div>
        </div>
    </React.Fragment>
  )
}
