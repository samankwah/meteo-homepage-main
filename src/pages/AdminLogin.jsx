// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { Eye, EyeOff, Lock, Mail, Shield, Terminal } from "lucide-react";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [matrixText, setMatrixText] = useState("");
//   const navigate = useNavigate();

//   // Matrix code rain effect for background text
//   useEffect(() => {
//     const characters =
//       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     let interval;

//     if (!isLoading) {
//       interval = setInterval(() => {
//         let result = "";
//         for (let i = 0; i < 3; i++) {
//           result += characters.charAt(
//             Math.floor(Math.random() * characters.length)
//           );
//         }
//         setMatrixText((prev) => (prev + result).slice(-100));
//       }, 150);
//     }

//     return () => clearInterval(interval);
//   }, [isLoading]);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     try {
//       // Simulate network delay
//       await new Promise((resolve) => setTimeout(resolve, 1500));

//       // Mock authentication (Replace with real backend authentication)
//       if (
//         email === "stephen.amankwah@meteo.gov.gh" &&
//         password === "admin123"
//       ) {
//         // Store authentication state
//         localStorage.setItem("isAuthenticated", "true");

//         // Navigate to dashboard
//         navigate("/dashboard", {
//           state: {
//             welcomeMessage: `Welcome back, Admin!`,
//             email: email,
//           },
//         });
//       } else {
//         // Set error message for invalid credentials
//         setError("Access denied: Invalid credentials detected");
//       }
//     } catch {
//       // Handle any unexpected errors
//       setError("System error: Authentication protocol failure");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-black p-4 relative overflow-hidden">
//       {/* Matrix code rain effect in background */}
//       <div className="absolute inset-0 opacity-20 text-green-500 overflow-hidden font-mono text-xs tracking-wide">
//         <div className="animate-pulse">
//           {matrixText.split("").map((char, index) => (
//             <span
//               key={index}
//               className="absolute"
//               style={{
//                 top: `${Math.random() * 100}%`,
//                 left: `${Math.random() * 100}%`,
//                 opacity: Math.random() * 0.9 + 0.1,
//                 animation: `fallDown ${Math.random() * 5 + 2}s linear infinite`,
//               }}
//             >
//               {char}
//             </span>
//           ))}
//         </div>
//       </div>

//       <div className="w-full max-w-md relative z-10">
//         <div className="bg-gray-900 border border-green-500 shadow-2xl rounded-lg overflow-hidden">
//           {/* Header Section */}
//           <div className="bg-black border-b border-green-500 text-green-500 p-6 text-center">
//             <Terminal className="mx-auto mb-4" size={48} strokeWidth={1.5} />
//             <h2 className="text-3xl font-bold font-mono tracking-wider">
//               ADMIN TERMINAL
//             </h2>
//             <p className="text-green-400 mt-2 font-mono text-sm">
//               SECURE AUTHENTICATION REQUIRED
//             </p>
//           </div>

//           {/* Login Form */}
//           <form onSubmit={handleLogin} className="p-6 space-y-6">
//             {/* Error Message */}
//             {error && (
//               <div
//                 className="bg-red-900/30 border border-red-500 text-red-400 px-4 py-3 rounded relative font-mono text-sm"
//                 role="alert"
//               >
//                 <div className="flex items-center">
//                   <Shield className="mr-2" size={16} />
//                   {error}
//                 </div>
//               </div>
//             )}

//             {/* Email Input */}
//             <div>
//               <label className="block text-green-400 mb-2 flex items-center font-mono text-sm">
//                 <Mail className="mr-2 text-green-500" size={18} />
//                 USER IDENTIFIER
//               </label>
//               <div className="relative group">
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                   placeholder="Enter admin email"
//                   className="w-full p-3 pl-10 bg-black border-2 border-green-500 rounded text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition font-mono placeholder-green-700"
//                 />
//                 <Mail
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-green-700 group-focus-within:text-green-400"
//                   size={18}
//                 />
//               </div>
//             </div>

//             {/* Password Input */}
//             <div>
//               <label className="block text-green-400 mb-2 flex items-center font-mono text-sm">
//                 <Lock className="mr-2 text-green-500" size={18} />
//                 ACCESS KEY
//               </label>
//               <div className="relative group">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   placeholder="Enter access key"
//                   className="w-full p-3 pl-10 pr-12 bg-black border-2 border-green-500 rounded text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition font-mono placeholder-green-700"
//                 />
//                 <Lock
//                   className="absolute left-3 top-1/2 -translate-y-1/2 text-green-700 group-focus-within:text-green-400"
//                   size={18}
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-green-700 hover:text-green-400"
//                 >
//                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
//                 </button>
//               </div>
//             </div>

//             {/* Login Button */}
//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full py-3 rounded font-mono tracking-wider border-2 transition duration-300 flex items-center justify-center ${
//                 isLoading
//                   ? "bg-green-900/30 border-green-700 text-green-700 cursor-not-allowed"
//                   : "bg-black border-green-500 text-green-500 hover:bg-green-900/30"
//               }`}
//             >
//               {isLoading ? (
//                 <>
//                   <span className="mr-2">AUTHENTICATING</span>
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
//                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100"></div>
//                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-200"></div>
//                   </div>
//                 </>
//               ) : (
//                 "INITIATE ACCESS"
//               )}
//             </button>

