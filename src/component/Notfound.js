import {useNavigate} from 'react-router-dom';

function NotFount() {
    let navigate = useNavigate();
    return(
      <>

            <div>
              <h1 class="text-black">404 網址出錯惹~~</h1>
            </div>
            <div style={{
                height:'1000px',
                backgroundImage:'url("https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")',
                backgroundSize:'cover',
                backgroundPosition:'center',
            }}>
            <input type="button" value="回首頁" onClick={(e)=>{
                navigate("/")
            }}/>                
            </div>
            

      </>
    )
  }

  export default NotFount;