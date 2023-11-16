import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';

const Footer=()=>{
    return(
        <>

            <div className='mx-20 py-5 mb-5' >
               
                <div className=' flex justify-around ' >
                    <div>
                        <IconButton size='large' >
                            <InstagramIcon color='secondary' fontSize='large' />
                        </IconButton>
                    </div>
                    <div>
                        <IconButton  size='large'>
                            <WhatsAppIcon color='secondary'  fontSize='large'/>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton  size='large'>
                            <CallIcon color='secondary'  fontSize='large'/>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton  size='large'>
                            <LinkedInIcon color='secondary'  fontSize='large'/>
                        </IconButton>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer;