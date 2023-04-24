import { Link } from "react-router-dom"

function NotFount() {

    return(
      <>
            <section className="container">
              <div style={{
                height:'1000px',
                backgroundImage:'url("https://mimimewmew.monster/media/posts/2/aBJRwVg.jpg")',
                backgroundSize:'cover',
                backgroundPosition:'center',
              }}>
              {/* <input type="button" value="回首頁" onClick={(e)=>{
                navigate("/")
              }}/>*/}
              <div id="errorPage" className="w-11/12 sm:w-96 py-10 mx-auto font-bold text-center">
                {/* <img className="w-full mb-2 opacity-75" src={Logo} alt="Logo" /> */}
                <p className="text-orange-300 text-3xl mt-12 mb-8 text-white"><h3>404 page</h3></p>
                <Link to={ '/' } className="duration-300 bg-orange-300 text-cyan-900 hover:bg-orange-400 hover:text-white rounded-lg px-4 py-3">Back To Home</Link>
              </div>
              </div>
            </section>
            

      </>
    )
  }

  export default NotFount;