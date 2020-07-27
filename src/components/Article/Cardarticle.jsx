import React from 'react';

const Article = ({title,desc,coverurl}) => {
    return (
        <div class="row">
            <div class="col-lg-6" data-aos="zoom-out" data-aos-delay="100">
                <img src={coverurl} width="300em" height="300em" class="img-fluid" alt="Gambar Depan artikel" />
            </div>
            <div class="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
    <h3>{title}</h3>
                <p class="font-italic">
                    {desc} </p>
            </div>
        </div>
    )
}

export default Article;