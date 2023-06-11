import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Content from './pages/content/Content';
import Experience from './pages/experience/Experience';
import Home from './pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
   <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/content' element={<Content/>}/>
        <Route path='/experience' element={<Experience/>}/>
      </Routes>
    <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;
