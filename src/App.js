import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './compontents/layout/Footer';
import Header from './compontents/layout/Header';
import Ex1 from './compontents/Ex1';
import Ex2 from './compontents/Ex2';
import Ex3 from './compontents/Ex3';
import Ex4 from './compontents/Ex4';
import Ex5 from './compontents/Ex5';
import Ex6 from './compontents/Ex6';
import Ex7 from './compontents/Ex7Sub';
import Ex8 from './compontents/Ex8';
import Ex9 from './compontents/Ex9';
import Pnf from './compontents/Pnf';
import Navbar from './compontents/Navbar';


function App() {
  return (
   <BrowserRouter>
   <Header/>
   <Navbar />
      <Routes>
        <Route path= {`/`}    element={<Ex1/>}/>
        <Route path= {`/ex1`} element={<Ex1/>}/>
        <Route path= {`/ex2`} element={<Ex2/>}/>
        <Route path= {`/ex3`} element={<Ex3/>}/>
        <Route path= {`/ex4`} element={<Ex4/>}/>
        <Route path= {`/ex5`} element={<Ex5/>}/>
        <Route path= {`/ex6`} element={<Ex6/>}/>
        <Route path= {`/ex7`} element={<Ex7/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
