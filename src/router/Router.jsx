import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthRouter from './AuthRouter'
import PublicRouter from './PublicRouter'

const Router = () => {
    return (
        <Routes>
            {/* <AuthRouter />  */}
            <Route path='/auth' element={<AuthRouter />} />
            <Route path='*' element={<PublicRouter />} />
        </Routes>
    )
}

export default Router;