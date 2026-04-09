import { useContext, useEffect, useState } from "react";
import SearchBar from "../../components/student/SearchBar";
import { AppContext } from "../../context/AddContext";
import CourseCard from "../../components/student/CourseCard";
import { useParams } from "react-router-dom";
import { assets } from "../../assets/assets";

const AllCourses = () => {
  const { navigate } = useContext(AppContext);
  const { allCourses } = useContext(AppContext);
  const { input } = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();

      input
        ? setFilteredCourse(
            tempCourses.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase()),
            ),
          )
        : setFilteredCourse(tempCourses);
    }
  }, [allCourses, input]);

  return (
    <div className="flex lg:p-20 sm:p-10 p-10 flex-wrap gap-8">
      <div className="text-start">
        <h1 className="text-3xl font-medium">Course List</h1>
        <p className="text-gray-500">
          <span
            onClick={() => navigate("/")}
            className="text-blue-500 cursor-pointer"
          >
            Home
          </span>
          / <span>Course List</span>
        </p>
      </div>
      <div className="sm:items-center w-full">
        <SearchBar data={input} />
      </div>
      {input && 
      <div className="inline-flex items-center gap-4 px-2 py-1 rounded border mt-9 text-gray-600 mb-2">
        <p>{input}</p>
        <img src={assets.cross_icon} className="cursor-pointer" onClick={()=>navigate('/course-list')} />
        </div>}
      <div>
        <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-1">
          {filteredCourse.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
