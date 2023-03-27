import {Link, Outlet} from 'react-router-dom';
import React, { useEffect } from 'react';

function Layout(){
    return(
      <>
      <div>
        {/* navbar */}
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
          <div class="container">
            <a class="navbar-brand" href="#">Coffee</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarText">
              <ul class="navbar-nav mb-2 mb-lg-0 ms-auto me-2">
                <li class="nav-item">
                  {/* <a class="nav-link active" aria-current="page text-white"> */}
                    <Link to="/about" class="nav-link active" aria-current="page text-white">關於</Link>
                </li>
                <li class="nav-item">
                  <Link to="/introduction" class="nav-link">介紹</Link>
                </li>
                <li class="nav-item">
                <Link to="/menu" class="nav-link">菜單</Link>
                </li>
              </ul>
              <button type="button" class="btn btn-primary text-white">登入</button>
  
            </div>
          </div>
        </nav>
        {/* header */}
        <header class="header" style={{
          height:'500px', 
          backgroundImage:'url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80")', 
          backgroundSize:'cover', 
          backgroundPosition:'center'}}>
          <div class="container d-flex align-items-center h-100">
               <div>
                  <h1 class="text-white">咖啡世界<br/>ウェルカムトゥコーヒー</h1>
                   <button class="btn btn-primary btn-lg text-white" type="button">認識更多</button>
              </div>
          </div>
  
            {/* 內容 */}
            <main>
                <Outlet/>
            </main>
  
        </header>
        
        {/* footer */}
        {useEffect(() => {
          let today = new Date();
          let year = today.getFullYear();
          document.getElementById("footer").innerHTML = '<p>Coffee ©' + year;
        }, [])}
  
        <footer className="bg-dark mt-1 py-2 text-white" style={{ position: "fixed", bottom: "0", width: "100%",height:"60px" }}>
          <div className="container" id='footer'>
          </div>
        </footer>
  
  
  
      </div>
      </>
    )
  }

  export default Layout;