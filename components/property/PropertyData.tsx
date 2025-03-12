"use client"
import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import { BookmarkIcon, ClockIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import NoData from '@/components/property/NoData';
import { useEffect } from "react";
import { usePropertyStore } from "@/store/propertyStore";

const PropertyData = () => {
  const { properties, fetchProperties, loading } = usePropertyStore();

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  const getWeeksFromTimestamp = (timestamp: string) => {
    const givenDate = new Date(timestamp);
    const currentDate = new Date(); 
  
    const diffInMilliseconds = currentDate.getTime() - givenDate.getTime();
    const weeks = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 7));
  
    return weeks;
  };

  if (loading) return (
    <div className="flex justify-center items-center h-32">
      <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#EC0E52] border-opacity-50"></div>
      <p className="ml-3 text-white text-lg text-bold">Loading properties...</p>
    </div>
  )

  return (
    <>
      {properties.length === 0 && <NoData/>}

      {properties.length > 0 && (
        <>
          <div className="bg-white shadow-lg rounded-md p-3 h-[60px] mb-3 flex justify-end items-center text-sm gap-2">
            <p>Sort By: </p>
            <div className="bg-gray-200 py-1 px-4 flex gap-2 items-center rounded-[8px] cursor-pointer">
              <p>Most Recent</p>
              <ChevronDownIcon className="h-3 w-3"/>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-3 sm:gap-y-10 lg:gap-x-4 xl:grid-cols-3">
            {properties.map((property) => (
              <div key={property.id} className="bg-white shadow-lg rounded-md p-3">
                {/* Header Section */}
                <div className="flex justify-between">
                  <div className="flex gap-2 items-start">
                    <img
                      src={property.image_url || "https://via.placeholder.com/100"}
                      alt={property.name}
                      className="h-12 w-12 rounded-md object-cover"
                    />
                    <div className="">
                      <h3 className="text-sm font-bold text-gray-900">{`${property.name}`.slice(0, 30)}...</h3>
                      <ShieldCheckIcon className="h-4 w-4 fill-blue-500" />
                    </div>
                  </div>
                  <BookmarkIcon className="h-6 w-6 text-blue-500" />
                </div>

                {/* Tags Section */}
                <div className="flex gap-2 items-center mt-2">
                  <div className="bg-blue-200 w-[30%] text-center text-sm py-1 px-4 text-blue-500 rounded-md">
                    {property.type}
                  </div>
                  <div className="bg-blue-200 w-[30%] text-center text-sm py-1 px-4 text-blue-500 rounded-md">
                    {property.status}
                  </div>
                  <div className="bg-blue-200 w-[40%] text-center text-sm py-1 px-4 text-blue-500 rounded-md">
                    IDR {`${property.price}`.slice(0, 2)}M
                  </div>
                </div>

                {/* Footer Section */}
                <div className="flex items-center justify-end gap-2 mt-3">
                  <div className="text-black text-sm p-1 bg-[#FFF8E1] rounded-md">
                    LT {property.land_area} m² {property.building_area} 98 m²
                  </div>
                  <div className="flex gap-1 items-center">
                    <ClockIcon className="h-5 w-5 text-gray-500" />
                    <p className="text-sm text-gray-500">{`${getWeeksFromTimestamp(property.updated_at)}`}w</p>
                  </div>
                </div>

                {/* Book Button */}
                <button
                  type="button"
                  className="mt-3 cursor-pointer flex w-full justify-center rounded-md bg-[#EC0E52] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Book
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </>

  )
}

export default PropertyData;