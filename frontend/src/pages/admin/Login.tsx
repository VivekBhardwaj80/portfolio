import { motion } from "motion/react";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { CiLock } from "react-icons/ci";
import { toast } from "react-toastify";
import api from "../../services/axios";
import { endsPoint } from "../../services/api";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [isShow, setIsShow] = useState(false);
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const navigate = useNavigate()

  const handleSubmit = async(e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()    
    try {
      const { data } = await api.post(endsPoint.login, {email,password})
      if(data.success){
        toast.success(data.message)
        setEmail('')
        setPassword('')
        navigate("dashboard")
      }
    } catch (error:unknown) {
      if(axios.isAxiosError(error)){
        toast.error(error.response?.data?.message || error.message);
      }
      else if(error instanceof Error){
        toast.error(error.message)
      }
      else{
        toast.error("Something went wrong")
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-600 to-purple-700">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-sm p-8 rounded-2xl bg-white/20 backdrop-blur-xl shadow-2xl text-white"
      >
        <h2 className="text-2xl font-bold text-center mb-1">Login</h2>
        <p className="text-sm font-semibold text-center mb-5">
          Welcome back! please login to your account.
        </p>
        <div className="w-full flex border-b border-white/50 items-center mb-4 p-2 gap-2">
          <FiUser size={20} />
          <input
            className="w-full bg-transparent outline-none"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full mb-6 border-b border-white/50 p-2 relative">
          <div className="flex items-center text-white gap-2">
            <CiLock size={20} />
            <input
              type={isShow ? "text" : "password"}
              className="w-full  bg-transparent outline-none"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="absolute top-1/3 right-5 cursor-pointer ">
            {isShow ? (
              <span onClick={() => setIsShow(false)}>
                {" "}
                <FaEye size={20} />{" "}
              </span>
            ) : (
              <span className="" onClick={() => setIsShow(true)}>
                {" "}
                <FaEyeSlash size={20} />{" "}
              </span>
            )}
          </div>
        </div>
        <motion.button
        type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSubmit}
          className="w-full py-2 rounded-full bg-linear-to-r from-emerald-400 to-blue-500 font-semibold"
        >
          Login
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Login;
