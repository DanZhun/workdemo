import {Link} from 'react-router-dom';

function about(){
    return(
        <>
        <section class="container mt-6">
          <div class="col-md-5">
                </div>
                <div class="col-md-5 d-flex align-items-center">
                    <div>
                        <h2>About </h2>
                        <Link to='/'>Home</Link>
                    </div>
                </div>
      </section>
        </>
    )
}

export default about;