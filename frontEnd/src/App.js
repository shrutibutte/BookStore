import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import Book from "./components/pages/Book";
import AddBook from "./components/pages/AddBook";
import Path from "./components/pages/Path";
import Home from './components/pages/home';
import Footer from './components/pages/Footer';
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UpdateBook from "./components/pages/UpdateBook";

function App() {
  return (
    <div className="App bg-dark" style={{height:"100%",width:"100%"}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/book" element={<Book />} />
          <Route path="/addbook" element={<AddBook />} />
          <Route path="/path" element={<Path />} />
          <Route path="/update/:id" element={<UpdateBook />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
