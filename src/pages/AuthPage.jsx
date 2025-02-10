import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import Header from "../components/Header"; // Import the Header component
import Footer from "../components/Footer";


const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black to-amber-950 text-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center justify-center flex-grow">
        {/* Authentication Form */}
        <div className="w-full m-24 lg:w-1/2 flex justify-center p-6">
          <AuthForm onAuthSuccess={() => navigate("/home")} />
        </div>

        {/* Preview Section */}
        <div className="w-full lg:w-1/2 border flex justify-center p-6">
          <img
            src="#"
            alt="Preview"
            className="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      
      </div>
      <Footer/>
    </div>
  );
};

export default AuthPage;
