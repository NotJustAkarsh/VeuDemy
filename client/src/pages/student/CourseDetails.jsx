import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../context/AddContext";
import Loading from "../../components/student/Loading";
import { assets } from "../../assets/assets";
import humanizeDuration from "humanize-duration";
import Footer from "../../components/student/Footer";
import Youtube from "react-youtube";

const CourseDetails = ({ course }) => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSection, setopenSection] = useState({});
  const [isAlreadyEnrolled, setIsAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const {
    allCourses,
    calculateRating,
    calculateNoOfChapters,
    calculateCourseDuration,
    calculateChapterTime,
    currency,
  } = useContext(AppContext);

  const toggleSection = (index) => {
    setopenSection((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const fethCourseData = async () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  useEffect(() => {
    fethCourseData();
  }, [allCourses]);

  return courseData ? (
    <>
      <div className="relative p-10 lg:p-20 md:p-15 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-5  mx-auto">
        <div className="absolute top-0 left-0 w-full z-1 h-1/2 bg-gradient-to-b from-cyan-100/70"></div>

        {/* left column */}
        <div className="z-10 text-gray-500 max-w-4xl m-auto w-full lg:px-20 sm:px-2">
          <h1 className="text-gray-800 lg:text-4xl md:text-3xl sm:text-2xl font-semibold">
            {courseData.courseTitle}
          </h1>
          <p
            className="pt-4 md:text-base text-sm"
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
          ></p>

          {/* Review And Rating */}
          <div className="flex items-center space-x-2 text-xs mt-4 mb-4">
            <p>{calculateRating(courseData)}</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <img
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  alt=""
                  key={i}
                  className="w-3.5 h-3.5"
                />
              ))}
            </div>
            <p className="text-blue-600">
              ({courseData.courseRatings.length}{" "}
              {courseData.courseRatings.length > 1 ? "Ratings" : "Rating"})
            </p>
            <p>
              {courseData.enrolledStudents.length}{" "}
              {courseData.enrolledStudents.length > 1 ? "Students" : "Student"}
            </p>
          </div>
          <p className="text-sm">
            Course by
            <span className="text-blue-600 underline">NotJustAkarsh</span>
          </p>
          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold mb-2">Course Structure</h2>
            <div>
              {courseData.courseContent.map((chapter, index) => (
                <div
                  className="border border-gray-300 bg-white mb-2 rounded select-none"
                  key={index}
                  onClick={() => toggleSection(index)}
                >
                  <div className="flex justify-between py-3 bg-gray-100/20 cursor-pointer">
                    <div className="flex items-center space-x-3 font-medium px-5 ">
                      <img
                        className={`transform transition-transform ${openSection[index] ? "rotate-180" : ""}`}
                        src={assets.down_arrow_icon}
                        alt="arrow icon"
                      />
                      <p>{chapter.chapterTitle}</p>
                    </div>
                    <p className="px-5 text-sm">
                      {chapter.chapterContent.length} lectures -{" "}
                      {calculateChapterTime(chapter)}
                    </p>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openSection[index] ? "max-h-96" : "max-h-0"}`}
                  >
                    <ul className=" list-disc  text-gray-600 border-t border-gray-300">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li
                          className="flex items-center gap-1 py-2 px-4 "
                          key={i}
                        >
                          <img
                            src={assets.play_icon}
                            alt="play icon"
                            className="w-4 h-4 m-1"
                          />
                          <div className="flex items-center justify-between w-full text-gray-800 text-sm md:text-default">
                            <p>{lecture.lectureTitle}</p>
                            <div className="flex gap-2">
                              {lecture.isPreviewFree && (
                                <p
                                  className="text-blue-600 cursor-pointer"
                                  onClick={() =>
                                    setPlayerData({
                                      videoId: lecture.lectureUrl
                                        .split("/")
                                        .pop(),
                                    })
                                  }
                                >
                                  Preview
                                </p>
                              )}
                              <p>
                                {humanizeDuration(
                                  lecture.lectureDuration * 60 * 1000,
                                  { units: ["h", "m"] },
                                )}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
              <div className="mt-5">
                <h1 className="font-semibold">Course Description</h1>
                <p
                  className="text-xs mt-4 text-gray-500"
                  dangerouslySetInnerHTML={{
                    __html: courseData.courseDescription,
                  }}
                ></p>
              </div>
            </div>
          </div>
        </div>

        {/* right column */}
        <div className="z-20 shadow-xl max-w-[420px] rounded-lg overflow-hidden mx-auto justify-center h-full bg-white lg:rounded-t-lg w-full">
          {playerData ? (
            <Youtube
              videoId={playerData.videoId}
              opts={{ playerVars: { autoplay: 1 } }}
              iframeClassName="w-full aspect-video"
            />
          ) : (
            <img src={courseData.courseThumbnail} alt="" />
          )}

          <div className="p-5">
            <div className="flex items-center space-x-2">
              <img
                className="w-3.5"
                src={assets.time_left_clock_icon}
                alt="time left clock icon"
              />

              <p className=" lg:text-lg text-sm text-red-500">
                {" "}
                <span className="font-medium">5 days</span> left at this price !
              </p>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-gray-800 text-2xl lg:text-4xl font-semibold mt-2">
                {currency}
                {(
                  courseData.coursePrice -
                  (courseData.discount * courseData.coursePrice) / 100
                ).toFixed(2)}
              </p>
              <p className=" text-gray-500 line-through lg:text-lg mt-2 text-sm">
                {currency}
                {courseData.coursePrice}
              </p>
              <p className="text-sm text-gray-500 lg:text-lg mt-2">
                {courseData.discount}% off
              </p>
            </div>
            <div className="flex items-center mt-2 text-sm gap-4 text-gray-500">
              <div className="flex text-xs lg:text-sm gap-2">
                <img
                  className="w-3 lg:w-4 md:w-3"
                  src={assets.star}
                  alt="star"
                />
                <p>{calculateRating(courseData)}</p>
              </div>

              <div className="text-gray-500/40"> | </div>

              <div className="flex text-xs lg:text-sm gap-2">
                <img
                  className=" w-3 lg:w-4 md:w-3"
                  src={assets.time_clock_icon}
                  alt="time"
                />
                <p>{calculateCourseDuration(courseData)}</p>
              </div>

              <div className="text-gray-500/40"> | </div>

              <div className="flex text-xs lg:text-sm gap-2">
                <img
                  className=" w-3 lg:w-4 md:w-3"
                  src={assets.lesson_icon}
                  alt="lessons"
                />
                <p>{calculateNoOfChapters(courseData)} lessons</p>
              </div>
            </div>
            <button className="bg-blue-600 outline-none active:scale-98 rounded text-white mt-5 w-full py-3">
              {isAlreadyEnrolled ? "Already Enrolled" : "Enroll Now"}
            </button>
            <p className="p-3">
              <h1 className="text-xl font-medium lg:text-2xl">
                What's in the course?
              </h1>
              <ul className="text-sm text-gray-500 mt-2 list-disc ml-2">
                <li>Lifetime access with free updates.</li>
                <li>Step-by-step, hands-on project guidance.</li>
                <li>Downloadable resources and source code.</li>
                <li> Quizzes to test your knowledge.</li>
                <li>Certificate of completion.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
