"use client"
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";

const UserProfile = () => {
  const { user, loading, logout, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return <p className="text-center mt-4">Loading user data...</p>;
  }

  if (!user) {
    return <p className="text-center mt-4">No user data available.</p>;
  }

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">User Profile</h2>
      <div className="space-y-2">
        <p><span className="font-semibold">Name:</span> {user.name}</p>
        <p><span className="font-semibold">Email:</span> {user.email}</p>
        <p><span className="font-semibold">ID:</span> {user.id}</p>
        <p><span className="font-semibold">Phone:</span> {user.phone}</p>
      </div>

      <button
        onClick={logout}
        className="mt-4 bg-red-500 text-white p-2 rounded-md w-full hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
};

export default UserProfile;
