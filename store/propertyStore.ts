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

interface PropertyState {
  properties: Property[];
  loading: boolean;
  error: string | null;
  fetchProperties: (filters?: Record<string, any>) => Promise<void>;
}

export const usePropertyStore = create<PropertyState>()(
  devtools((set, get) => ({
    properties: [],
    loading: false,
    error: null,

    fetchProperties: async (filters = {}) => {
      set({ loading: true, error: null });
      try {
        const queryParams = new URLSearchParams(filters).toString();
        const data = await apiFetch(`/properties?${queryParams}`);

        set({ properties: data.data.data, loading: false });
      } catch (error: any) {
        set({ error: error.message, loading: false });
      }
    },
  }))
);
