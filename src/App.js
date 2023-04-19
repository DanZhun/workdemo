
import { Helmet } from 'react-helmet';
import './stylesheets/all.css';
import {Routes, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Component
import About from './component/about';
import NotFount from './component/Notfound';
import Layout from './pages/Layout';
import Home from './component/Home';
// import Login from './pages/Login';
// import SignUp from './component/Register';


library.add(fab, fas, far);

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
            {/* <Route path='login' element={<Login/>}/> */}
            {/* <Route path='sigup' element={<SignUp/>}/> */}
          </Route>
          {/* 404 轉址錯誤 */}
            <Route path='*' element={<NotFount/>}/> 
        </Routes>
        
      </switch>
    
    </div>


  );
}

export default App;
