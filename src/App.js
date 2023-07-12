import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BookDetail from "./pages/BookDetail";
import NotFound from './pages/NotFound'

function App() {



  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header/>

        <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
          <Route path="/book/:title" element={<BookDetail/>}/>

          <Route path="*" element={<NotFound/>}/>

        </Routes>

        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
