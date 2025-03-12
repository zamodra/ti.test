"use client";

import FiltersProperty from '@/components/property/Filters';
import PropertyData from '@/components/property/PropertyData';
import Header from '@/components/property/Header';


export default function PropertyPage() {

  return (
    <div style={{ background:"linear-gradient(180deg, #EC0E52 20%, #F3F3F3 20%)"}}>
      <Header/>
      <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <FiltersProperty/>
          <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <PropertyData/>
          </section>
        </div>
        </main>
    </div>
  )
}



// import { useEffect } from "react";
// import { usePropertyStore } from "@/store/propertyStore";
// import { useAuthStore } from "@/store/authStore"

// import Pagination from "@/components/property/Pagination";
// import PropertyFilterForm from "@/components/property/FilterForm";

// const PropertyList = () => {
//   const { properties, fetchProperties, loading, error } = usePropertyStore();
//   const { logout } = useAuthStore();

//   useEffect(() => {
//     fetchProperties();
//   }, []);

//   return (
//     <div>
//       <button
//         onClick={logout}
//         className="bg-red-500 text-white cursor-pointer p-3 rounded-[10px] border border-solid border-black"
//       >
//         Sign out
//       </button>
//       <h1 className="text-xl font-bold">Property List</h1>
//       <PropertyFilterForm/>
//       {loading && <p>Loading properties...</p>}
//       {error && <p className="text-red-500">Error: {error}</p>}
//       <ul>
//         {properties.map((property) => (
//           <li key={property.id} className="border p-4 mb-2">
//             <h2 className="text-lg font-semibold">{property.name}</h2>
//             <p>Type: {property.type}</p>
//             <p>Status: {property.status}</p>
//             <p>Price: {property.price.toLocaleString()}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PropertyList;
