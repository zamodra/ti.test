"use client"
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useSession } from "next-auth/react";  

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (session?.user) {
      setUser(session.user, session.accessToken);
    }
  }, [session, setUser]);

  return <>{children}</>;
}
