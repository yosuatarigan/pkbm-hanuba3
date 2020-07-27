import React from 'react';
import Topiwisuda from '../../Media/image/topiwisuda.png';
import Teacher from '../../Media/image/teacher.png';
import Fasilitas from '../../Media/image/fasilitas.png';
import Question from '../../Media/image/question.png';

const Cardfitur = ()=>{
    return(
        <section id="featured-services" class="featured-services">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div class="icon"><img src={Topiwisuda} width="50" height="50"/></div>
              <h4 class="title">Alumni</h4>
              <p class="description">Daftar Alumni PKBM Hanuba</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div class="icon"><img src={Teacher} width="50" height="50"/></div>
              <h4 class="title">Spesial Tutor</h4>
              <p class="description">Guru-guru yang berpengalaman</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div class="icon"><img src={Fasilitas} width="50" height="50"/></div>
              <h4 class="title">Fasilitas</h4>
              <p class="description">Fasilitas PKBM Hanuba</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div class="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div class="icon"><img src={Question} width="50" height="50"/></div>
              <h4 class="title">Informasi</h4>
              <p class="description">Informasi PKBM Hanuba Medan</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    )
}

export default Cardfitur;