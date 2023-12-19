import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomeComponent from './components/index';
import View from './components/view';
import AddGame from './components/addgame';
import EditGame from './components/editgame';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Wish Cart</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="View">View</Nav.Link>
            <Nav.Link href="Addgame">AddGame</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br/>

      
        <Routes>
          <Route path="/" element={<WelcomeComponent />} />
          <Route path="View" element={<View></View>}></Route>
          <Route path="Addgame" element={<AddGame></AddGame>}></Route>
          <Route path="edit/:id" element={<EditGame/>}></Route>
        </Routes>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
