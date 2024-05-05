import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { isEmpty } from "../constants/validation";
const Login = () => {

    const navigate =useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if(isEmpty(email)){
      setError("Enter the email")
      return
    }else if(isEmpty(password)){
      setError("enter the password")
      return
    }
    try {
    
   const response =await axios({
        method: 'post',
        url: 'https://mernapp-osme.onrender.com/login',
        data: {
            email,
            password
        }
      });
      console.log(response);
      if (response.status == 200) {
        const token = response.data.token
        localStorage.setItem("token",token)
        navigate("/")
      } 
    } 
    catch (err) {
      if (axios.isAxiosError(err)) {
        const axiosError= err ;
        if (axiosError.response && axiosError.response.status === 404) {
            const errorData = axiosError.response?.data?.message; 
            setError(errorData || "user not found")       
        } else {
          console.error("Login failed with error: ", err);
          const errorData = axiosError.response?.data?.message;
          setError(errorData || "Login failed");
        }
      } else {
        console.error("Login failed with error: ", err);
        setError("Login failed");
      }
    }
}
  
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    
    <div className=" h-screen mx-auto">
      <h1 className="text-center text-3xl text-[#9fafca] hover:text-[#b8df10] font-extrabold pt-10 pb-10">
        Login Form
      </h1>
      {error ? <div className="text-red-600">{error}</div> : ""}
      <form className="max-w-sm mx-auto w-full border border-black p-20 rounded-md" onSubmit={handleSubmit}>
        <div className="flex flex-col pt-10">
          <label htmlFor="email" className="text-black">
            Email
          </label>
          <input
            type="text"
            className="border border-black mb-3 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label htmlFor="password" className="text-black">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className="rounded-md border border-black w-full "
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button
              type="button"
              className="absolute text-xs inset-y-0 right-0 pr-2 flex items-center"
              onClick={toggleShowPassword}
            >
              {" "}
              {showPassword ? (
                <i className="fas fa-eye-slash fa-2x"></i>
              ) : (
                <i className="fas fa-eye fa-2x"></i>
              )}{" "}
            </button>
          </div>
          <button
            type="submit"
            className="rounded-full text-lg leading-4 font-medium bg-blue-500 hover:bg-sky-700 h-8 mt-5 text-white"
            onClick={handleSubmit}
          >
            Sign In
          </button>
          <p className="mt-2 text-gray-600 cursor-pointer">
              Don't have an account?{" "}
              <span
                className="text-blue-700"
                onClick={() => navigate("/register")}
              >
                Register
              </span>
            </p>
        </div>
      </form>
    </div>

  )
}

export default Login