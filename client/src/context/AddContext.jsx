import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import humanizeDuration from 'humanize-duration'

export const AppContext = createContext();

export const AppContextRovider = (props) => {
  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [isEducator, setisEducator] = useState([true]);
  const [enrolledCourses, setEnrolledCourses] = useState([])

  //Fetch all Courses

  const fetchAllCourses = async () => {
    setAllCourses(dummyCourses);
  };

  // Told to fetch all courses

  useEffect(() => {
    fetchAllCourses();
    fetchUserEnrolledCourses();
  }, []);

  //Function to calculate average rating of course

  const calculateRating = (course) => {
    if (course.courseRatings.length === 0) {
      return 0;
    }
    let totalRating = 0;
    course.courseRatings.forEach((rating) => {
      totalRating += rating.rating;
    });
    return totalRating / course.courseRatings.length;
  };

  // Function to calculate course chapter time

  const calculateChapterTime = (chapter) => {
    let time = 0;
    chapter.chapterContent.map((lecture)=> time+= lecture.lectureDuration)
    return humanizeDuration(time * 60 * 1000, {units : ['h', 'm']});
  }
  
  // Function to calculate Course Duration

  const calculateNoOfChapters =(course) => {
    let totalLectures = 0;
    course.courseContent.forEach(chapter =>{
      if(Array.isArray(chapter.chapterContent)){
        totalLectures += chapter.chapterContent.length;
      }
    });
    return totalLectures;
  }

  // Fetch User Enrolled courses

  const fetchUserEnrolledCourses = async ()=>{
    setEnrolledCourses(dummyCourses)
  }
  

  const calculateCourseDuration = (course) => {
    let time = 0;
    course.courseContent.map((chapter)=>chapter.chapterContent.map((lecture)=> time+=lecture.lectureDuration))
    return humanizeDuration(time * 60 *1000, {units : ['h' , 'm']})
  }
  
  // Function to calculate number of lectures

  //Accumulating all the needed things to pass to other components of the app

  const value = {
    currency,
    allCourses,
    navigate,
    calculateRating,
    isEducator,
    setisEducator,
    calculateNoOfChapters,
    calculateCourseDuration,
    calculateChapterTime,
    fetchUserEnrolledCourses,
    enrolledCourses

  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
