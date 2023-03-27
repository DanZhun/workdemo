// import logo from './logo.svg';
import { Helmet } from 'react-helmet';
import './stylesheets/all.css';
import {Routes, Route} from 'react-router-dom';
// import React, { useEffect } from 'react';
import About from './component/about';
import NotFount from './component/Notfound';
import Layout from './component/Layout';
import Home from './component/Home';



function App() {
  return (
    <div className="App">
      {/* title-icon */}
      <Helmet>
        <title>A coffee</title>
        <link rel="icon" href="myproject/public/coffee.png" type="image/x-icon" />
      </Helmet>
      
    {/* 路由器設定 */}
      <switch>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
          {/* 404 轉址錯誤 */}
            <Route path='*' element={<NotFount/>}/> 
        </Routes>
        
      </switch>
    
    </div>


  );
}

export default App;
