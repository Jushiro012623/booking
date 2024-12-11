import React from 'react'
import { Toast as Toaster } from '../components/ui/Toast';

interface ToastProvider {
    children: React.ReactNode;
}
interface Toast{
    toast: boolean;
    setToast: (toast: boolean) => void;
    toastInfo: any;
    setToastInfo: (toast: any) => void;
}

export const Toast = React.createContext<Toast | undefined>(undefined);
const ToastProvider = ({children}:ToastProvider) => {
    const [toast, setToast] = React.useState<boolean>(false);
    const [toastInfo, setToastInfo] = React.useState<any>({title: null, message: null});
    const contextValue = { toast, setToast, toastInfo, setToastInfo}

  return (
    <Toast.Provider value={contextValue}>
        <React.Fragment>
            {toast && <Toaster variant={toastInfo?.title} message={toastInfo?.message}/>}
            {children}
        </React.Fragment>
    </Toast.Provider>
  )
}
export default ToastProvider 
export const useToast = (): Toast => {
    const context = React.useContext(Toast);
    if (!context) {
      throw new Error('useToastProvider must be used within an ToastProvider');
    }
    return context;
}
