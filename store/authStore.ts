import { create } from "zustand";
import { signIn, signOut, useSession } from "next-auth/react";

interface RegisterData {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  password: string;
}

interface AuthState {
  user: any | null;
  accessToken: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  setUser: (user: any, token: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  accessToken: null,
  loading: false,

  login: async (email, password) => {
    set({ loading: true });

    const res = await signIn("credentials", { 
      email, 
      password, 
      redirect: false 
    });

    if (res?.error) {
      set({ loading: false });
      throw new Error(res.error);
    }
    
    const session = await fetch("/api/auth/session").then((res) => res.json());

    if (session?.user) {
      set({ 
        user: session.user, 
        accessToken: session.accessToken, 
        loading: false 
      });
    }
  },

  register: async (userData) => {
    set({ loading: true });

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (data.meta.code !== 200) {
        throw new Error(data.meta.message || "Registration failed");
      }

      set({ 
        user: data.data.user, 
        accessToken: data.data.access_token 
      });

      await signIn("credentials", {
        email: userData.email,
        password: userData.password,
        redirect: false,
      });

    } catch (error) {
      throw new Error(error instanceof Error ? error.message : "Registration failed");
    } finally {
      set({ loading: false });
    }
  },

  logout: async () => {
    await signOut({ redirect: false });
    set({ user: null, accessToken: null });
  },

  setUser: (user, token) => {
    set({ user, accessToken: token });
  },

}));
