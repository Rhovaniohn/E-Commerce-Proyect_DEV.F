import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { toast } from 'react-toastify';

import '@/assets/css/signinform.css'
import signin from '../assets/pngs/signin.png'
import useForm from '../hooks/useForm'
import { loginUserService } from '../services/useServices'
// import { loginUserService } from '@/services/fakeUserServices'

import { AuthContext } from '../context/AuthContext'

const Login = () => {

  const { loginUser } = useContext(AuthContext)
  // Redirigir programaticamente con un hook
  const navigate = useNavigate()
  const error = ''

  const sendData = async (data) => {
    //console.log(data)
    try {
      const result = await loginUserService(data)
      if (result.status === 200) {
        const token = result.data.token
        loginUser(token)
        navigate('/userpanel')
      }
    } catch (error) {
      console.log('Ocurrio un error en Login: ' + error.message)
      toast.error('Ocurrio un error en Login: ' + error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Log in</title>
      </Helmet>
      <div className='container'>
        <div className='card '>
          <main className='form-signin w-100 m-auto'>
            <form onSubmit={handleSubmit}>
              <img className='center mb-4' src={signin} alt='' width='70' height='70' />
                <h1 className='text-center h3 mb-3 '>Welcome</h1>

                  <div className='form-floating'>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      placeholder='name@example.com'
                      name='email'
                      value={input.email}
                      onChange={handleInputChange}
                    />
                    <label htmlFor='email'>Email address</label>
                  </div>
                  <div className='form-floating'>
                    <input
                      type='password'
                      className='form-control'
                      id='password'
                      placeholder='Password'
                      name='password'
                      value={input.password}
                      onChange={handleInputChange}
                    />
                    <label htmlFor='password'>Password</label>
                  </div>

              <button className='w-100 btn btn-lg btn-outline-primary' type='submit'>Sign in</button>
              <br></br>
              <p className='my-1 text-center text-muted'> or </p>
              <a href='./signup' className='my-1 w-100 btn btn-lg btn-outline-success' role="button">Create new account</a>
              <p className='mt-5 mb-3 text-muted'>© 2022</p>
            </form>
          </main>
        </div> 
      </div>
      
    </>
    
    
  )
}

export default Login