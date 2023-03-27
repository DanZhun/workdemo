
function Home(){
    return(
      <>
        <section class="container mt-6">
          {/* 1 */}
        <div class="row justify-content-center">
              <div class="col-md-5">
                  <img class="height-s5 w-100 objec-fit-cover" src="https://mixkit.imgix.net/art/preview/mixkit-girl-holding-takeaway-coffee-in-city-cafe-541-original-large.png?q=80&auto=format%2Ccompress"/>
              </div>
              <div class="col-md-5 d-flex align-items-center">
                  <div>
                      <h1><b>咖啡の質感生活</b></h1><br/>
                      <h3><b>生活就像咖啡，<br/><br/>自信如同沸騰的熱水，<br/><br/>兩者融合就能香濃四溢。</b></h3>
                  </div>
              </div>
          </div>
          {/* 2 */}
          <div class="row justify-content-center mt-4 flex-row-reverse">
              <div class="col-md-5">
                  <img class="height-s5 w-100 objec-fit-cover" src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress"/>
              </div>
              <div class="col-md-5 d-flex align-items-center">
                  <div>
                      <h3><b>
                        我希望你的一天從愛、<br/><br/>幸福和一杯好咖啡開始。<br/><br/>度過美好的一天。</b></h3>
                  </div>
              </div>
          </div>
        </section>
  
        <section class="py-5 mt-6" style={{
          backgroundImage:'url("https://images.unsplash.com/photo-1618105965240-9aa565e73a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80")', 
          backgroundSize:'cover', 
          backgroundPosition:'center',
          opacity:'0.5',
        }}>
  
          <div class="container">
              <div class="row justify-content-center">
                  <div class="center">
                      <img src="myproject/src/img/coffeimg.png" style={{width: '200px'}} class="img-fluid" alt=""/>
                  </div>
              </div>
          </div>
        </section>
  
        <section class="container mt-3">
          <div class="row g-3">
            {/* card1 */}
            <div class="col-md-4">
              <div class="card">
              <img src="https://i.imgur.com/heMeJaH.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              </div>
            </div>
            {/* card2 */}
            <div class="col-md-4">
              <div class="card">
              <img src="https://i.imgur.com/irBziKz.jpg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
              </div>
            </div>
            {/* card3 */}
            <div class="col-md-4">
              <div class="card">
                <img src="https://i.imgur.com/RDY8I9c.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="py-5 mt-6" style={{
          backgroundImage:'url("...")', 
          backgroundSize:'cover', 
          backgroundPosition:'center',
          opacity:'0.5',
        }}/>
        
        </>
  
    )
  }

  export default Home;