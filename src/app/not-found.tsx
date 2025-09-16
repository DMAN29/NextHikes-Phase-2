import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center overflow-x-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-6">
      <h1 className="text-7xl md:text-8xl font-extrabold text-red-600 animate-pulse">404</h1>
      <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-200">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-400 max-w-md text-center">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
      >
        Go Home
      </Link>

      {/* Optional decorative stars */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-1 h-1 bg-white rounded-full absolute top-10 left-20 animate-pulse-slow"></div>
        <div className="w-1 h-1 bg-white rounded-full absolute top-1/3 right-32 animate-pulse-slower"></div>
        <div className="w-1 h-1 bg-white rounded-full absolute bottom-20 left-1/4 animate-pulse-slow"></div>
      </div>
    </div>
  );
}
