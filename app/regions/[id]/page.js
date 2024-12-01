"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import { use } from "react";
import { regions } from "../../data/region.js";

export const runtime = "edge";

export default function RegionItem({ params }) {
  // get the param from the url
  const { id } = use(params);

  const region = regions.find((item) => item.id == id);

  if (!region) {
    notFound();
  }

  return (
    <div className="box mt-4 p-3 border rounded-3 bg-light text-center">
      {region ? (
        <>
          <h2 className="h4 font-weight-bold text-dark">
            <i>{region.name}</i>
          </h2>
          <h3 className="h6 text-muted mb-3">
            ({region.id + 1} of {regions.length})
          </h3>
          <Image
            src={region.imageUrl}
            alt={region.alt}
            width={400}
            height={200}
            className="rounded-3 img-fluid"
          />
          <p className="fs-5 text-secondary mt-3">{region.location}</p>
        </>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}
