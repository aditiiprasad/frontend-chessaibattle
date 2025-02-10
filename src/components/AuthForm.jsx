import { useState } from "react";

const AuthForm = ({ onAuthSuccess }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isSignup ? "Signing up..." : "Logging in...");
    onAuthSuccess(); 
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl border border-white/20">
      {/* Tabs  */}
      <div className="flex w-full mb-6">
        <button
          className={`w-1/2 py-2 font-bold text-lg rounded-full transition-all ${
            !isSignup ? "bg-yellow-400 text-black" : "bg-black text-white"
          }`}
          onClick={() => setIsSignup(false)}
        >
          Login
        </button>
        <button
          className={`w-1/2 py-2 font-bold text-lg rounded-full transition-all ${
            isSignup ? "bg-red-500 text-white" : "bg-black text-white"
          }`}
          onClick={() => setIsSignup(true)}
        >
          Sign Up
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-full bg-black bg-opacity-20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded-full bg-black bg-opacity-20 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-gray-400"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          type="submit"
          className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 text-white font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
