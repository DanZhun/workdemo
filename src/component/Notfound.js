import {useNavigate} from 'react-router-dom';

function NotFount() {
    let navigate = useNavigate();
    return(
      <>
            <section className="container">
              <h1 className="text-black">404 網址出錯惹~~</h1>

              <div style={{
                height:'1000px',
                backgroundImage:'url("https://mimimewmew.monster/media/posts/2/aBJRwVg.jpg")',
                backgroundSize:'cover',
                backgroundPosition:'center',
              }}>
              <input type="button" value="回首頁" onClick={(e)=>{
                navigate("/")
              }}/>                
              </div>
            </section>
            

      </>
    )
  }

  export default NotFount;