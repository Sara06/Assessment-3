"use client";
import React, { useState } from 'react';
import { rentalList } from "../data/list";
import Image from 'next/image';

const Rentals = () => {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((index + 1) % rentalList.length);
  }

  let rental = rentalList[index];

  return (
    <div className="container mt-5">
      <div className="card shadow-sm p-4 mb-5 bg-body rounded">
        {/* Rental Info Section */}
        <div className="card-body">
          {/* Next button */}
          <button
            className="btn btn-primary mb-3"
            onClick={handleClick}
            aria-label="Next rental"
          >
            Next
          </button>

          {/* Rental Title */}
          <h2 className="card-title fs-1 fw-bold text-dark my-4">
            <i>{rental.name}</i>
          </h2>

          {/* Rental Subtitle */}
          <h3 className="card-subtitle text-muted mb-4">
            ({index + 1} of {rentalList.length})
          </h3>

          {/* Rental Image */}
          <div className="img-container mb-3">
          <Image                   
              src={rental.url}
              alt={rental.alt}
              width={560}
              height={300}
              
              className="img-fluid rounded-3"
            />
             
          </div>

          {/* Rental Description */}
          <p className="card-text fs-4 text-secondary text-justify my-4">
            {rental.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rentals;
