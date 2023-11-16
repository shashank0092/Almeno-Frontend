import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import * as React from 'react';

const SearchBar = () => {

   
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);
    return (
        <>

            <div className='flex ' >
                <div className="border border-black w-[550px]  rounded-full flex  justify-center items-center " >
                    <div className='w-full' >
                        <input type="text" placeholder="Find Course For You Here" className=' rounded-full w-full py-5  outline-none ' />
                    </div>
                    <div>
                        <IconButton onClick={handleClickOpen('paper')}>
                            <SearchIcon />
                        </IconButton>
                    </div>

                </div>

            </div>




            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Serach</DialogTitle>
                
                <DialogContent dividers={scroll === 'paper'}>
                    <div className='flex flex-col w-full' >
                        <div className='w-full h-52 border border-black flex  ' >
                            <div >
                                <input className='border border-black px-20 rounded-full mt-2 ml-2' type="text" placeholder='Search Course Name Here' />
                            </div>
                            <div>
                                <IconButton>
                                    <SearchIcon/>
                                </IconButton>
                            </div>
                            <div>
                                <IconButton>
                                    <FilterAltIcon/>
                                </IconButton>
                            </div>
                        </div>

                        <div className='w-96 h-52' >
                            <p>Search By Instructor Name</p>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    
                </DialogActions>
            </Dialog>





        </>
    )
}

export default SearchBar;