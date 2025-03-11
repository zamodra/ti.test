"use client";

import { useEffect } from "react";
import { usePropertyStore } from "@/store/propertyStore";

const PropertyList = () => {
  const { properties, fetchProperties, loading, error } = usePropertyStore();

  useEffect(() => {
    fetchProperties({ type: "rumah", status: "new" });
  }, []);

  return (
    <div>
      <h1 className="text-xl font-bold">Property List</h1>
      {loading && <p>Loading properties...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul>
        {properties.map((property) => (
          <li key={property.id} className="border p-4 mb-2">
            <h2 className="text-lg font-semibold">{property.name}</h2>
            <p>Type: {property.type}</p>
            <p>Status: {property.status}</p>
            <p>Price: {property.price.toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PropertyList;
