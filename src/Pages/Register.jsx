export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md bg-white border rounded-lg shadow-sm">

        {/* Header */}
        <div className="relative text-center py-8 border-b">
          <div className="text-xl font-semibold text-sky-600 tracking-wide">
            AekSec
          </div>

          <div className="absolute top-4 right-4 text-sm text-slate-500">
            🌐 US · EN
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-10">
          <h2 className="text-center text-2xl font-medium text-slate-800 mb-8">
            Create an account
          </h2>

          {/* Name */}
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Full name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="
              w-full rounded-md border border-slate-300 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-sky-500 mb-5
            "
          />

          {/* Email */}
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full rounded-md border border-slate-300 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-sky-500 mb-5
            "
          />

          {/* Password */}
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Create a password"
            className="
              w-full rounded-md border border-slate-300 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-sky-500 mb-6
            "
          />

          {/* Button */}
          <button
            className="
              w-full
              rounded-full
              bg-sky-600
              py-3
              text-white
              font-medium
              hover:bg-sky-700
              transition
            "
          >
            Create account
          </button>

          <div className="mt-8 border-t pt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <a href="/login" className="text-sky-600 hover:underline">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
