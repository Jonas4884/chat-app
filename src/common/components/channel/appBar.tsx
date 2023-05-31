import { authProvider } from '@/providers';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { ToastContainer } from 'react-toastify';
type userNameType = {
  name :string
}
const AppBar = ({name}: userNameType) => {
    
    const redirect = useRouter();
    const logOut = async ()=>{
      authProvider.signOut();
     redirect.push("/login")
    }
  return (
    <>
    <div className='my-4'>
    <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Sleek</a>
    <button type="button" className="btn btn-light">
      <img src="https://img.freepik.com/free-icon/logout_318-521974.jpg" width={"30px"} alt="" />
    </button>
  </div>
</nav>

    </div>
    
  </>
  );
}

export default AppBar;