import * as React from 'react';

import { SearchCourse } from '../service/SearchCourse';
import CourseCard from './Card';

import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Checkbox from '@mui/material/Checkbox';




const SearchBar = () => {


    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const [nameSearch, setNameSearch] = useState(false)
    const [instructorSearch, setInstructorSearch] = useState(false)
    const [courseName, setCourseName] = useState("")
    const [instructorName, setInstructorName] = useState("")
    const [searchResult, SetSearchResult] = useState(null)
    const [courseFilter, setcourseFilter] = useState({
        open: false, progress: false, close: false
    })





    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };




    const handleClose = () => {
        setOpen(false);
        setNameSearch(false)
        setInstructorSearch(false)
        setCourseName("")
        setInstructorName("")
        SetSearchResult(null)
        setcourseFilter({ open: false, close: false, progress: false })
    };



    const search = async () => {
        const data = await SearchCourse(courseName, instructorName)
        
        await SetSearchResult(data)
    }
   

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

            <div className='flex  ' >
                <div className="border border-black sm:w-[550px] xsm:full rounded-full flex  justify-center items-center " >
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
                    <div className='flex flex-col px-20 gap-10 xsm:px-10' >
                        {
                            nameSearch == false && instructorSearch == false ? (
                                <>
                                    <div>
                                        <div className='px-10  flex flex-row justify-center items-center bg-blue-400 text-white text-sm font-bold py-1 border border-black rounded-full xsm:px-20 ' >
                                            <div>
                                                <p>CourseName</p>
                                            </div>
                                            <div>
                                                <IconButton onClick={() => setNameSearch(true)} >
                                                    <ArrowForwardIcon fontSize='medium' color='success' />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='  flex flex-row justify-center items-center bg-blue-400 text-white text-sm font-bold py-1 border border-black rounded-full xsm:px-20 ' >
                                            <div>
                                                <p>InstrucorName</p>
                                            </div>
                                            <div>
                                                <IconButton onClick={() => setInstructorSearch(true)}  >
                                                    <ArrowForwardIcon fontSize='medium' color='success' />
                                                </IconButton>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (nameSearch ? (

                                <>
                                    <div className='h-[200px] flex flex-col gap-2 ' >
                                        <div className='flex flex-row  ' >
                                            <div className='border border-black py-2 sm:px-10 rounded-full xsm:px-2 ' >
                                                <input placeholder='Enter Course Name' value={courseName} onChange={(e) => { setCourseName(e?.target?.value) }} className='outline-none' />
                                            </div>
                                            <div>
                                                <IconButton onClick={() => search()} >
                                                    <SearchIcon color='primary' />
                                                </IconButton>
                                            </div>

                                        </div>

                                        <div className='flex flex-row justify-center' >
                                            <div>
                                                <IconButton>
                                                    <FilterAltIcon color='primary' />
                                                </IconButton>
                                            </div>
                                            <div className='flex flex-row' >
                                                <div className='flex flex-row items-center ' >
                                                    <div>
                                                        <p>Open</p>
                                                    </div>
                                                    <div>
                                                        <Checkbox onClick={() => setcourseFilter({ ...courseFilter, open: !courseFilter.open })} />
                                                    </div>
                                                </div>
                                                <div className='flex flex-row items-center ' >
                                                    <div>
                                                        <p>Progress</p>
                                                    </div>
                                                    <div>
                                                        <Checkbox onClick={() => setcourseFilter({ ...courseFilter, progress: !courseFilter.progress })} />
                                                    </div>
                                                </div>
                                                <div className='flex flex-row items-center ' >
                                                    <div>
                                                        <p>Close</p>
                                                    </div>
                                                    <div>
                                                        <Checkbox onClick={() => setcourseFilter({ ...courseFilter, close: !courseFilter.close })} />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div>
                                            <div>
                                                <p>Search Result:</p>
                                            </div>
                                            <div>
                                                {
                                                    searchResult == null ? (<><p></p></>) : (

                                                        <>
                                                            {
                                                                searchResult?.data?.map((result) => {
                                                                    return (
                                                                        <>
                                                                            <div className='py-5' key={result?.cid} >
                                                                                {
                                                                                    courseFilter.open == true ? (<>



                                                                                        {
                                                                                            result?.enrollmentStatus == "Open" ? (<>
                                                                                                <CourseCard coursedata={result} likes={result?.likes} />

                                                                                            </>) : (<></>)
                                                                                        }

                                                                                    </>) : (courseFilter.close == true ? (<>
                                                                                        {
                                                                                            result?.enrollmentStatus == "close" ? (<>
                                                                                                <CourseCard coursedata={result} likes={result?.likes} />

                                                                                            </>) : (<></>)
                                                                                        }

                                                                                    </>) : (courseFilter.progress == true ? (<>
                                                                                        {
                                                                                            result?.enrollmentStatus == "close" ? (<>
                                                                                                <CourseCard coursedata={result} likes={result?.likes} />

                                                                                            </>) : (<></>)
                                                                                        }

                                                                                    </>) : (
                                                                                        <>
                                                                                            <CourseCard coursedata={result} likes={result?.likes} />

                                                                                        </>)))
                                                                                }
                                                                            </div>
                                                                        </>
                                                                    )
                                                                })
                                                            }

                                                        </>)
                                                }
                                            </div>
                                        </div>
                                    </div>

                                </>) : (

                                <>
                                    <div className='h-[200px] flex flex-col gap-2 ' >
                                        <div className='flex flex-row  ' >
                                            <div className='border border-black py-2 px-10 rounded-full sm:px-10 xsm:px-2 ' >
                                                <input placeholder='Enter Instructor Name' className='outline-none' value={instructorName} onChange={(e) => { setInstructorName(e?.target?.value) }} />
                                            </div>
                                            <div>
                                                <IconButton onClick={() => search()}>
                                                    <SearchIcon color='primary' />
                                                </IconButton>
                                            </div>

                                        </div>

                                        <div className='flex flex-col' >
                                            <div className='flex flex-row xsm:justify-center' >
                                                <div>
                                                    <IconButton>
                                                        <FilterAltIcon color='primary' />
                                                    </IconButton>
                                                </div>
                                                <div className='flex flex-row' >
                                                    <div className='flex flex-row items-center ' >
                                                        <div>
                                                            <p>Open</p>
                                                        </div>
                                                        <div>
                                                            <Checkbox onClick={() => setcourseFilter({ ...courseFilter, open: !courseFilter.open })} />
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-row items-center ' >
                                                        <div>
                                                            <p>Progress</p>
                                                        </div>
                                                        <div>
                                                            <Checkbox onClick={() => setcourseFilter({ ...courseFilter, progress: !courseFilter.progress })} />
                                                        </div>
                                                    </div>
                                                    <div className='flex flex-row items-center ' >
                                                        <div>
                                                            <p>Close</p>
                                                        </div>
                                                        <div>
                                                            <Checkbox onClick={() => setcourseFilter({ ...courseFilter, close: !courseFilter.close })} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div>
                                                    <p>Search Result:</p>
                                                </div>
                                                <div>
                                                    {
                                                        searchResult == null ? (<><p></p></>) : (

                                                            <>
                                                                {
                                                                    searchResult?.data?.map((result) => {
                                                                        return (
                                                                            <>
                                                                                <div className='py-5' key={result?.cid} >
                                                                                    {
                                                                                        courseFilter.open == true ? (<>



                                                                                            {
                                                                                                result?.enrollmentStatus == "Open" ? (<>
                                                                                                    <CourseCard coursedata={result} likes={result?.likes} />

                                                                                                </>) : (<></>)
                                                                                            }

                                                                                        </>) : (courseFilter.close == true ? (<>
                                                                                            {
                                                                                                result?.enrollmentStatus == "close" ? (<>
                                                                                                    <CourseCard coursedata={result} likes={result?.likes} />

                                                                                                </>) : (<></>)
                                                                                            }

                                                                                        </>) : (courseFilter.progress == true ? (<>
                                                                                            {
                                                                                                result?.enrollmentStatus == "close" ? (<>
                                                                                                    <CourseCard coursedata={result} likes={result?.likes} />

                                                                                                </>) : (<></>)
                                                                                            }

                                                                                        </>) : (
                                                                                            <>
                                                                                                <CourseCard coursedata={result} likes={result?.likes} />

                                                                                            </>)))
                                                                                    }
                                                                                </div>
                                                                            </>
                                                                        )
                                                                    })
                                                                }

                                                            </>)
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                </>))
                        }

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