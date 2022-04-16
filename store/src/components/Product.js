import React from 'react';
import useScript from "../useScript";

const Product = ({primaryImg, secondaryImg, title, price, id}) => {
  useScript(process.env.PUBLIC_URL + '/js/vendor/bootstrap.min.js');

  return (
    <li className="swiper-slidess text-center" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <span className="product-list-left pull-left" style={{overflow: "hidden"}}>
                      <a href="#" data-target="#product-01" data-toggle="modal">
                        <img alt="product image" className="product-list-primary-img" src={primaryImg} />
                        <img alt="product image" className="product-list-secondary-img" src={secondaryImg} />
                      </a>
                    </span>

      <a href="#" data-target="#product-01" data-toggle="modal">
									    <span className="product-list-right pull-left" style={{textAlign: "center"}}>
										    <span className="product-list-name h4 black-color">{title}</span>
										    <span className="product-list-price">{price}</span>
									    </span>
      </a>
      <button
        className="btn btn-default add-item" type="button"
        data-image="assets-for-index-2/img/p1.jpg"
        data-name={title}
        data-cost="400.00" data-id={id}>
        add to cart
      </button>
    </li>
  );
};

export default Product;