import { getSession } from "next-auth/react";

export const apiFetch = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const session = await getSession(); // Get session dynamically
    const accessToken = session?.accessToken;

    if (!accessToken) {
      throw new Error("No access token found. Please login.");
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error: any) {
    console.error("API Fetch Error:", error.message);
    throw error;
  }
};
