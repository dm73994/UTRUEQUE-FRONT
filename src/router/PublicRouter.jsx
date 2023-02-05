import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/App/Home/Home'
import Profile from '../views/App/Profile/Profile'
import Transfer from '../views/App/Transfer/Transfer'
import History from '../views/App/History/History'
import Settings from '../views/App/Settings/Settings'

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/home'} element={<Home />} />
        <Route path={'/*'} element={<Home />} />
        <Route path={'/transfer'} element={<Transfer />} />
        <Route path={'/history'} element={<History />} />
        <Route path={'/settings'} element={<Settings />} />
        {/* <Route path={'/logout'} element={<Home />} /> */}
      </Routes>
    </>
  )
}

export default PublicRouter