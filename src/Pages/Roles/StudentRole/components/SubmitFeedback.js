import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineFileAdd} from "react-icons/ai";
import { FeedbackContext } from '../../../Context/Context';
import FeedbackPage from './FeedbackPage';
import StudentCourses from './StudentCourses';

const SubmitFeedback = () => {
  const {getStudentCourses, studentEnrolledCourse, isClicked, setIsClicked} = useContext(FeedbackContext);
  const [facultyAddress, setFacultyAddress] = useState("");
  // const [isClicked, setIsClicked] = useState(false);
  
  const openFeedback = (to) => {
    setIsClicked(true); //TODO: set isclicked to context api for close component is feedback submitted.
    console.log("tox:",to);
    setFacultyAddress(to);
  }
  useEffect(()=>{
    getStudentCourses();
    // console.log(studentEnrolledCourse);
  },[])
  return (
    <div className='bg-[#F5F5F5] calc-height rounded-b-3xl'>
    <p className='text-white text-2xl mb-10 font-bold bg-[#039BE5] h-24 flex items-center rounded-t-xl'><AiOutlineFileAdd className='ml-5 mr-3 w-6 h-6'/>Submit Feedback</p>
    <div>
       <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
    <div>
      <h2 class="text-2xl font-semibold leading-tight">My Courses</h2>
    </div>
    <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto flex justify-center">
      <div
        class="inline-block w-3/4 shadow-md rounded-lg overflow-hidden"
      >
        <table class=" w-full leading-normal">
          <thead>
            <tr>
              <th
                class="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
               Course Code
              </th>
              <th
                class="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Course Title
              </th>
              <th
                class=" text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Faculty
              </th>
              <th
                class=" text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-100  text-xs font-semibold text-gray-700 uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
                studentEnrolledCourse?.map(course => <tr>
                     <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <div class="flex items-center justify-center">
                  <div class="flex-shrink-0 w-10 h-10">
                  </div>
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                     {course?.courseCode}
                    </p>
                  </div>
                </div>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p class="text-gray-900 whitespace-no-wrap">{course?.courseTitle}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p class="text-gray-900 whitespace-no-wrap">{course?.faculty}</p>
              </td>
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-center">
                <p class="text-gray-900 whitespace-no-wrap"><button className='btn bg-red-400 rounded-md px-3 py-2 text-white ' onClick={()=>{openFeedback(course.facultyAddress)}}>Give Feedback</button></p>
              </td>
                </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    {
      isClicked && <FeedbackPage facultyAddress={facultyAddress}></FeedbackPage>
    }
</div>
</div>
  )
}

export default SubmitFeedback;