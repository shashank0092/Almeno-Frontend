import Typography from '@mui/material/Typography';
import CourseCard from '../../components/Card';
import { coursedata } from '../../utillls/CourseModel';

const CourseList = () => {
    return (
        <div className='' >
            <div>
                <Typography variant='h4' >
                    List Of Courses
                </Typography>
            </div>

            <div className='mt-5' >
                <div className='px-20 xsm:px-2 '>
                    {
                        coursedata.map((course)=>{
                            return(
                                <div className='py-5' key={course?.id} >
                                    <CourseCard coursedata={course} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseList;