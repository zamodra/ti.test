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

