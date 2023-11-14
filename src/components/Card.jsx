import * as React from 'react';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { Link, useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';

export default function CourseCard({coursedata}) {

    const navigate=useNavigate()

    const navigateCourseDetails=()=>{
        navigate('/coursedeatils',{state:{data:coursedata?.id}})
    }
 
  return (
    <div className='xsm:bg-red-700 border border-gray-300 rounded-lg flex items-center justify-around sm:bg-white  ' >
      <CardMedia

        sx={{ height: 50,width:90 }}
        image={coursedata?.thumbnail}
        title="course-image"
      />
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
      </CardContent>
      <CardActions>
        
          <IconButton onClick={()=>{navigateCourseDetails()}} >
            <ArrowForwardIcon  />
          </IconButton>
        
      </CardActions>
    </div>
  );
}
