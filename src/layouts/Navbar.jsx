import { useSelector } from "react-redux"
import LOGO from "../assets/Logo.png"
import LoginButton from "../components/Login"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import LogoutButton from "../components/Logout"
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";


const Navbar = () => {

   const value=useSelector(state=>state?.userDetails)
   console.log(value,"this is redux value")
   const navigate=useNavigate();

   const navigateStudentpanel=async()=>{
    navigate('/studnetpanel', { state: { data:value } })
   }
    return (
        <>
            <div className="flex items-center justify-between sm:px-20 sm:mt-0 xsm:px-0 xsm:mt-5 " >
                <div className="sm:h-1/5 sm:w-1/12 xsm:h-1/4 xsm:w-1/5" >
                    <img src={LOGO} alt="logo" />
                </div>
                <div>
                    <SearchBar/>
                </div>
                <div>
                    {
                        value?.userInfo?.data?.email== null ?
                            (<>
                                <LoginButton />

                            </>) :
                            (<>

                                <div className="flex justify-center items-center " >
                                    <div>
                                        <LogoutButton />
                                    </div>
                                    <div >
                                        <IconButton size="large" color="primary" onClick={()=>navigateStudentpanel()}  >
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