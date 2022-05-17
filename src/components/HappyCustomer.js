import React from "react";

export default function HappyCustomer() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="mb-5">
        <h1>
          <span>Happy</span> Customers
        </h1>
        <p className="about-text">TESTIMONIALS</p>
      </div>
      <div id="demo" class="carousel slide" data-ride="carousel">
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner">
          <div class="carousel-item active carosel-single">
            <img
              src="https://webtoolfeed.files.wordpress.com/2011/12/1.jpg"
              alt="client"
              className="img-fluid"
            />
            <p className="">
              <span className="pr-3">&#8220;</span> Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Eaque aperiam, ea fugiat similique
              laudantium voluptatem repellat hic vel consectetur molestias ab,
              repellendus sint consequatur. Ex saepe sapiente possimus officiis
              obcaecati?
              <span className="pl-3">&#8221;</span>
            </p>
            <h3>MR. ANTOINE VARANE</h3>
            <h6>Developer - Adobe</h6>
          </div>
          <div class="carousel-item carosel-single">
            <img
              src="https://webtoolfeed.files.wordpress.com/2011/12/1.jpg"
              alt="client"
              className="img-fluid"
            />
            <p>
              <span className="pr-3">&#8220;</span> Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Eaque aperiam, ea fugiat similique
              laudantium voluptatem repellat hic vel consectetur molestias ab,
              repellendus sint consequatur. Ex saepe sapiente possimus officiis
              obcaecati?
              <span className="pl-3">&#8221;</span>
            </p>
            <h3>MISS ELINA POOL</h3>
            <h6>Developer - Adobe</h6>
          </div>
          <div class="carousel-item carosel-single">
            <img
              src="https://webtoolfeed.files.wordpress.com/2011/12/1.jpg"
              alt="client"
              className="img-fluid"
            />
            <p>
              <span className="pr-3">&#8220;</span> Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Eaque aperiam, ea fugiat similique
              laudantium voluptatem repellat hic vel consectetur molestias ab,
              repellendus sint consequatur. Ex saepe sapiente possimus officiis
              obcaecati?
              <span className="pl-3">&#8221;</span>
            </p>
            <h3>MR. ANTOINE VARANE</h3>
            <h6>Developer - Adobe</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
