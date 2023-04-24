
import { Helmet } from 'react-helmet';
import './stylesheets/all.css';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { AuthContext, UserNameContext } from './utils/Context'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// Component
import About from './component/about';
import NotFount from './component/Notfound';
import Layout from './pages/Layout';
import Home from './component/Home';
import { useState } from 'react';
import Login from './component/loginView/Login';
import Register from './component/loginView/Register';
import Main from './pages/Main';
import TodoHome from './pages/TodoHome';
import ProtectedRoute from './utils/ProtectedRoute'

library.add(fab, fas, far);

function App() {
  const [token, setToken] = useState(null)
  const [userName, setUserName] = useState('')
  return (
    <AuthContext.Provider value={{ token, setToken }}>
    <UserNameContext.Provider value={{ userName, setUserName }}>
    <div className="App">
      {/* title-icon */}
      <Helmet>
        <title>A coffee</title>
        <link rel="icon" href="myproject/public/coffee.png" type="image/x-icon" />
      </Helmet>
      
    {/* 路由器設定 */}
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='about' element={<About/>}/>
          </Route>
          <Route>
            <Route path='todoHome' element={<todoHome/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
          </Route>
          <Route element={<ProtectedRoute/>}>
            <Route path="/todolist" element={<Main/>}/>
          </Route>
          {/* 404 轉址錯誤 */}
            <Route path='*' element={<NotFount/>}/> 
        </Routes>
        
    
    </div>
    </UserNameContext.Provider>
    </AuthContext.Provider>

  );
}

export default App;
