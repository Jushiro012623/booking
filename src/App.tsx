import React from 'react'
import { RouterProvider } from 'react-router-dom'
import MainRouter from './routes/MainRouter'
import AuthenticationProvider from './context/AuthenticationProvider'
import MultiStepperProvider from './context/MultiStepperProvider'

export default function App() {
  return (
    <React.Fragment>
        <AuthenticationProvider>
            <MultiStepperProvider>
                <RouterProvider router={MainRouter}/>
            </MultiStepperProvider>
        </AuthenticationProvider>
    </React.Fragment>
  )
}
