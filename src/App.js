import './App.css';
import Header from './components/header'
import Footer from './components/footer';
import Content from './components/content';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter>
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
      <Route path='/' element={<Content></Content>}></Route>

      <Route path='/create' element={<Header></Header>}></Route>

      <Route path='/read' element={<Footer></Footer>}></Route>


      </Routes>
      {/*<Header></Header>
     <h1>Hello World!</h1>
     <Content></Content>
  <Footer></Footer>*/}
    </div>
    </BrowserRouter>
  );
}

export default App;
