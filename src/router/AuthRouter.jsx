import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from '../views/auth/Auth'
 
const AuthRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/*' element={<Auth />} />
        </Routes>
    </>
  )
}
 
export default AuthRouter