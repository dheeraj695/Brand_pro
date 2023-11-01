import React from 'react'

const Header = () => {
  return (
    <>
     <div>
        <nav className='container'>
          <div className='logo'>
              <img src="/Image/brand_logo.png" alt='logo'/>
          </div>
          <ul>
              <li href="#">Menu</li>
              <li href="#">Location</li>
              <li href="#">About</li>
              <li href="#">Contact</li>
          </ul>
          <button>Login</button>
        </nav>
     </div>
       
    </>
  );
}

export default Header