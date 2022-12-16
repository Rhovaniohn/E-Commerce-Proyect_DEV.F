import { NavLink } from 'react-router-dom'

export default function Header () {
  return (
    <menu className='d-flex justify-content-center'>
      <NavLink className='nav-link mx-4' to='/'>
        Home
      </NavLink>
      <NavLink className='nav-link mx-4' to='/allitems'>
        All Items
      </NavLink>
      <NavLink className='nav-link mx-4' to='/getitem'>
        Item
      </NavLink>
      <NavLink className='nav-link mx-4' to='/login'>
        Log In
      </NavLink>
      <NavLink className='nav-link mx-4' to='/cart'>
        My Bag
      </NavLink>
    </menu>
  )
}
