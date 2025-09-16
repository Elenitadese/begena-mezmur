import React from 'react'



import arcade from "../../assets/images/icons/arcade.png";
import appleTV from "../../assets/images/icons/apple-tv-logo.png";
import banker from "../../assets/images/home/banker.png";
import watchSeries5Logo from "../../assets/images/icons/watch-series5-logo.png";

const All = () => {
  return (
    <>
      <section className="alert-section top-50">
        <div className="container">
          <div className="alert-title">We’re open for you.</div>
          <div className="alert-text">
            Our retail stores are closed, but you can buy our products here
            online and get fast, free delivery. If you need help finding the
            right product or have a question on your order, chat online with a
            Specialist or call 1-800-MY-APPLE.
            <br />
            For service and support, visit{" "}
            <a href="https://support.apple.com/">support.apple.com</a>.
          </div>
        </div>
      </section>

      {/* <div
        key={singleProduct.product_id}
        className="flex flex-col md:flex-row items-center justify-center text-center product-holder mb-8 p-6 bg-white rounded-2xl shadow-lg"
      >
        <div
          className={`w-full md:w-1/2 flex-none md:flex-initial order-${order1} p-4`}
        >
          <div className="text-2xl font-bold text-gray-900 mb-2">
            {singleProduct.product_name}
          </div>
          <div className="text-gray-600 mb-2">
            {singleProduct.Product_brief_description}
          </div>
          <div className="text-gray-800 font-semibold mb-1">
            {`Starting at $${singleProduct.starting_price}`}
          </div>
          <div className="text-gray-500 text-sm">
            {singleProduct.price_range}
          </div>
          <div className="mt-4">
            <a
              href={`/iphone/${singleProduct.product_id}`}
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Learn more
            </a>
          </div>
        </div>

        <div
          className={`w-full md:w-1/2 flex-none md:flex-initial order-${order2} p-4`}
        >
          <div className="w-full flex justify-center">
            <img
              src={singleProduct.product_url}
              alt={singleProduct.product_name}
              className="max-w-full h-auto rounded-xl"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/800x600/cccccc/333333?text=Image+Not+Found";
              }}
            />
          </div>
        </div>
      </div> */}

      <section className="second-hightlight-wrapper">
        <div className="container">
          <div className="new-alert">New</div>

          <div className="title-wraper bold black">MacBook Air</div>

          <div className="description-wrapper black">
            Twice the speed. Twice the storage.
          </div>

          <div className="price-wrapper grey">From $999.</div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="third-hightlight-wrapper">
        <div className="container">
          <div className="title-wraper bold">iPhone 11 Pro</div>

          <div className="description-wrapper">
            Pro cameras. Pro display. Pro performance.
          </div>

          <div className="price-wrapper">
            From $24.95/mo. or $599 with trade‑in.
          </div>

          <div className="links-wrapper">
            <ul>
              <li>
                <a href="">Learn more</a>
              </li>
              <li>
                <a href="">Buy</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="fourth-heghlight-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="left-side-wrapper col-sm-12 col-md-6">
              <div className="left-side-container">
                <div className="title-wraper">iPhone 11</div>
                <div className="description-wraper">
                  Just the right amount of everything.
                </div>
                <div className="price-wrapper">
                  From $18.70/mo. or $499 with trade‑in.<sup>1</sup>
                </div>

                <div className="links-wrapper">
                  <ul>
                    <li>
                      <a href="">Learn more</a>
                    </li>
                    <li>
                      <a href="">Apply now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side-wrapper col-sm-12 col-md-6">
              <div className="right-side-container">
                <div className="title-wraper white">
                  Get the latest CDC response to COVID-19.
                </div>

                <div className="links-wrapper white">
                  <ul>
                    <li>
                      <a href="">Watch the PSA</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="fifth-heghlight-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="left-side-wrapper col-sm-12 col-md-6">
                        <div className="left-side-container">
                            <div className="top-logo-wrapper">
                                <div className="logo-wrapper">
                                    <img src={appleTV}/>
                                    
                                </div>
                            </div>
      
                            <div className="tvshow-logo-wraper">
                                <img src={banker}/>
                            </div>
      
                            <div className="watch-more-wrapper">
                                <a href="#">Watch now on the Apple TV App</a>
                            </div>
                        </div>
                    </div>
                    <div className="right-side-wrapper col-sm-12 col-md-6">
                        <div className="right-side-container">
                            <div className="top-logo-wrapper">
                                <div className="logo-wrapper">
                                    <img src={watchSeries5Logo}/>
                                </div>
                            </div>
                            <div className="description-wraper">
                                With the Always-On Retina display.<br/>
                                You’ve never seen a watch like this.
                            </div>
                            <div className="links-wrapper">
                                <ul>
                                    <li><a href="">Learn more</a></li>
                                    <li><a href="">Buy</a></li>
                                </ul> 
                            </div>
                        </div>
                    </div>					
                </div>
            </div> 
        </section>


        <section className="sixth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={arcade}/>
                                    </div>
                                </div>
                                <div className="description-wraper white">
                                    Agent 8 is a small hero on a big mission.
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="">Play now<sup>2</sup></a></li>
                                        <li><a href="">Learn about Apple Arcade</a></li>
                                    </ul> 
                                </div>						
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                <div className="title-wraper">
                                    Apple Card Monthly Installments 
                                </div> 
                                <div className="description-wraper">
                                    Pay for your next iPhone over time, interest-free with Apple Card.
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="">Learn more</a></li>
                                        <li><a href="">Apply now</a></li>
                                    </ul> 
                                </div>
                            </div>
                        </div>					
                    </div>
                </div> 
            </section>
    </>
  );
}

export default All