import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import PortfolioHomePage from './Components/mainPortfolio';
import BlogWebsite from './Components/blogWebsite';
import PageNotFound from './Components/pageNotFound';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' index element={<PortfolioHomePage />}></Route>
          <Route path='/blogwebsite' element={<BlogWebsite />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
