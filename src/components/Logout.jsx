import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();
  
  return (
    <button className="border border-gray-300 bg-red-400 text-white font-bold px-4 py-2 rounded-3xl xsm:py-1  " onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>
  );
};

export default LogoutButton;