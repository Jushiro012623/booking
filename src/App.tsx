import React from 'react'
import { RouterProvider } from 'react-router-dom'
import MainRouter from './routes/MainRouter'
import AuthenticationProvider from './context/AuthenticationProvider'
import MultiStepperProvider from './context/MultiStepperProvider'
import ToastProvider from './context/ToastProvider'

export default function App() {
  return (
    <React.Fragment>
        <ToastProvider>
            <AuthenticationProvider>
                    <MultiStepperProvider>
                        <RouterProvider router={MainRouter}/>
                    </MultiStepperProvider>
            </AuthenticationProvider>
        </ToastProvider>
    </React.Fragment>
  )
}
