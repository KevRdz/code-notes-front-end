import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <>
          <nav>
            Welcome, {user.name}
            <Link to="/add">Add Note</Link>
            <Link to="/">Notes</Link>
            <Link to="" onClick={handleLogout}>LOG OUT</Link>
            <Link to="/changePassword">Change Password</Link>
          </nav>
        </>
      :
        <nav>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>  
        </nav>
      }
    </>
  )
}

export default NavBar
