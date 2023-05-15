import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const AppBar = () => {
    const[user,setUser] = useState();
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" className='text-white'>Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login" className='text-white'>hey</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;