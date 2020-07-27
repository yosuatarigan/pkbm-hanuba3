import React from 'react';

const Landing  = ()=>{
    return(
        <section id="hero" class="d-flex align-items-center">
        <div class="container" data-aos="zoom-out" data-aos-delay="100">
          <h1>Welcome to <span>PKBM Hanuba</span>
          </h1>
          <h2>Sekolah untuk mereka semua</h2>
          <div class="d-flex">
            <a href="#artikel" class="btn-get-started scrollto">Read More</a>
            
            {/* <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" class="venobox btn-watch-video" data-vbtype="video" data-autoplay="true"> Watch Video <i class="icofont-play-alt-2"></i></a>
           */}
          </div>
        </div>
      </section>
    )
}

export default Landing;