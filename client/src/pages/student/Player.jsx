import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AddContext";
import { useParams } from "react-router-dom";
import humanizeDuration from "humanize-duration";
import Youtube from "react-youtube";
import Footer from "../../components/student/Footer";
import Rating from "../../components/student/Rating";

const Player = () => {
  const { enrolledCourses, calculateChapterTime } = useContext(AppContext);
  const { courseId } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [openSection, setOpenSection] = useState({});
  const [playerData, setPlayerData] = useState(null);

  const getCourseData = () => {
    enrolledCourses.map((course) => {
      if (course._id === courseId) {
        setCourseData(course);
      }
    });
  };

  const toggleSection = (index) => {
    setOpenSection((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    getCourseData();
  }, [enrolledCourses]);

  return (
    <>
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 p-4 sm:p-20 md:px-36">
        {/* left column */}
        <div className="text-gray-800">
          <h2 className="text-xl font-semibold mb-4">Course Structure</h2>
          <div>
            {courseData &&
              courseData.courseContent.map((chapter, index) => (
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
                            src={
                              false ? assets.blue_tick_icon : assets.play_icon
                            }
                            alt="play icon"
                            className="w-4 h-4 m-1"
                          />
                          <div className="flex items-center justify-between w-full text-gray-800 text-sm md:text-default">
                            <p>{lecture.lectureTitle}</p>
                            <div className="flex gap-2">
                              {lecture.lectureUrl && (
                                <p
                                  className="text-blue-600 cursor-pointer"
                                  onClick={() =>
                                    setPlayerData({
                                      ...lecture,
                                      chapter: index + 1,
                                      lecture: i + 1,
                                    })
                                  }
                                >
                                  Watch
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
          </div>
          <div className="flex items-center gap-2 py-3 mt-10">
            <h1 className="text-xl font-bold">Rate this Course :</h1>
            <Rating initialRating={0}/>
          </div>
        </div>
        {/* right column */}
        <div className="md:mt-10">
          {playerData ? (
            <div>
              <Youtube videoId={playerData.lectureUrl.split('/').pop()} opts={{playerVars: {autoplay : 1}}} iframeClassName='w-full aspect-video' />
              <div className="flex justify-between items-center mt-1">
                <p>{playerData.chapter}.{playerData.lecture} {playerData.lectureTitle}</p>
                <button className="text-blue-600">{false ? 'Completed' : 'Mark As Completed'}</button>
              </div>
            </div>
            )
            :
            <img src={courseData ? courseData.courseThumbnail : ''} alt="" /> }
          
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Player;
