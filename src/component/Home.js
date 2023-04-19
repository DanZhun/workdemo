import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';



function Home(){
    return(
      <> 
        {/* header */}
        <header className="header" style={{
            height:'500px', 
            backgroundImage:'url("https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80")', 
            backgroundSize:'cover', 
            backgroundPosition:'center'}}>
            <div class="container d-flex align-items-center h-100">
                <div>
                    <h1 class="text-white">咖啡世界<br/>ウェルカムトゥコーヒー</h1>
                    <Link to="/">
                    <button class="btn btn-primary btn-lg text-white" type="button">認識更多</button>
                    </Link>
                </div>
            </div>
       </header>

          {/* 輪播圖 */}
          <div className="container mt-4">
            <Carousel fade variant='dark'>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400?text=First+Slide"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400?text=Second+Slide"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://via.placeholder.com/800x400?text=Third+Slide"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

        <section className="container">          
          {/* 1 */}
        <div className="row justify-content-center mt-4">
              <div className="col-md-5">
                  <img className="height-s5 w-100 objec-fit-cover" src="https://mixkit.imgix.net/art/preview/mixkit-girl-holding-takeaway-coffee-in-city-cafe-541-original-large.png?q=80&auto=format%2Ccompress"/>
              </div>
              <div className="col-md-5 d-flex align-items-center">
                  <div>
                      <h1><b>咖啡の質感生活</b></h1><br/>
                      <h3><b>生活就像咖啡，<br/><br/>自信如同沸騰的熱水，<br/><br/>兩者融合就能香濃四溢。</b></h3>
                  </div>
              </div>
          </div>
          {/* 2 */}
          <div className="row justify-content-center mt-4 flex-row-reverse">
              <div className="col-md-5">
                  <img className="height-s5 w-100 objec-fit-cover" src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress"/>
              </div>
              <div className="col-md-5 d-flex align-items-center">
                  <div>
                      <h3><b>
                        我希望你的一天從愛、<br/><br/>幸福和一杯好咖啡開始。<br/><br/>度過美好的一天。</b></h3>
                  </div>
              </div>
          </div>
        </section>
  
        <section className="py-5 mt-6" style={{
          backgroundImage:'url("https://images.unsplash.com/photo-1618105965240-9aa565e73a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80")', 
          backgroundSize:'cover', 
          backgroundPosition:'center',
          opacity:'0.5',
        }}>
  
          <div className="container">
              <div className="row justify-content-center">
                  <div className="center">
                      <img src="myproject/src/img/coffeimg.png" style={{width: '200px'}} className="img-fluid" alt=""/>
                  </div>
              </div>
          </div>
        </section>
  
        <section className="container mt-3">
          <div className="row g-3">
            {/* card1 */}
            <div className="col-md-4">
              <div className="card">
              <img src="https://i.imgur.com/heMeJaH.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"><b>淺烘培</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">More...</a>
              </div>
              </div>
            </div>
            {/* card2 */}
            <div className="col-md-4">
              <div className="card">
              <img src="https://i.imgur.com/irBziKz.jpg" className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title"><b>中烘培</b></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">More...</a>
              </div>
              </div>
            </div>
            {/* card3 */}
            <div className="col-md-4">
              <div className="card">
                <img src="https://i.imgur.com/RDY8I9c.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title"><b>中深烘培</b></h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" className="btn btn-primary">More...</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-5 mt-6" style={{
          backgroundImage:'url("...")', 
          backgroundSize:'cover', 
          backgroundPosition:'center',
          opacity:'0.5',
        }}/>
        
        </>
  
    )
  }

  export default Home;