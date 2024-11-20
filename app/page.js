import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Link from "next/link";
import logo from '../public/assets/images/logo.png';

export default function Home() {
  return (
    <>
      <div
        id="carousel-example-generic"
        className="carousel slide"
        data-ride="carousel"
      >
        {/*<!-- Indicators */}
        <ol className="carousel-indicators">
          <li
            data-target="#carousel-example-generic"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        </ol>

        {/* <!-- Wrapper for slides -->*/}
        <div className="carousel-inner" role="listbox">
          <div
            className="item active"
            id="slide1"
            style={{
              background: "url(http://placehold.it/1920x605) no-repeat left center",
              backgroundSize: "cover"
            }}
          >
            {/*<!-- Ready for JS Injection -->*/}
            <div className="carousel-caption">
              <div className="caption sfr slider-title">Breathtaking views</div>
              <div className="caption sfl slider-subtitle">
                Relaxation in the Bay of Belfalas
              </div>
              <Link href="#" className="caption sfb btn btn-default btn-lg">
                Learn More
              </Link>
            </div>
          </div>

          <div
            className="item"
            id="slide2"
            style={{
              background: "url(http://placehold.it/1920x605) no-repeat left center",
              backgroundSize: "cover"
            }}
          >
            <div className="carousel-caption">
              <div className="caption sfr slider-title">The simple life</div>
              <div className="caption sfl slider-subtitle">
                Lush gardens in Mordor
              </div>
              <Link href="#" className="caption sfb btn btn-default btn-lg">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/*<!-- Blue Filter -->*/}
        <div id="home-search-section"></div>

        {/* <!-- Controls -->*/}
        <a
          className="left carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#carousel-example-generic"
          role="button"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/*<!-- END HOME SLIDER SECTION -->*/}

      {/* <!-- BEGIN HOME ADVANCED SEARCH -->*/}
      <div id="home-advanced-search" className="open">
        <div id="opensearch"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <form>
                <div className="form-group">
                  <div className="form-control-small">
                    <div className="input-group date chzn-container" data-datepicker>
                      <input
                        placeholder="Arrive on..."
                        type="text"
                        className="form-control"
                        data-date-format="DD/MM/YYYY"
                      />
                      <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                      </span>
                    </div>
                  </div>

                  <div className="form-control-small">
                    <select
                      id="search_status"
                      name="search_status"
                      data-placeholder="Stay..."
                    >
                      <option value=""></option>
                      <option value="1">1 Night</option>
                      <option value="2">2 Nights</option>
                      <option value="3">3 Nights</option>
                      <option value="4">4 Nights</option>
                      <option value="5">5 Nights</option>
                      <option value="6">6 Nights</option>
                      <option value="7">7 Nights</option>
                      <option value="8">8 Nights</option>
                      <option value="9">9 Nights</option>
                      <option value="10">10 Nights</option>
                      <option value="11">11 Nights</option>
                      <option value="12">12 Nights</option>
                      <option value="13">13 Nights</option>
                      <option value="14">14 Nights</option>
                    </select>
                  </div>

                  <div className="form-control-small">
                    <select
                      id="search_bedrooms"
                      name="search_bedrooms"
                      data-placeholder="Bedrooms"
                    >
                      <option value=""></option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="5plus">5+</option>
                    </select>
                  </div>
                  <div className="form-control-large">
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      placeholder="City, State, Country, etc..."
                    />
                  </div>
                  <button type="submit" className="btn btn-fullcolor">
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        {/*<!-- END HOME ADVANCED SEARCH -->*/}


 {/*<!-- BEGIN CONTENT WRAPPER -->*/}
 <div className="content">
        <div className="container">
          <div className="row">
            {/*!-- BEGIN MAIN CONTENT -->*/}
            <div className="main col-sm-8">
              <h1 className="section-title">Featured Properties</h1>

              <div className="grid-style1 clearfix">
                <div className="item col-md-4">
                  <div className="image">
                    <a href="properties-detail.html">
                      <h3>Luxury Apartment with great views</h3>
                      <span className="location">
                        Upper East Side, New York
                      </span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                  <div className="price">
                    <span>$950</span>
                    <p>per night</p>
                  </div>
                  <ul className="amenities">
                    <li>
                      <i className="icon-bedrooms"></i> 4
                    </li>
                    <li>
                      <i className="icon-bathrooms"></i> 3
                    </li>
                  </ul>
                </div>

                <div className="item col-md-4">
                  <div className="image">
                    <a href="properties-detail.html">
                      <h3>Stunning Villa with 5 bedrooms</h3>
                      <span className="location">Miami Beach, Florida</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                  <div className="price">
                    <span>$1,300</span>
                    <p>per night</p>
                  </div>
                  <ul className="amenities">
                    <li>
                      <i className="icon-bedrooms"></i> 5
                    </li>
                    <li>
                      <i className="icon-bathrooms"></i> 2
                    </li>
                  </ul>
                </div>

                <div className="item col-md-4">
                  <div className="image">
                    <a href="properties-detail.html">
                      <h3>Recent construction with 3 bedrooms</h3>
                      <span className="location">Park Slope, New York</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                  <div className="price">
                    <span>$560</span>
                    <p>per night</p>
                  </div>
                  <ul className="amenities">
                    <li>
                      <i className="icon-bedrooms"></i> 3
                    </li>
                    <li>
                      <i className="icon-bathrooms"></i> 2
                    </li>
                  </ul>
                </div>

                <div className="item col-md-4">
                  <div className="image">
                    <a href="properties-detail.html">
                      <h3>Modern construction with parking space</h3>
                      <span className="location">Midtown, New York</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                  <div className="price">
                    <span>$85</span>
                    <p>per night</p>
                  </div>
                  <ul className="amenities">
                    <li>
                      <i className="icon-bedrooms"></i> 1
                    </li>
                    <li>
                      <i className="icon-bathrooms"></i> 2
                    </li>
                  </ul>
                </div>

                <div className="item col-md-4">
                  <div className="image">
                    <a href="properties-detail.html">
                      <h3>Single Family Townhouse</h3>
                      <span className="location">Cobble Hill, New York</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                  <div className="price">
                    <span>$840</span>
                    <p>per night</p>
                  </div>
                  <ul className="amenities">
                    <li>
                      <i className="icon-bedrooms"></i> 2
                    </li>
                    <li>
                      <i className="icon-bathrooms"></i> 2
                    </li>
                  </ul>
                </div>

                <div className="item col-md-4">
                  <div className="image">
                    <a href="properties-detail.html">
                      <h3>3 bedroom villa with garage for rent</h3>
                      <span className="location">Bal Harbour, Florida</span>
                    </a>
                    <img src="http://placehold.it/760x670" alt="" />
                  </div>
                  <div className="price">
                    <span>$150</span>
                    <p>per night</p>
                  </div>
                  <ul className="amenities">
                    <li>
                      <i className="icon-bedrooms"></i> 3
                    </li>
                    <li>
                      <i className="icon-bathrooms"></i> 2
                    </li>
                  </ul>
                </div>
              </div>

              <div className="row">
                <div className="col-sm-12">
                  <h1 className="section-title">Popular Regions</h1>
                  <div id="regions">
                    <div className="item">
                      <Link href="#">
                        <img src="http://placehold.it/194x194" alt="" />
                        <h3>Rhovanion</h3>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="#">
                        <img src="http://placehold.it/194x194" alt="" />
                        <h3>Eriador</h3>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="#">
                        <img src="http://placehold.it/194x194" alt="" />
                        <h3>Bay of Belfalas</h3>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="#">
                        <img src="http://placehold.it/194x194" alt="" />
                        <h3>Mordor</h3>
                      </Link>
                    </div>

                    <div className="item">
                      <Link href="#">
                        <img src="http://placehold.it/194x194" alt="" />
                        <h3>The Southwest</h3>
                      </Link>
                    </div>
                    <div className="item">
                      <Link href="#">
                        <img src="http://placehold.it/194x194" alt="" />
                        <h3>Arnor</h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <h1 className="section-title">Recent Articles</h1>
              <div className="grid-style1">
                <div className="item col-md-4">
                  <div className="image">
                    <Link href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o"></i> Read More
                      </span>
                    </Link>
                    <img src="http://placehold.it/766x515" alt="" />
                  </div>
                  <div className="tag">
                    <i className="fa fa-file-text"></i>
                  </div>
                  <div className="info-blog">
                    <ul className="top-info">
                      <li>
                        <i className="fa fa-calendar"></i> July 30, 2014
                      </li>
                      <li>
                        <i className="fa fa-comments-o"></i> 2
                      </li>
                      <li>
                        <i className="fa fa-tags"></i> Properties, Prices, best
                        deals
                      </li>
                    </ul>
                    <h3>
                      <Link href="#">
                        How to get your dream property for the best price?
                      </Link>
                    </h3>
                    <p>
                      Sed rutrum urna id tellus euismod gravida. Praesent
                      placerat, mauris ac pellentesque fringilla, tortor libero
                      condimen.
                    </p>
                  </div>
                </div>
                <div className="item col-md-4">
                  <div className="image">
                    <Link href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o"></i> Read More
                      </span>
                    </Link>
                    <img src="http://placehold.it/766x515" alt="" />
                  </div>
                  <div className="tag">
                    <i className="fa fa-film"></i>
                  </div>
                  <div className="info-blog">
                    <ul className="top-info">
                      <li>
                        <i className="fa fa-calendar"></i> July 24, 2014
                      </li>
                      <li>
                        <i className="fa fa-comments-o"></i> 4
                      </li>
                      <li>
                        <i className="fa fa-tags"></i> Tips, Mortgage
                      </li>
                    </ul>
                    <h3>
                      <Link href="#">7 tips to get the best mortgage.</Link>
                    </h3>
                    <p>
                      Sed rutrum urna id tellus euismod gravida. Praesent
                      placerat, mauris ac pellentesque fringilla, tortor libero
                      condimen.
                    </p>
                  </div>
                </div>
                <div className="item col-md-4">
                  <div className="image">
                    <Link href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o"></i> Read More
                      </span>
                    </Link>
                    <img src="http://placehold.it/766x515" alt="" />
                  </div>
                  <div className="tag">
                    <i className="fa fa-file-text"></i>
                  </div>
                  <div className="info-blog">
                    <ul className="top-info">
                      <li>
                        <i className="fa fa-calendar"></i> July 05, 2014
                      </li>
                      <li>
                        <i className="fa fa-comments-o"></i> 1
                      </li>
                      <li>
                        <i className="fa fa-tags"></i> Location, Price, House
                      </li>
                    </ul>
                    <h3>
                      <Link href="#">
                        House, location or price: What's the most important
                        factor?
                      </Link>
                    </h3>
                    <p>
                      Sed rutrum urna id tellus euismod gravida. Praesent
                      placerat, mauris ac pellentesque fringilla, tortor libero
                      condimen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="center">
                <Link href="#" className="btn btn-default-color">
                  View All News
                </Link>
              </div>
            </div>
            {/*<!-- END MAIN CONTENT -->*/}


             {/*<!-- BEGIN SIDEBAR -->*/}
             <div className="sidebar col-sm-4">
              {/*<!-- BEGIN SIDEBAR ABOUT -->*/}
              <div className="col-sm-12">
                <h2 className="section-title">Last minute deals</h2>
                <ul className="latest-news">
                  <li className="col-md-12">
                    <div className="image">
                      <Link href="blog-detail.html"></Link>
                      <img alt="" src="http://placehold.it/100x100" />
                    </div>

                    <ul className="top-info">
                      <li>
                        <i className="fa fa-calendar"></i>Available Now
                      </li>
                    </ul>

                    <h4>
                      <a href="blog-detail.html">Private Beach</a>
                      <p>Lossarnach, Eriado</p>
                    </h4>
                  </li>
                  <li className="col-md-12">
                    <div className="image">
                      <Link href="blog-detail.html"></Link>
                      <img alt="" src="http://placehold.it/100x100" />
                    </div>

                    <ul className="top-info">
                      <li>
                        <i className="fa fa-calendar"></i>Available on 24 July
                      </li>
                    </ul>

                    <h4>
                      <a href="blog-detail.html">Mountain views</a>
                      <p>Hyarnustar, Rhovanion</p>
                    </h4>
                  </li>
                  <li className="col-md-12">
                    <div className="image">
                      <Link href="blog-detail.html"></Link>
                      <img alt="" src="http://placehold.it/100x100" />
                    </div>

                    <ul className="top-info">
                      <li>
                        <i className="fa fa-calendar"></i>Available 5 July
                      </li>
                    </ul>

                    <h4>
                      <Link href="blog-detail.html">Heart of the village</Link>
                      <p>Minhiriath, Eriador</p>
                    </h4>
                  </li>
                  <li className="col-md-12">
                    <div className="image">
                      <Link href="blog-detail.html"></Link>
                      <img alt="" src="http://placehold.it/100x100" />
                    </div>

                    <ul className="top-info">
                      <li>
                        <i className="fa fa-calendar"></i>Available 6 July
                      </li>
                    </ul>

                    <h4>
                      <a href="blog-detail.html">The city life</a>
                      <p>West Beleriand, Mordor</p>
                    </h4>
                  </li>
                </ul>
                <p className="center">
                  <Link href="#"className="btn btn-fullcolor" >
                    More deals
                  </Link>
                </p>
              </div>
              {/* <!-- END SIDEBAR ABOUT -->*/}

              <div className="col-sm-12">
                <h2 className="section-title">Activity</h2>
                <ul className="activity">
                  <li className="col-lg-12">
                    <Link href="#">
                      <img src="http://placehold.it/70x70" alt="" />
                    </Link>
                    <div className="info">
                      <h5>
                        Sam Minnée reviewed
                        <Link href="#">The House With No Windows</Link>
                      </h5>
                      <p>
                        Awesome solitary confinement, mate. Spot on. Sweet as.
                      </p>
                      <h6>Just now</h6>
                    </div>
                  </li>
                  <li className="col-lg-12">
                    <Link href="#">
                      <img src="http://placehold.it/70x70" alt="" />
                    </Link>
                    <div className="info">
                      <h5>
                        Ingo Schoomer asked a question about
                        <Link href="#">The Mistake by the Lake</Link>
                      </h5>
                      <p>Has this house been unit tested?</p>
                      <h6>37 minutes ago</h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- END SIDEBAR -->*/}
          </div>
        </div>
      </div>
      {/*<!-- END CONTENT WRAPPER -->*/}




      <footer id="footer">
    <div id="footer-top" className="container">
      <div className="row">
        <div className="block col-sm-3">
          <Link href="#"
            ><Image
            alt="One Ring Rentals"
            src={logo}
            width="200"
            height="100"
            
          /></Link>
          <br /><br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            commodo eros nibh, et dictum elit tincidunt eget. Pellentesque
            volutpat quam dignissim, convallis elit id, efficitur sem.
            Vivamus ac scelerisque sem. Aliquam sed enim rutrum nibh gravida
            pellentesque nec at metus.
          </p>
        </div>
        <div className="block col-sm-3">
          <h3>Helpful Links</h3>
          <ul className="footer-links">
            <li><Link href="#">All rentals</Link></li>
            <li><Link href="#">List your rental</Link></li>
            <li><Link href="#">Read our FAQs</Link></li>
          </ul>
        </div>
        <div className="block col-sm-6">
          <h3>Popular regions</h3>
          <div className="row">
            <div className="col-sm-6">
              <ul className="footer-listings">
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Rhovanion</a></p>
                </li>
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Eriador</a></p>
                </li>
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p>
                    <a href="properties-detail.html">Bay of Belfalas</a>
                  </p>
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              <ul className="footer-listings">
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Mordor</a></p>
                </li>
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Arnor</a></p>
                </li>
                <li>
                  <div className="image">
                    <a href="properties-detail.html"
                      ><img src="http://placehold.it/760x670" alt=""
                    /></a>
                  </div>
                  <p><a href="properties-detail.html">Forlindon</a></p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div id="copyright">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            &copy; 2014 One Ring Rentals

          
            <ul className="social-networks">
              <li>
                <Link href="#"><i className="fa fa-facebook"></i></Link>
              </li>
              <li>
                <Link href="#"><i className="fa fa-twitter"></i></Link>
              </li>
              <li>
                <Link href="#"><i className="fa fa-google"></i></Link>
              </li>
              <li>
                <Link href="#"><i className="fa fa-pinterest"></i></Link>
              </li>
              <li>
                <Link href="#"><i className="fa fa-youtube"></i></Link>
              </li>
              <li>
                <Link href="#"><i className="fa fa-rss"></i></Link>
              </li>
            </ul>
           
          </div>
        </div>
      </div>
    </div>
   
  </footer>
 
    </>
  );
};



    