import {Link} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function about(){
    return(
        <>
        <div style={{
          backgroundImage:'url("https://images.unsplash.com/photo-1511667282954-8957078364a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80")',
          backgroundSize: 'cover',
          backgroundPosition:'center',
          
        }}>
          <section className='container '>
          <div className="col-md-5">
                </div>
                <div className="col-md-5 d-flex align-items-center text-white">
                    <div style={{
                      fontFamily: 'Chivo Mono',
                    }}> 
                        <br/><h1>Welcome to Coffe word.</h1>
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
                <a href="#" className="btn btn-primary">認識更多</a>
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
                <a href="#" className="btn btn-primary">認識更多</a>
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
                  <a href="#" className="btn btn-primary">認識更多</a>
                </div>
              </div>
            </div>
          </div>
        </section>

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
        </div>

        </>
    )
}

export default about;