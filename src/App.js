import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar bg="danger" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Wish Cart</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="view">view</Nav.Link>
          <Nav.Link href="addgame">AddGame</Nav.Link>
        </Nav>
        </Container>  
      </Navbar>

      <br />


      <Routes>
        <Route path="/" element={<WelcomeComponent />} />
        <Route path="view" element={<ViewComponent />} />
        <Route path="addgame" element={<AddGameComponent />} />
        <Route path="edit/:id" element={<EditGameComponent />} />
      </Routes> 
    </div>
  );
}

export default App;
