"use client";
import React from "react";

import Image from "next/image";
import Link from "next/link";


const News = () => {
  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="main col-sm-12">
              <h1 className="section-title">Latest News</h1>
              <div className="grid-style1 clearfix">
                <div className="item col-md-4">
                  <div className="image">
                    <Link href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o"></i> Read More
                      </span>
                    </Link>
                    <Image
                      src="http://placehold.it/766x515"
                      alt="New Rental Regulations"
                      width={766}
                      height={215}
                    />
                  </div>
                  <div className="tag">
                    <i className="fa fa-file-text"></i>
                  </div>
                  <div className="info-blog">
                    <span className="title">New Rental Regulations Announced</span>
                    <span className="text">
                      The government has announced new rental regulations effective from next month. Find out how this impacts you.
                    </span>
                    <span className="meta">
                      <span className="author">
                        <i className="fa fa-user"></i> Admin
                      </span>
                      <span className="date">
                        <i className="fa fa-clock-o"></i> 2024-08-08
                      </span>
                    </span>
                  </div>
                </div>

                <div className="item col-md-4">
                  <div className="image">
                    <Link href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o"></i> Read More
                      </span>
                    </Link>
                    <Image
                      src="http://placehold.it/766x515"
                      alt="Top 10 Rental Properties"
                      width={766}
                      height={215}
                    />
                  </div>
                  <div className="tag">
                    <i className="fa fa-file-text"></i>
                  </div>
                  <div className="info-blog">
                    <span className="title">Top 10 Rental Properties in Sydney</span>
                    <span className="text">
                      Explore our list of the top 10 rental properties in Sydney for the month of August.
                    </span>
                    <span className="meta">
                      <span className="author">
                        <i className="fa fa-user"></i> Admin
                      </span>
                      <span className="date">
                        <i className="fa fa-clock-o"></i> 2024-08-07
                      </span>
                    </span>
                  </div>
                </div>

                <div className="item col-md-4">
                  <div className="image">
                    <Link href="#">
                      <span className="btn btn-default">
                        <i className="fa fa-file-o"></i> Read More
                      </span>
                    </Link>
                    <Image
                      src="http://placehold.it/766x515"
                      alt="Customer Stories"
                      width={766}
                      height={215}
                    />
                  </div>
                  <div className="tag">
                    <i className="fa fa-file-text"></i>
                  </div>
                  <div className="info-blog">
                    <span className="title">Customer Stories: Finding the Perfect Home</span>
                    <span className="text">
                      Read our customer stories about their journey to finding the perfect home through One Ring Rentals.
                    </span>
                    <span className="meta">
                      <span className="author">
                        <i className="fa fa-user"></i> Admin
                      </span>
                      <span className="date">
                        <i className="fa fa-clock-o"></i> 2024-08-06
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p>&copy; 2024 One Ring Rentals. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default News;
