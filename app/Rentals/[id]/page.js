"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";
import { rentalList } from "../../data/list.js";

export const runtime = "edge";

export default function RentalItem({ params }) {
  // Get the param from the URL (e.g., 'http://localhost/gallery/1')
  const { id } = use(params);

  const rental = rentalList.find((item) => item.id == id);

  if (!rental) {
    notFound();
  }

  return (
    <div className="container mt-5 px-3">
      {rental ? (
        <div className="card border border-light rounded-3 shadow-sm p-4 my-4 bg-white">
          {/* Rental Info Section */}
          <h2 className="h3 font-weight-bold text-center mb-3">
            <i>{rental.name}</i>
          </h2>
          <h3 className="h5 text-muted text-center mb-4">
            ({rental.id + 1} of {rentalList.length})
          </h3>

          <div className="d-flex justify-content-center mb-4">
            <Image                   
              src={rental.url}
              alt={rental.alt}
              width={400}
              height={200}
              
              className="img-fluid rounded-3"
            />
          </div>

          <p className="fs-4 text-dark" style={{ lineHeight: "1.5" }}>
            {rental.description}
          </p>
        </div>
      ) : (
        <p className="text-center text-danger fs-5">Item not found</p>
      )}
    </div>
  );
}
