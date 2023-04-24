import {Link, Outlet} from 'react-router-dom'
import React, { useState } from 'react' //useEffect
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// 登入
// import { useAuth, useUserName } from "../utils/Context"
// import { checkLogIn } from '../utils/todoAPI'
// import { showToast } from '../utils/sweetalert'

function Layout(){
  // 登入
  // let navigate = useNavigate()
  // const { token, setToken } = useAuth()
  // const { userName } = useUserName()
  // useEffect(() =>{
  //   checkLogIn(token).catch(err => {
  //     console.log(err)
  //     showToast('Please Login again', 'warning')
  //     navigate('/login', {replace: true})
  //   })
  // }, [navigate, token])

  // const logOut = () => {
  //   setToken(null)
  //   showToast('Have been logout', 'sucess')
  // }

  // 事件點擊
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  }

    return(
      <>
      <div>
        {/* navbar */}
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container">
            <Link classNameName="navbar-brand" to="/" title="回首頁">
              <FontAwesomeIcon icon="fa-solid fa-mug-saucer" color="white" size="2x" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation" onClick={toggleExpanded}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={"collapse navbar-collapse " + (isExpanded ? "show" : "")} id="navbarText">
              <ul className="navbar-nav mb-2 mb-lg-0 ms-auto me-2">
                <li className="nav-item">
                  {/* <a className="nav-link active" aria-current="page text-white"> */}
                    <Link to="/about" className="nav-link active" aria-current="page text-white" onClick={toggleExpanded}>關於</Link>
                </li>
                <li className="nav-item">
                  <Link to="/introduction" className="nav-link" onClick={toggleExpanded}>介紹</Link>
                </li>
                <li className="nav-item">
                <Link to="/login" className="nav-link" onClick={toggleExpanded}>ToDOList</Link>
                </li>
              </ul>
              {/* <Link to="/login">
              <button type="button" className="btn btn-primary text-white" onClick={toggleExpanded}><span>{ userName}</span></button> 
              </Link> */}
  
            </div>
          </div>
        </nav>
  
            {/* 內容 */}
            <main>
                <Outlet/>
            </main>
  
        {/* </header> */}
        
        {/* footer */}
        <footer className="bg-dark py-2 text-white" >
          <div className="container" id='footer'>
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
              <p>Coffee@2023</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <FontAwesomeIcon icon="fa-brands fa-facebook" color="white" size="2x" /><p>&emsp;</p>
              <FontAwesomeIcon icon="fa-brands fa-instagram" color="white" size="2x" /><p>&emsp;</p>
              <FontAwesomeIcon icon="fa-brands fa-youtube" color="white" size="2x" />
            </div>
          </div>
        </footer>

        {/* 隨年更改 */}
        {/* {useEffect(() => {
                let today = new Date();
                let year = today.getFullYear();
                document.getElementById("footer").innerHTML = '<p>Coffee ©' + year;
              }, [])} */}
  
      </div>
      </>
    )
  }

  export default Layout;