import React, { Suspense } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../components/Navbar";

// Load remote component from micro frontend
const RemoteSongLibrary = React.lazy(() => import("musicApp/SongLibrary"));

export default function Dashboard() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500">
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Not Authorized
          </h2>
          <p className="text-gray-600 mb-6">Please login to access this page</p>
          <a
            href="/login"
            className="inline-block px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-lg shadow hover:shadow-lg transition-all"
          >
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-red-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 mb-8 border border-white/20">
          <h1 className="text-3xl font-extrabold text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text ">
            Welcome, {user.role.charAt(0).toUpperCase() + user.role.slice(1)}!
          </h1>
          <p className="mt-2 text-gray-600">
            Explore your personalized music library
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
          <Suspense
            fallback={
              <div className="flex justify-center items-center py-12">
                <div className="animate-pulse flex space-x-4">
                  <div className="rounded-full bg-purple-200 h-12 w-12"></div>
                  <div className="flex-1 space-y-4 py-1">
                    <div className="h-4 bg-purple-200 rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-purple-200 rounded"></div>
                      <div className="h-4 bg-purple-200 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            }
          >
            <RemoteSongLibrary userRole={user.role} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
