import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";

import LOGO from "../assets/Logo.png"

import LoginButton from "../components/Login"
import SearchBar from "../components/SearchBar";
import LogoutButton from "../components/Logout"

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { IconButton } from '@mui/material';

const Navbar = () => {

    const value = useSelector(state => state?.userDetails)
    
    const navigate = useNavigate();



    const navigateStudentpanel = async () => {
        navigate('/studnetpanel', { state: { data: value } })
    }

    
    return (
        <>
            <div className="flex items-center justify-between sm:px-20 sm:mt-0 xsm:px-0 xsm:mt-5 " >
                <div className="sm:h-1/5 sm:w-1/12 xsm:h-1/4 xsm:w-1/5" >
                    <Link to={"/"} >
                        <img src={LOGO} alt="logo" />
                    </Link>
                </div>
                <div>
                    <SearchBar />
                </div>
                <div>
                    {
                        value?.userInfo?.data?.email == null ?
                            (<>
                                <LoginButton />

                            </>) :
                            (<>

                                <div className="flex justify-center items-center " >
                                    <div className="w-full" >
                                        <LogoutButton />
                                    </div>
                                    <div className="" >
                                        <IconButton color="primary" onClick={() => navigateStudentpanel()}  >
                                            <AccountCircleIcon fontSize="large" />
                                        </IconButton>
                                    </div>
                                </div>
                            </>)
                    }
                </div>

            </div>

        </>
    )
}

export default Navbar