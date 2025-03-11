import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { apiFetch } from "@/lib/api";

interface Property {
  id: number;
  name: string;
  type: string;
  status: string;
  price: number;
  location: string;
  images: string[];
}

interface PropertyFilters {
  [key: string]: string | number | undefined; 
  type?: string;
  status?: string;
  price_min?: number;
  price_max?: number;
  per_page?: number;
}

interface PropertyState {
  properties: Property[];
  filters: PropertyFilters;
  loading: boolean;
  error: string | null;
  setFilters: (filters: Partial<PropertyFilters>) => void;
  fetchProperties: () => Promise<void>;
}

export const usePropertyStore = create<PropertyState>()(
  devtools((set, get) => ({
    properties: [],
    filters: { per_page: 12 },
    loading: false,
    error: null,

    setFilters: (newFilters) =>
      set((state) => ({
        filters: { ...state.filters, ...newFilters },
      })),

      fetchProperties: async () => {
        const { filters } = get();
        set({ loading: true, error: null });
  
        try {
          const queryParams = new URLSearchParams(
            Object.entries(filters)
              .filter(([_, value]) => value !== undefined && value !== "")
              .map(([key, value]) => [key, String(value)])
          ).toString();
  
          const data = await apiFetch(`/properties?${queryParams}`);
  
          set({ properties: data.data.data, loading: false });
        } catch (error: any) {
          set({ error: error.message, loading: false });
        }
      },
  }))
);
