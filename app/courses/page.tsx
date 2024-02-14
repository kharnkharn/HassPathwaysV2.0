"use client";
import { MouseEventHandler, useState, useEffect } from "react";
import CourseCard from "../components/course/CourseCard";
import ChevronUp from "@/public/assets/svg/chevron-up.svg?svgr";
import ChevronDown from "@/public/assets/svg/chevron-down.svg?svgr";
import { useAppContext } from "../contexts/appContext/AppProvider";

type coursesType = {
  tag: string;
  courseCode: string;
  title: string;
};

const MyCourses = () => {
  const [courseFilter, setCourseFilter] = useState(0);
  const { courseState } = useAppContext();
  const [ currentCourses, setCurrentCourses ] = useState<coursesType[]>([]);


  const addElementToArray = (newCourse:coursesType) => {
    /*const newCourse: coursesType = {
      tag: 'someTag',
      courseCode: 'someBag',
      title: 'someLag',
    };*/

    // Adding the new element to the array
    setCurrentCourses((prevArray: coursesType[]) => [...prevArray, newCourse]);
  };

  useEffect(() => {
    addElementToArray({
      tag: 'CSCI',
      courseCode: 'CSCI-2400',
      title: 'Comp Organization',
    })
    
    addElementToArray({
      tag: 'MATH',
      courseCode: 'MATH-1100',
      title: 'Calculus 1',
    })
    
    addElementToArray({
      tag: 'CHEM',
      courseCode: 'CHEM-1100',
      title: 'Intro to Chemistry',
    })
  }, []);

  return (
    <>
      <header className="mb-4 md:mb-8">
        <h1 className="title">My Courses</h1>
      </header>
      <section>
        <div className="course-button-group sm:flex flex-wrap gap-x-2 hidden">
          <ModeRadioButton
            checked={0 === courseFilter}
            label={"All"}
            tag={0}
            clickCallback={() => {
              setCourseFilter(0);
            }}
          />
          {courseState.map((state) => {
            return (
              <ModeRadioButton
                checked={state.value === courseFilter}
                label={state.display}
                tag={0}
                key={state.display}
                clickCallback={() => {
                  setCourseFilter(state.value);
                }}
              />
            );
          })}
        </div>
      </section>
      <section className="my-4 grid grid-flow-row gap-y-3">
        {currentCourses.map((element: coursesType, index: number) => (
          <li key={index}>
            <CourseCard tag={[element.tag]} courseCode={element.courseCode} title={element.title} />
          </li>
        ))}
        {/*<CourseCard tag={["T"]} courseCode="TEST-3000" title="Test1" />
        <CourseCard tag={["CSCI"]} courseCode="CSCI-1200" title="Data Structures" />*/}
      </section>
    </>
  );
};

const ModeRadioButton = ({
  checked,
  label,
  tag,
  clickCallback,
}: {
  checked: boolean;
  label: string;
  tag: number;
  clickCallback: MouseEventHandler;
}) => {
  const tagStyle = checked ? "tag-primary" : "tag-gray";

  const fontStyle = checked ? "text-primary-700" : "text-gray-500";

  return (
    <button
      className={`flex gap-2 items-center !rounded-md hover:!bg-gray-100 ${
        checked ? " !bg-gray-50" : ""
      }`}
      onClick={clickCallback}
    >
      <span
        className={`text-xs md:text-sm lg:text-lg font-semibold ${fontStyle}`}
      >
        {label}
      </span>
      <p className={`tag ${tagStyle}`}>{tag}</p>
    </button>
  );
};

export default MyCourses;
