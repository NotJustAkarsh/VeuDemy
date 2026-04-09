import Footer from "../../components/student/Footer";
import AllCourses from "../../components/student/AllCourses";

const CoursesList = () => {
  return (
    <div className='flex flex-col items-center space-y-7 text-center'>
      <AllCourses />
      <Footer />
    </div>
  );
};

export default CoursesList;
