import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../components/Layout'
import { Home, AllItems, Login,  Signup, UserPanel, Cart, GetItem} from '@/pages'

import { AuthContext } from '@/context/AuthContext'
import getItem from './../pages/GetItem';

const RoutesIndex = () => {
  const { isAuth } = useContext(AuthContext)

  return (
    <Layout>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/allitems' element={<AllItems />} />
            <Route path='/getitem' element={<GetItem />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/userpanel' element={isAuth ? <UserPanel /> : <Navigate to='/login' replace />} />
        </Routes>
    </Layout>
    
  )
}
export default RoutesIndex