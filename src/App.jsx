import { BrowserRouter, Routes, Route } from "react-router-dom"
import CourseList from "./pages/CourseList/CourseList";
import CourseDetails from "./pages/CourseDetails/CourseDetails";
import StudentPanel from "./pages/StudentPanel/StudentPanel";
import { useEffect } from "react";


const App = () => {

  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/coursedeatils" element={<CourseDetails />} />
          <Route path="/studnetpanel" element={<StudentPanel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;