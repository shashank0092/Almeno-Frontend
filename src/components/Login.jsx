import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useAuth0 } from "@auth0/auth0-react";
import { changeInfo } from "../redux/features/userDetails";

import { CreateStudent } from "../service/CreateStudent";



const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const genrateStudent=async()=>{
    const student=await CreateStudent(user)
    
    dispatch(changeInfo(student))
  }

  useEffect(()=>{
    genrateStudent()
  },[user])

  return (
    <>
      <button className="border border-gray-300 bg-green-400 text-white font-bold px-4 py-2 rounded-3xl xsm:py-3 xsm:px-3 " onClick={() => loginWithRedirect()}>Log In</button>
    </>
  )
};

export default LoginButton;