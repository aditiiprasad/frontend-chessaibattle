import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
      {/*  Authentication Form */}
      <div className="w-full lg:w-1/2 flex justify-center p-6">
        <AuthForm onAuthSuccess={() => navigate("/home")} />
      </div>

      {/*  Preview Section */}
      <div className="w-full lg:w-1/2 border flex justify-center p-6">
        <img
          src="#"
          alt="Preview"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default AuthPage;
