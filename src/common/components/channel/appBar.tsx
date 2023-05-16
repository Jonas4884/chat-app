import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const AppBar = () => {
    const[user,setUser] = useState();
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>SLACK</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text  className='text-white'>
            Signed in as: <a href=""  className='text-white'>hey</a>
            <img src="https://cdn.onlinewebfonts.com/svg/img_87594.png" alt="" />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;