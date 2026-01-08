import { useState } from "react";
import Swal from "sweetalert2";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Missing fields",
        text: "Please enter email and password",
      });
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://aeksec-backend.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: data.error || "Invalid credentials",
        });
        return;
      }

      // Save token if needed
      localStorage.setItem("token", data.token);

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back!",
        timer: 1500,
        showConfirmButton: false,
      });

      // Redirect to home
      setTimeout(() => {
        window.location.href = "/";
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
        <div className="relative text-center py-8 border-b">
            <h1
              className="cursor-pointer text-2xl font-extrabold tracking-tight
              bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600
              bg-clip-text text-transparent hover:opacity-90 transition"
            >
              Aek<span className="font-light">Sec</span>
            </h1>

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full rounded-md border border-slate-300
              px-4 py-3 mb-6
              focus:outline-none focus:ring-2
              focus:ring-sky-500 focus:border-sky-500
            "
          />

          {/* Password */}
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full rounded-md border border-slate-300
              px-4 py-3 mb-6
              focus:outline-none focus:ring-2
              focus:ring-sky-500 focus:border-sky-500
            "
          />

          {/* Button */}
          <button
            onClick={handleLogin}
            disabled={loading}
            className="
              w-full rounded-full bg-sky-600 py-3
              text-white font-medium
              hover:bg-sky-700 transition
              disabled:opacity-60
            "
          >
            {loading ? "Logging in..." : "Login"}
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
