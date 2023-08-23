import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" >
      <div className="container-fluid justify-content-center">
        <ul className="nav justify-content-center">
          <Link className='nav-link' to="/home">
            <li id='home' className="nav-item">Home</li>
          </Link>
          <Link className='nav-link' to="/posts">
            <li id='posts' className="nav-item">Posts</li>
          </Link>
        </ul>
      </div>
    </nav>


  );
}

export default Navbar;