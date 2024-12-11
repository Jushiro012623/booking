import React from 'react'
import Typography from './Typography'
import { IoClose } from "react-icons/io5";
import { IoMdCloseCircle, IoMdCheckmarkCircle } from "react-icons/io";
import { useToast } from '../../context/ToastProvider';

const colors = {
    error: {bg: 'bg-red-400', text: "text-red-400"},
    success: {bg: 'bg-teal-400', text: "text-teal-400"},
}
const variants = {
    error : { title: 'error', icon: <IoMdCloseCircle className={`${colors.error.text} text-3xl`} />, color: colors.error},
    success : { title: 'success', icon: <IoMdCheckmarkCircle  className={`${colors.success.text} text-3xl`} />, color: colors.success}
}

interface ToastProps {
    variant: keyof typeof variants;
    message: string;
}
export const Toast = ({variant, message} : ToastProps) => {
    const {toast,setToast} = useToast()
    React.useEffect(() => {
        if (toast) {
            const timeout = setTimeout(() => {
              setToast(false);
            }, 3000);
            return () => clearTimeout(timeout);
          }
    },[toast, setToast])
  return (
    <React.Fragment>
    <div className={`fixed min-w-72 top-20 right-0 shadow-lg h-16 rounded-md overflow-hidden animate-toastPop`}>
        <div className='relative w-full h-full flex items-center gap-2 pl-5 bg-white'>
            <span className={`absolute block h-full w-2 left-0 top-0 ${variants[variant]?.color.bg}` }></span>
            {variants[variant]?.icon}
            <div>
                <Typography className="text-[13px] font-bold capitalize" >{variants[variant]?.title}</Typography>
                <Typography variant='info' color={variant == 'error' ? 'danger' : 'secondary'} >{message}</Typography>
            </div>
            <IoClose className='absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer' onClick={()=>setToast(false)}/>
            <span className={`absolute block w-full h-[2px] left-0 bottom-0 animate-toastLoader ${variants[variant]?.color.bg}` }></span>
        </div>
    </div>
    </React.Fragment>
  )
}
