import { useState } from "react";

const AuthForm = ({ onAuthSuccess }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="mt-24 flex flex-col items-center justify-center w-full max-w-md p-8 bg-gradient-to-br from-[#6F4E37] to-[#D7A86E] shadow-xl rounded-3xl text-white">
      <div className="flex w-full mb-6">
      <button
  className={`w-1/2 py-3 font-bold text-lg rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#3e570b] hover:to-[#556B2F] hover:border-transparent ${
    !isSignup
      ? "bg-gradient-to-r border-b-2 border-lime-700 from-[#556B2F] to-[#3e570b] text-white shadow-lg"
      : "bg-transparent border-2 border-white font-bold hover:text-white"
  }`}
  onClick={() => setIsSignup(false)}
>
  Login
</button>
<button
  className={`w-1/2 py-3 font-bold text-lg rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-[#3e570b] hover:to-[#556B2F] hover:border-transparent ${
    isSignup
      ? "bg-gradient-to-r border-b-2 border-lime-700 from-[#556B2F] to-[#3e570b] text-white shadow-lg"
      : "bg-transparent border-2 border-white font-bold hover:text-white"
  }`}
  onClick={() => setIsSignup(true)}
>
  Sign Up
</button>

      </div>

      <form onSubmit={(e) => { e.preventDefault(); onAuthSuccess(); }} className="w-full space-y-5">
        <input
          type="email"
          placeholder="📧 Enter your email"
          className="w-full p-3 rounded-full border-2 border-amber-950 bg-amber-50 placeholder-amber-950 text-amber-950 font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="🔒 Enter password"
            className="w-full p-3 rounded-full border-2 border-amber-950 bg-amber-50 placeholder-amber-950 text-amber-950 font-semibold focus:outline-none focus:ring-2 focus:ring-yellow-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-4 flex items-center text-xl"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          type="submit"
          className="mt-4 w-full py-3 rounded-full bg-gradient-to-r border-b-2 border-red-500 from-red-600 to-[#380303] text-white font-bold shadow-lg transition-all duration-300 hover:scale-105"
        >
          {isSignup ? "🚀 Sign Up" : "🔑 Login"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
