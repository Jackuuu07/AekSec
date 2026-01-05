export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md bg-white border rounded-lg shadow-sm">

        {/* Header */}
        <div className="relative text-center py-8 border-b">
          <div className="text-xl font-semibold text-sky-600 tracking-wide">
            AekSec
          </div>

          {/* Language (top-right mock) */}
          <div className="absolute top-4 right-4 text-sm text-slate-500">
            🌐 US · EN
          </div>
        </div>

        {/* Body */}
        <div className="px-8 py-10">
          <h2 className="text-center text-2xl font-medium text-slate-800 mb-8">
            Log in
          </h2>

          {/* Email */}
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="
              w-full
              rounded-md
              border
              border-slate-300
              px-4 py-3
              focus:outline-none
              focus:ring-2
              focus:ring-sky-500
              focus:border-sky-500
              mb-6
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
            Next
          </button>

          {/* Links */}
          <div className="mt-8 space-y-4 text-sm">
            <a href="#" className="text-sky-600 hover:underline block">
              Unlock account?
            </a>

            <a href="#" className="text-sky-600 hover:underline block">
              Help
            </a>
          </div>

          <div className="mt-8 border-t pt-6 text-center text-sm text-slate-600">
            Don’t have an account?{" "}
            <a href="/register" className="text-sky-600 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
