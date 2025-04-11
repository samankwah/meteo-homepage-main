// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulate network delay
//     await new Promise((resolve) => setTimeout(resolve, 1500));

//     // Mock authentication (Replace with real backend authentication)
//     if (email === "admin@example.com" && password === "admin123") {
//       // Add more sophisticated success handling
//       navigate("/admin-dashboard", {
//         state: {
//           welcomeMessage: `Welcome back, ${email}!`,
//         },
//       });
//     } else {
//       // More user-friendly error handling
//       alert("Invalid credentials. Please check your email and password.");
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
//       <div className="w-full max-w-md">
//         <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
//           {/* Header Section */}
//           <div className="bg-blue-600 text-white p-6 text-center">
//             <Shield className="mx-auto mb-4" size={48} strokeWidth={1.5} />
//             <h2 className="text-3xl font-bold">Admin Portal</h2>
//             <p className="text-blue-100 mt-2">Secure Access Required</p>
//           </div>

//           {/* Login Form */}
//           <form onSubmit={handleLogin} className="p-6 space-y-6">
//             {/* Email Input */}
//             <div>
//               <label className="block text-gray-700 mb-2 flex items-center">
//                 <Mail className="mr-2 text-blue-500" size={20} />
//                 Email Address
//               </label>
//               <div className="relative">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   placeholder="Enter your admin email"
//                   className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
//                 />
//                 <Mail
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                   size={20}
//                 />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div>
//               <label className="block text-gray-700 mb-2 flex items-center">
//                 <Lock className="mr-2 text-blue-500" size={20} />
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   placeholder="Enter your password"
//                   className="w-full p-3 pl-10 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
//                 />
//                 <Lock
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                   size={20}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
//                 isLoading
//                   ? "bg-blue-400 cursor-not-allowed"
//                   : "bg-blue-600 hover:bg-blue-700"
//               }`}
//             >
//               {isLoading ? "Logging in..." : "Login"}
//             </button>

//             {/* Forgot Password Link */}
//             <div className="text-center">
//               <a
//                 href="/forgot-password"
//                 className="text-blue-500 hover:underline text-sm"
//               >
//                 Forgot Password?
//               </a>
//             </div>
//           </form>
//         </div>

//         {/* Additional Security Message */}
//         <div className="text-center text-gray-500 mt-4 text-sm">
//           <p>Secured with end-to-end encryption</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     try {
//       // Simulate network delay
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       // Mock authentication (Replace with real backend authentication)
//       if (email === "admin@example.com" && password === "admin123") {
//         // Store authentication state (you might want to use more secure methods in production)
//         localStorage.setItem("isAuthenticated", "true");

//         // Navigate to dashboard with some state
//         navigate("/dashboard", {
//           state: {
//             welcomeMessage: `Welcome back, Admin!`,
//             email: email,
//           },
//         });
//       } else {
//         // Set error message for invalid credentials
//         setError("Invalid email or password. Please try again.");
//       }
//     } catch (err) {
//       // Handle any unexpected errors
//       setError("An unexpected error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
//       <div className="w-full max-w-md">
//         <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
//           {/* Header Section */}
//           <div className="bg-blue-600 text-white p-6 text-center">
//             <Shield className="mx-auto mb-4" size={48} strokeWidth={1.5} />
//             <h2 className="text-3xl font-bold">Admin Portal</h2>
//             <p className="text-blue-100 mt-2">Secure Access Required</p>
//           </div>

//           {/* Login Form */}
//           <form onSubmit={handleLogin} className="p-6 space-y-6">
//             {/* Error Message */}
//             {error && (
//               <div
//                 className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded relative"
//                 role="alert"
//               >
//                 {error}
//               </div>
//             )}

//             {/* Email Input */}
//             <div>
//               <label className="block text-gray-700 mb-2 flex items-center">
//                 <Mail className="mr-2 text-blue-500" size={20} />
//                 Email Address
//               </label>
//               <div className="relative">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   placeholder="Enter your admin email"
//                   className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
//                 />
//                 <Mail
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                   size={20}
//                 />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div>
//               <label className="block text-gray-700 mb-2 flex items-center">
//                 <Lock className="mr-2 text-blue-500" size={20} />
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   placeholder="Enter your password"
//                   className="w-full p-3 pl-10 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
//                 />
//                 <Lock
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
//                   size={20}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </button>
//               </div>
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
//                 isLoading
//                   ? "bg-blue-400 cursor-not-allowed"
//                   : "bg-blue-600 hover:bg-blue-700"
//               }`}
//             >
//               {isLoading ? "Logging in..." : "Login"}
//             </button>

//             {/* Forgot Password Link */}
//             <div className="text-center">
//               <a
//                 href="/forgot-password"
//                 className="text-blue-500 hover:underline text-sm"
//               >
//                 Forgot Password?
//               </a>
//             </div>
//           </form>
//         </div>

//         {/* Additional Security Message */}
//         <div className="text-center text-gray-500 mt-4 text-sm">
//           <p>Secured with end-to-end encryption</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, Shield } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Simulate network delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Mock authentication (Replace with real backend authentication)
      if (
        email === "stephen.amankwah@meteo.gov.gh" &&
        password === "admin123"
      ) {
        // Store authentication state (you might want to use more secure methods in production)
        localStorage.setItem("isAuthenticated", "true");

        // Navigate to dashboard with some state
        navigate("/dashboard", {
          state: {
            welcomeMessage: `Welcome back, Admin!`,
            email: email,
          },
        });
      } else {
        // Set error message for invalid credentials
        setError("Invalid email or password. Please try again.");
      }
    } catch {
      // Handle any unexpected errors
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-blue-600 text-white p-6 text-center">
            <Shield className="mx-auto mb-4" size={48} strokeWidth={1.5} />
            <h2 className="text-3xl font-bold">Admin Portal</h2>
            <p className="text-blue-100 mt-2">Secure Access Required</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="p-6 space-y-6">
            {/* Error Message */}
            {error && (
              <div
                className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded relative"
                role="alert"
              >
                {error}
              </div>
            )}

            {/* Email Input */}
            <div>
              <label className="block text-gray-700 mb-2 flex items-center">
                <Mail className="mr-2 text-blue-500" size={20} />
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your admin email"
                  className="w-full p-3 pl-10 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-gray-700 mb-2 flex items-center">
                <Lock className="mr-2 text-blue-500" size={20} />
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                  className="w-full p-3 pl-10 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition"
                />
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>

            {/* Forgot Password Link */}
            <div className="text-center">
              <a
                href="/forgot-password"
                className="text-blue-500 hover:underline text-sm"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>

        {/* Additional Security Message */}
        <div className="text-center text-gray-500 mt-4 text-sm">
          <p>Secured with end-to-end encryption</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
