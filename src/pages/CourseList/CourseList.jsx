import CourseCard from '../../components/Card';
import { FetchCourseList } from './api/CourseListAPI';
import { useEffect, useState } from 'react';
import Navbar from '../../layouts/Navbar';
import Pagination from '@mui/material/Pagination';

const CourseList = () => {

    const [courses, setCourses] = useState()
    const [totalPage, setTotalPage] = useState(2)
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)
    const CourseList = async () => {
        const data = await FetchCourseList(page, limit)
        setCourses(data)

    }
    useEffect(() => {
        CourseList()
    }, [page, limit])


    const handlePageChange = (event, value) => {
        setPage(value);
    };



    return (
        <div >
            <div>
                <Navbar />
            </div>

            <div className='mt-5' >
                <div className='sm:px-20 xsm:px-2 '>
                    {
                        courses?.data.map((course) => {
                            return (
                                <div className='py-5' key={course?.cid} >
                                    <CourseCard coursedata={course} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='flex justify-center items-center py-5'>
                <Pagination
                    count={totalPage}
                    page={page}
                    onChange={handlePageChange}
                    color='primary'

                />
            </div>
        </div>
    )
}

export default CourseList;