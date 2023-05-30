import { authProvider } from '@/providers';
import { useRouter } from 'next/router';
import { useState } from 'react';
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
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>SLACK</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-start text-white">
          <Navbar.Text  className='text-white'>
            Signed in as: <a href=""  className='text-white'>{name}</a>
            <button>
            <img src="https://cdn.onlinewebfonts.com/svg/img_87594.png" alt="" width={50} height={50} color='white'  className='bg-white rounded mx-4 py-2 px-2' onClick={()=>logOut()} />
            </button>   
            
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;