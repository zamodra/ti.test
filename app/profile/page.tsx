"use client";
import Header from '@/components/property/Header';
import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";


export default function PropertyPage() {

  const { user, loading, logout, fetchUser } = useAuthStore();

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="h-[100vh]" style={{ background:"linear-gradient(180deg, #EC0E52 20%, #F3F3F3 20%)"}}>
      <Header/>
      {loading && (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-[#EC0E52] border-opacity-50"></div>
          <p className="ml-3 text-black text-lg text-bold">Loading properties...</p>
        </div>
      )}
      {user && !loading && (
        <>
          <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
            <div className="pb-24 pt-12 lg:gap-x-8">
              <div className="bg-white shadow-lg rounded-md p-5 pb-[50px] w-[100%]">
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                  <div className="flex-1 space-y-6">

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          disabled
                          value={user.email}
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-black-600 sm:text-sm"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                        Phone
                      </label>
                      <div className="mt-2">
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          autoComplete="tel"
                          disabled
                          value={user.phone}
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-black-600 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-px bg-gray-300"></div>

                  <div className="flex-1 space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900">
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          autoComplete="given-name"
                          disabled
                          value={user.name}
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-black-600 sm:text-sm"
                        />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  )
}

// "use client"
// import { useEffect } from "react";
// import { useAuthStore } from "@/store/authStore";

// const UserProfile = () => {
//   const { user, loading, logout, fetchUser } = useAuthStore();

//   useEffect(() => {
//     fetchUser();
//   }, []);

//   if (loading) {
//     return <p className="text-center mt-4">Loading user data...</p>;
//   }

//   if (!user) {
//     return <p className="text-center mt-4">No user data available.</p>;
//   }

//   return (
//     <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
//       <h2 className="text-xl font-semibold text-gray-800 mb-4">User Profile</h2>
//       <div className="space-y-2">
//         <p><span className="font-semibold">Name:</span> {user.name}</p>
//         <p><span className="font-semibold">Email:</span> {user.email}</p>
//         <p><span className="font-semibold">ID:</span> {user.id}</p>
//         <p><span className="font-semibold">Phone:</span> {user.phone}</p>
//       </div>

//       <button
//         onClick={logout}
//         className="mt-4 bg-red-500 text-white p-2 rounded-md w-full hover:bg-red-600"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default UserProfile;
