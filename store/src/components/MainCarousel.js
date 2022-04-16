import React from 'react';
import useScript from "../useScript";

const MainCarousel = () => {
  useScript(process.env.PUBLIC_URL + 'js/main.js');

  return (
    <section className="home section image-slider" id="home">
      <div className="home-slider text-center">
        <div className="swiper-wrapper">
          <div className="swiper-slide" style={{backgroundImage: `url(https://theintercept.imgix.net/wp-uploads/sites/1/2022/02/GettyImages-1238761966-ukraine-foreign-policy-US.jpg?auto=compress%2Cformat&q=90&fit=crop&w=2000&h=1000)`}} >
            <h1>Be brave<span className="hglight"/></h1>
            <h2 className="home-slider-title-main">almost there...</h2>
            <div className="home-buttons text-center"><a href="#products" className="btn btn-lg  btn-primary">products</a></div>
            <a className="arrow bounce text-center" href="#about"> <span className="ti-mouse"/> <span
            className="ti-angle-double-down"/> </a>
          </div>

          <div className="swiper-slide" style={{backgroundImage: `url(https://www.aljazeera.com/wp-content/uploads/2022/02/2021-12-16T132004Z_1871629321_RC2KFR932GEC_RTRMADP_3_UKRAINE-CITYSCAPE.jpg?resize=770%2C513)`}} >
            <h1>Sneaky <span className="hglight">Support</span></h1>
            <h2 className="home-slider-title-main">yes for life in peace</h2>
            <div className="home-buttons text-center"><a href="#products" className="btn btn-lg  btn-primary">products</a></div>
            <a className="arrow bounce text-center" href="#about"> <span className="ti-mouse"/> <span
              className="ti-angle-double-down"/> </a>
          </div>
        </div>
        <div className="home-pagination"/>
        <div className="home-slider-next right-arrow-negative"><span className="ti-arrow-right"/></div>
        <div className="home-slider-prev left-arrow-negative"><span className="ti-arrow-left"/></div>
      </div>
    </section>
  );
};

export default MainCarousel;