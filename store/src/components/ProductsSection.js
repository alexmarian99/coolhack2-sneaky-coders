import React from 'react';
import useScript from "../useScript";
import Product from "./Product";

const ProductsSection = () => {
  useScript(process.env.PUBLIC_URL + '/js/plugins.js');

  return (
    <>

      <section className="section-min section product " id="products">
        <div className="container overflow-hidden">
          <div className="row">
            <div className="col-md-12">
              <h3 className="section-heading">Products</h3>
            </div>

            <div className="col-md-12">
              <div className="product-list-sliderd">
                <ul className="swiper-wrappers product-list product-list-vertical">
                  <Product primaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/dde4ea78-4547-483c-b94d-ad1deae3d68f-yoda.jpg?width=2560"} secondaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/ce9d795d-e609-43e3-a16c-82f7bc4a94b6-barbie.jpg?width=2560"} title={"Almost new"} price={"$150"} id={1}/>
                  <Product primaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/dde4ea78-4547-483c-b94d-ad1deae3d68f-yoda.jpg?width=2560"} secondaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/ce9d795d-e609-43e3-a16c-82f7bc4a94b6-barbie.jpg?width=2560"} title={"Almost new"} price={"$150"} id={1}/>
                  <Product primaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/dde4ea78-4547-483c-b94d-ad1deae3d68f-yoda.jpg?width=2560"} secondaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/ce9d795d-e609-43e3-a16c-82f7bc4a94b6-barbie.jpg?width=2560"} title={"Almost new"} price={"$150"} id={1}/>
                  <Product primaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/dde4ea78-4547-483c-b94d-ad1deae3d68f-yoda.jpg?width=2560"} secondaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/ce9d795d-e609-43e3-a16c-82f7bc4a94b6-barbie.jpg?width=2560"} title={"Almost new"} price={"$150"} id={1}/>
                  <Product primaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/dde4ea78-4547-483c-b94d-ad1deae3d68f-yoda.jpg?width=2560"} secondaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/ce9d795d-e609-43e3-a16c-82f7bc4a94b6-barbie.jpg?width=2560"} title={"Almost new"} price={"$150"} id={1}/>
                  <Product primaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/dde4ea78-4547-483c-b94d-ad1deae3d68f-yoda.jpg?width=2560"} secondaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/ce9d795d-e609-43e3-a16c-82f7bc4a94b6-barbie.jpg?width=2560"} title={"Almost new"} price={"$150"} id={1}/>
                  <Product primaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/dde4ea78-4547-483c-b94d-ad1deae3d68f-yoda.jpg?width=2560"} secondaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/ce9d795d-e609-43e3-a16c-82f7bc4a94b6-barbie.jpg?width=2560"} title={"Almost new"} price={"$150"} id={1}/>
                  <Product primaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/dde4ea78-4547-483c-b94d-ad1deae3d68f-yoda.jpg?width=2560"} secondaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/ce9d795d-e609-43e3-a16c-82f7bc4a94b6-barbie.jpg?width=2560"} title={"Almost new"} price={"$150"} id={1}/>
                  <Product primaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/dde4ea78-4547-483c-b94d-ad1deae3d68f-yoda.jpg?width=2560"} secondaryImg={"https://www.gannett-cdn.com/presto/2021/01/11/USAT/ce9d795d-e609-43e3-a16c-82f7bc4a94b6-barbie.jpg?width=2560"} title={"Almost new"} price={"$150"} id={1}/>
                </ul>
              </div>
            </div>
          </div>
        </div>



      </section>


    </>
  );
};

export default ProductsSection;