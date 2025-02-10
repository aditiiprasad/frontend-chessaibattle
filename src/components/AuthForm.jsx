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
    <div className="flex flex-col items-center justify-center w-full max-w-md p-8 bg-[#3E2723] bg-opacity-80 backdrop-blur-md shadow-2xl rounded-2xl border border-[#5D4037]">
      {/* Tabs */}
      <div className="flex w-full mb-6">
        <button
          className={`w-1/2 py-3 font-semibold text-lg rounded-full transition-all border-2 ${
            !isSignup
              ? "bg-gradient-to-r from-[#FFC107] to-[#FF9800] text-black shadow-lg  border-none"
              : "bg-transparent text-[#D7CCC8] border-[#8D6E63]"
          }`}
          onClick={() => setIsSignup(false)}
        >
          Login
        </button>
        <button
          className={`w-1/2 py-3 font-semibold text-lg rounded-full transition-all border-2 ${
            isSignup
              ? "bg-gradient-to-r from-[#FFC107] to-[#FF9800] text-black shadow-lg  border-none"
              : "bg-transparent text-[#D7CCC8] border-[#8D6E63]"
          }`}
          onClick={() => setIsSignup(true)}
        >
          Sign Up
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full space-y-5">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-full bg-[#5D4037] bg-opacity-50 border border-[#8D6E63] text-orange-300 placeholder-[#D7CCC8] focus:outline-none focus:ring-2 focus:ring-[#A1887F]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded-full bg-[#5D4037] bg-opacity-50 border border-[#8D6E63] text-orange-300 placeholder-[#D7CCC8] focus:outline-none focus:ring-2 focus:ring-[#A1887F]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 flex items-center text-[#D7CCC8]"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          type="submit"
          className="mt-4 w-full py-3 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#FFB300] text-black font-semibold shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
        >
          {isSignup ? "Sign Up" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
