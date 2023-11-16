import * as React from 'react';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { likecourse } from '../service/likecourse';





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
    <div className='xsm:bg-red-700 border border-gray-300 rounded-lg flex items-center justify-around sm:bg-white  ' >
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
