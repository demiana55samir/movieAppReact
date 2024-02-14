import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='mx-5 text-decoration-none px-5 fs-3'>Moviess For Fun </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" mx-5 float-end ">
           <NavLink  to='/' className={ ({isActive,isPending})=>(isActive)?
           'text-danger mx-5 text-decoration-none':'mx-5 text-decoration-none' 
           }>Home</NavLink>
            <NavLink to='/movies' className={ ({isActive,isPending})=>(isActive)?
            'text-danger mx-3 text-decoration-none':'mx-3 text-decoration-none'}>
                Movies</NavLink>
            <NavLink to='/fav' className={ ({isActive,isPending})=>(isActive)?
            'text-danger mx-3 text-decoration-none':'mx-3 text-decoration-none' } >
                Favourites </NavLink>
            <NavLink to='/login'className={ ({isActive,isPending})=>(isActive)?
            'text-danger mx-3 text-decoration-none':'mx-3 text-decoration-none' } >
                Login</NavLink>
            <NavLink to='/registeration' className= { ({isActive,isPending})=>(isActive)?
            'text-danger mx-3 text-decoration-none':'mx-3 text-decoration-none' }>Register</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;