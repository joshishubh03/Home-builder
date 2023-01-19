import React from 'react'
import "./css/sidebar.scss";
import Post from './Post';
const Nav = () => {
  return (
    <div >
  <aside className="sidebarCode">
    <nav className="navBarCode">
      <ul>
        <li className="active"><a href="#">Welcome</a></li>
        <li><a href="#">Who We Are</a></li>
        <li><a href="#">What We Do</a></li>
        <li><a href="#">Get In Touch</a></li>
      </ul>
    </nav>
  </aside>
{/* </main> */}


      {/* <nav className="menu flex flex-col items-center w-40 h-full overflow-hidden text-gray-700 bg-gray-100 rounded"  tabindex="0" >
        <div className="smartphone-menu-trigger"></div>
      <header className="avatar">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/kolage/128.jpg" />
        <h2>John D.</h2>
      </header>
        <ul>
        <li tabindex="0" className="icon-dashboard"><span>Dashboard</span></li>
        <li tabindex="0" className="icon-customers"><span>Customers</span></li>
        <li tabindex="0" className="icon-users"><span>Users</span></li>
        <li tabindex="0" className="icon-settings"><span>Settings</span></li>
      </ul>
    </nav> */}
<Post></Post>
    </div>
  )
}

export default Nav
