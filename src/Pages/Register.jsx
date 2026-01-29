import { useState } from "react";
import Swal from "sweetalert2";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Missing fields",
        text: "Please fill all fields",
      });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://aeksec-backend.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: data.error || "Something went wrong",
        });
        return;
      }

      Swal.fire({
        icon: "success",
        title: "Account Created",
        text: "You can now log in",
        timer: 1500,
        showConfirmButton: false,
      });

      // Redirect to login
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);

      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Please try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="w-full max-w-md bg-white border rounded-lg shadow-sm">
        {/* Header */}
        <header className="border-b bg-white">
          <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
            {/* Left: Logo + Brand */}
            <div className="flex items-center gap-3">
              {/* Logo Mark */}
              <div className="relative w-8 h-8 shrink-0">
                <div className="absolute inset-0 bg-blue-800 rounded-md rotate-45"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xs font-bold -rotate-45">
                    KT
                  </span>
                </div>
              </div>

              {/* Brand Name */}
              <span className="relative text-lg font-semibold tracking-tight">
                <span className="text-gray-900">Kalp</span>
                <span className="text-gray-500">Tech</span>

                {/* Underline Accent */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-blue-600/70 to-blue-400/40 rounded-full"></span>
              </span>
            </div>

            {/* Right: Region */}
            <div className="text-sm text-gray-500">🌐 US · EN</div>
          </div>
        </header>

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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full rounded-md border border-slate-300 px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-sky-500 mb-6
            "
          />

          {/* Button */}
          <button
            onClick={handleRegister}
            disabled={loading}
            className="
              w-full rounded-full bg-sky-600 py-3
              text-white font-medium
              hover:bg-sky-700 transition
              disabled:opacity-60
            "
          >
            {loading ? "Creating account..." : "Create account"}
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
