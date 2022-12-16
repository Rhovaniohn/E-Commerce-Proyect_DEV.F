import { Header }  from './Header'

export default function Layout ({ children }) {
  return (
    <>
      <Header />
      {children}
      <footer>
        <p className='text-center'>Footer</p>
      </footer>
    </>
  )
}
