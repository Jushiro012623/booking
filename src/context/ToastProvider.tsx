import React from 'react'


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
    <Toast.Provider value={contextValue}>{children}</Toast.Provider>
  )
}
export default ToastProvider 
export const useToast = (): Toast => {
    const context = React.useContext(Toast);
    if (!context) {
      throw new Error('useAuthProvider must be used within an AuthenticationProvider');
    }
    return context;
}
