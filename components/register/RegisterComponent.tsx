"use client";

import { useState } from "react";
import { useAuthStore  } from "@/store/authStore"; 
import { useRouter, useSearchParams } from "next/navigation";
import Notification from "../Notification";

const RegisterComponent = () => {

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  const { register, loading } = useAuthStore();

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    first_name: "John",
    last_name: "Doe",
    phone: "+6281234567890",
    email: "johndoe1235@example.com",
    password: "password123",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const redirectTo = callbackUrl ? decodeURIComponent(callbackUrl) : "/property";

    try {
      await register(formData);
      router.replace(redirectTo); 
    } catch (error: any) {
      setError(error.message);
    }
  };
  return (
    <>
      <Notification
        title="Registration failed!"
        message={error}
        type="error"
        show={!!error}
        onClose={() => setError("")}
      />
      <div className="flex min-h-[100vh] flex-1 flex-col justify-center sm:px-6 lg:px-8 bg-[#0000001f]">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=red&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-6 text-center text-2xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[890px] h-full">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
                <div className="flex-1 space-y-6">
                  {/* Email */}
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
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-black-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autoComplete="new-password"
                        onChange={handleChange}
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
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-black-600 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-px bg-gray-300"></div>

                <div className="flex-1 space-y-6">
                  {/* First Name */}
                  <div>
                    <label htmlFor="first_name" className="block text-sm font-medium text-gray-900">
                      First Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="first_name"
                        name="first_name"
                        type="text"
                        required
                        autoComplete="given-name"
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-black-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div>
                    <label htmlFor="last_name" className="block text-sm font-medium text-gray-900">
                      Last Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="last_name"
                        name="last_name"
                        type="text"
                        required
                        autoComplete="family-name"
                        onChange={handleChange}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-black-600 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center ">
              <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="cursor-pointer flex sm:max-w-[480px] w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {loading ? "Loading..." : "Sign up"}
                </button>
              </div>
            </form>

            {/* Already have an account? */}
            <div className="mt-6 text-center text-sm text-gray-500">
              Already have an account?{' '}
              <a onClick={() => router.replace("/login")} className="font-semibold text-red-600 hover:text-red-500 cursor-pointer">
                Sign in
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
    
  );
};
  
export default RegisterComponent;
  