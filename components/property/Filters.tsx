import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { useState, useCallback } from 'react'
import Slider from "@mui/material/Slider";
import { usePropertyStore } from '@/store/propertyStore'; 
import debounce from "lodash.debounce";

const filters = [
  {
    id: 'status',
    name: 'Status',
    options: [
      { value: 'new', label: 'New' },
      { value: 'second', label: 'Second' },
    ],
  },
  {
    id: 'location',
    name: 'Location',
    options: [
      { value: 'bekasi', label: 'Bekasi' },
      { value: 'jakarta', label: 'Jakarta' },
      { value: 'bandung', label: 'Bandung' },
      { value: 'bogor', label: 'Bogor' },
    ],
  },
  {
    id: 'type',
    name: 'Type',
    options: [
      { value: 'rumah', label: 'Rumah' },
      { value: 'apartement', label: 'Apartement' },
      { value: 'ruko', label: 'Ruko' },
      { value: 'hotel', label: 'Hotel' }
    ],
  },
]

const FiltersProperty = () => {

  const { filters: selectedFilters, setFilters, fetchProperties, loading } = usePropertyStore();

  const minGap = 0;
  const maxPrice = 10e8;

  const [values, setValues] = useState<[number, number]>([0, 0]);
  
  const updateFilters = useCallback(
    debounce((min: number, max: number) => {
      setFilters({ price_min: min, price_max: max });
    }, 300), // 300ms debounce
    [setFilters]
  );
  const handleChange = useCallback(
    (_event: Event, newValue: number | number[]) => {
      if (Array.isArray(newValue)) {
        const [min, max] = newValue;
        if (max - min >= minGap) {
          setValues(newValue as [number, number])
          updateFilters(min, max); 
        }
      }
    },
    [updateFilters]
  );
  const formatCurrency = (value: number) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  const handleFilterChange = (id: string, value: string, checked: boolean) => {
    if (id === "type") {
      let currentTypes = selectedFilters.type ? selectedFilters.type.split(",") : [];
  
      if (checked) {
        currentTypes.push(value);
      } else {
        currentTypes = currentTypes.filter((item) => item !== value);
      }
  
      setFilters({ type: currentTypes.length > 0 ? currentTypes.join(",") : undefined });
    } else {
      setFilters({ [id]: checked ? value : undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchProperties();
  };

  return (
    <aside className='bg-white p-4 h-[80vh] shadow-lg rounded-md overflow-y-auto overflow-x-hidden'>
      <h3 className='text-lg font-bold'>Filter by</h3>
      <div className="lg:block">
        <form className="mt-4" onSubmit={handleSubmit}>
          {filters.map((section) => (
            <Disclosure key={section.id} as="div" className="border-t border-gray-200 py-6">
              <h3 className="-mx-2 -my-3 flow-root">
                <DisclosureButton className="group flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500 cursor-pointer">
                  <span className="font-medium text-gray-900">{section.name}</span>
                  <span className="ml-6 flex items-center">
                    <ChevronUpIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                    <ChevronDownIcon aria-hidden="true" className="size-5 group-[&:not([data-open])]:hidden" />
                  </span>
                </DisclosureButton>
              </h3>
              <DisclosurePanel className="pt-3">
                <div className="space-y-3">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex gap-3">
                      <div className="flex h-5 shrink-0 items-center">
                        <div className="group grid size-4 grid-cols-1">
                          <input
                            value={option.value}
                            checked={
                              section.id === "type"
                                ? selectedFilters.type?.split(",").includes(option.value) ?? false
                                : selectedFilters[section.id] === option.value
                            }
                            onChange={(e) => handleFilterChange(section.id, option.value, e.target.checked)}
                            id={`filter-mobile-${section.id}-${optionIdx}`}
                            name={`${section.id}[]`}
                            type="checkbox"
                            className="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-[#EC0E52] checked:bg-[#EC0E52] indeterminate:border-[#EC0E52] indeterminate:bg-[#EC0E52] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EC0E52] disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-[:disabled]:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:checked]:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-[:indeterminate]:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <label
                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                        className="min-w-0 flex-1 text-gray-500"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </DisclosurePanel>
            </Disclosure>
          ))}

            <div className="font-medium text-gray-900 border-t border-gray-200 pt-5">Price Range</div>
            <div className="text-gray-500 my-2">
              {formatCurrency(values[0] || 0)} - {formatCurrency(values[1] || 0)}
            </div>
            <Slider
              value={values}
              onChange={handleChange}
              min={0}
              max={maxPrice}
              valueLabelDisplay="auto"
              sx={{
                color: "#EC0E52",
                "& .MuiSlider-thumb": {
                  borderRadius: "50%",
                  border: "3px solid #EC0E52",
                  backgroundColor: "white",
                },
              }}
            />


            <button
              type="submit"
              disabled={loading}
              className="mt-4 cursor-pointer flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Loading..." : "Apply"}
            </button>
        </form>
      </div>
    </aside>
  )
}

export default FiltersProperty