import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
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
          <Route path="view" element={<View></View>}></Route>
          <Route path="addgame" element={<AddGame></AddGame>}></Route>
          <Route path="edit/:id" element={<EditGame/>}></Route>
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
