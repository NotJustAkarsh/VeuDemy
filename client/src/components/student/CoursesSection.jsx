import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AddContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {

  const {allCourses} = useContext(AppContext)

  return (
    <div>
      <h2 className="text-3xl font-medium text-gray-800">Learn from the best</h2>
      <p className="text-sm md:text-base text-gray-500 m-4">
        Discover our top-rated courses across various categories from coding to design to <br /> business and wellness, our courses are crafted to deliver results.
      </p>

      <div className="grid lg:grid-cols-4 gap-4 justify-center md:grid-cols-2 mt-6 mb-20 mr-6 ml-6">
        {allCourses.slice(0,4).map((course, index)=> <CourseCard key={index} course={course}/>)}
      </div>


      <Link to={'/course-list'} onClick={()=> scrollTo(0,0)}
      className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded"
      >
        Show all Courses
      </Link>
    </div>
  );
};

export default CoursesSection;
