import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AI from "../assets/ai.png"

const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-[#231205] to-[#3d1a00] w-full min-h-screen border-black border-2 relative">
      
      <Header />
      
      
      <div className="flex flex-col lg:flex-row items-center justify-center flex-grow p-6">
       
        <div className="w-full lg:w-1/2 flex justify-center p-6">
          <AuthForm onAuthSuccess={() => navigate("/home")} />
        </div>

       
        <div className="mt-24 w-full lg:w-1/2 flex justify-center p-6">
          <img
            src={AI}
            alt="Chess Preview"
            className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-[#5D4037]"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthPage;