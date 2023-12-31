import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { likecourse } from '../service/likecourse';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';





export default function CourseCard({ coursedata,likes }) {



  

  const navigate = useNavigate()
  const userData = useSelector(state => state?.userDetails)
  
  const navigateCourseDetails = () => {
    navigate('/coursedeatils', { state: { data: coursedata?.cid } })
  }

  const IncreaseLike=async()=>{
    const like=likecourse(coursedata?.cid)

  }


  return (
    <div className='bg-gray-200 hover:bg-gray-400  border border-gray-300 rounded-lg flex items-center justify-around   ' >
      <div className='' >
        <img

          className='h-1/2 w-1/2'
          src={coursedata?.thumbnail}
          title="course-image"
        />
      </div>
      <CardContent>
        <p className='xsm:text-lg font-extrabold underline' >
          {coursedata?.name}
        </p>
        <p className='xsm:text-sm' >
          {coursedata?.description}
        </p>
        <p className="xsm:text-xs font-bold " >
          {coursedata?.instructor}
        </p>
        {
          userData?.userInfo?.data?.email==null?(<></>):(<>
            <div className='flex  items-center' >
          <IconButton color='error' onClick={()=>IncreaseLike()}  >
            <FavoriteIcon/>
          </IconButton>
          <p>
            {
              likes==null?(<><p> {coursedata?.likes}</p></>):(likes?.cid==coursedata?.cid?(<><p>{likes?.message?.likes}</p></>):(<><p>{coursedata?.likes}</p></>))
            }
          
          </p>
        </div>
          </>)
        }
      </CardContent>
      <CardActions>

        <IconButton onClick={() => { navigateCourseDetails() }} >
          <ArrowForwardIcon />
        </IconButton>

      </CardActions>
    </div>
  );
}
