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
    <div className="" >
    <img src="https://th.bing.com/th/id/R.35580302404100d3b89672aadd7aa0d7?rik=btmccSR9ewgAGQ&pid=ImgRaw&r=0" width={"30px"} className='mx-3 pe-auto' alt="" onClick={()=>{redirect.push("/profile")}}/>
      <img src="https://img.freepik.com/free-icon/logout_318-521974.jpg" width={"30px"} alt="" onClick={logOut} className='mx-4 pe-auto'/>
    </div>
  </div>
</nav>

    </div>
    
  </>
  );
}

export default AppBar;