//             {/* Forgot Password Link */}
//             <div className="text-center">
//               <a
//                 href="/forgot-password"
//                 className="text-green-600 hover:text-green-400 text-sm font-mono"
//               >
//                 [RESET ACCESS KEY]
//               </a>
//             </div>
//           </form>
//         </div>

//         {/* Additional Security Message */}
//         <div className="text-center text-green-700 mt-4 text-xs font-mono flex items-center justify-center">
//           <Shield size={12} className="mr-2" />
//           <p>ENCRYPTED SECURE CONNECTION ESTABLISHED</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Lock, Mail, Shield, Terminal } from "lucide-react";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [matrixText, setMatrixText] = useState("");
  const navigate = useNavigate();

  // Matrix code rain effect for background text
  useEffect(() => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let interval;

    if (!isLoading) {
      interval = setInterval(() => {
        let result = "";
        for (let i = 0; i < 3; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }
        setMatrixText((prev) => (prev + result).slice(-100));
      }, 150);
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // Use the API URL from environment variable
      const apiUrl = import.meta.env.VITE_API_URL;
      // Updated endpoint to /api/v1/auth/login (assumed correct endpoint)
      const response = await fetch(`${apiUrl}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // On successful login, store the token and user info in localStorage
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("user", JSON.stringify(data.data.user));

        // Navigate to dashboard with welcome message
        navigate("/dashboard", {
          state: {
            welcomeMessage: `Welcome back, Admin!`,
            email: email,
          },
        });
      } else {
        // Handle error response from API
        setError(data.message || "Access denied: Invalid credentials detected");
      }
    } catch (err) {
      // Handle network or unexpected errors
      setError("System error: Authentication protocol failure");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 relative overflow-hidden">
      {/* Matrix code rain effect in background */}
      <div className="absolute inset-0 opacity-20 text-green-500 overflow-hidden font-mono text-xs tracking-wide">
        <div className="animate-pulse">
          {matrixText.split("").map((char, index) => (
            <span
              key={index}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.9 + 0.1,
                animation: `fallDown ${Math.random() * 5 + 2}s linear infinite`,
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="bg-gray-900 border border-green-500 shadow-2xl rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-black border-b border-green-500 text-green-500 p-6 text-center">
            <Terminal className="mx-auto mb-4" size={48} strokeWidth={1.5} />
            <h2 className="text-3xl font-bold font-mono tracking-wider">
              ADMIN TERMINAL
            </h2>
            <p className="text-green-400 mt-2 font-mono text-sm">
              SECURE AUTHENTICATION REQUIRED
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="p-6 space-y-6">
            {/* Error Message */}
            {error && (
              <div
                className="bg-red-900/30 border border-red-500 text-red-400 px-4 py-3 rounded relative font-mono text-sm"
                role="alert"
              >
                <div className="flex items-center">
                  <Shield className="mr-2" size={16} />
                  {error}
                </div>
              </div>
            )}

            {/* Email Input */}
            <div>
              <label className="block text-green-400 mb-2 flex items-center font-mono text-sm">
                <Mail className="mr-2 text-green-500" size={18} />
                USER IDENTIFIER
              </label>
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter admin email"
                  className="w-full p-3 pl-10 bg-black border-2 border-green-500 rounded text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition font-mono placeholder-green-700"
                />
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-green-700 group-focus-within:text-green-400"
                  size={18}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-green-400 mb-2 flex items-center font-mono text-sm">
                <Lock className="mr-2 text-green-500" size={18} />
                ACCESS KEY
              </label>
              <div className="relative group">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter access key"
                  className="w-full p-3 pl-10 pr-12 bg-black border-2 border-green-500 rounded text-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition font-mono placeholder-green-700"
                />
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-green-700 group-focus-within:text-green-400"
                  size={18}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-green-700 hover:text-green-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded font-mono tracking-wider border-2 transition duration-300 flex items-center justify-center ${
                isLoading
                  ? "bg-green-900/30 border-green-700 text-green-700 cursor-not-allowed"
                  : "bg-black border-green-500 text-green-500 hover:bg-green-900/30"
              }`}
            >
              {isLoading ? (
                <>
                  <span className="mr-2">AUTHENTICATING</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-200"></div>
                  </div>
                </>
              ) : (
                "INITIATE ACCESS"
              )}
            </button>

            {/* Forgot Password Link */}
            <div className="text-center">
              <a
                href="/forgot-password"
                className="text-green-600 hover:text-green-400 text-sm font-mono"
              >
                [RESET ACCESS KEY]
              </a>
            </div>
          </form>
        </div>

        {/* Additional Security Message */}
        <div className="text-center text-green-700 mt-4 text-xs font-mono flex items-center justify-center">
          <Shield size={12} className="mr-2" />
          <p>ENCRYPTED SECURE CONNECTION ESTABLISHED</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
