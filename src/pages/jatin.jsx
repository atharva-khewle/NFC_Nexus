import React from 'react'
import { useNavigate } from 'react-router-dom'


export const Navbar = () => {
    // const nav = useNavigate()

  return (
    <>


    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">EcoDrive</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href='/home' >Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/map">Map</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/aboutus">About Us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/help">Help</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" ><div className="space inline-block" style={{width:"69vw"}}></div></a>
      </li>
      
    </ul>



    <form className="form-inline my-2 my-lg-0 flex flex-row-reverse">
    <button type="button" class="btn btn-outline-light">Login/Signup</button>
    <svg xmlns="http://www.w3.org/2000/svg" className='mx-3' height="1em" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
    </form>
  </div>
</nav>
    </>

  )
}
