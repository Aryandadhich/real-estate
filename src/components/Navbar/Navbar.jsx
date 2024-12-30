import { useState } from "react";
import "./navbar.scss"
import { Link } from 'react-router-dom';

function Navbar() {
  const [open, setopen] = useState(false);

  const user = true;


  const sidebar = () => {
    setopen(open)
  }
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="logo.png" alt="" />
          <span>RajEstate</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        {user ? (<div className="user">
          <img src="/noavatar.jpg" alt="" />
          <span>Aryan Dadheech</span>
          <Link to="/profile/" className="profile">
            <div className="notification">3</div>
            <span>Profile</span>
          </Link>
        </div>
        ) : (<><a href="/">Sign in</a>
          <a href="/" className="register">Sign up</a>
        </>)}
        <div className="menuIcon">
          {/* giving a function of setstate directy in image otherwise we can create a function and pass it here  */}
          <img src="/menu.png" alt="" onClick={() => setopen(!open)} />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;