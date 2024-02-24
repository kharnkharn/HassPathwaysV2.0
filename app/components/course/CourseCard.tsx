import React, { MouseEventHandler, useState } from "react";
import { CourseCardProps } from "@/app/model/CourseInterface";
import Link from "next/link";


type ExtendedProps = {
  deleteCard: () => void;
};

const CourseCard = ({ title, courseCode, tag, deleteCard}: CourseCardProps & ExtendedProps) => {
  return (
    <section className="course-card">
      <div className="flex flex-col fold:flex-row justify-between items-start">
        <header className="course-title flex-shrink-1">
          <Link
            href={`/courses/${courseCode}`}
            className="text-md font-semibold break-normal"
          >
            {title}
          </Link>
          <p className="text-sm text-gray-600">{courseCode}</p>
        </header>
        <div className="flex-col fold:flex-row">
          <ViewButton
            label={"View"}
            clickCallback={() => {
              console.log("hello world");
            }}
          />
          <DeleteButton
            label={"Delete"}
            clickCallback={() => {
              deleteCard();
            }}
          />
        </div>
      </div>
      <div className="flex gap-x-1 flex-wrap flex-grow-0 flex-shrink-0">
        {tag?.map((t) => {
          return (
            <p className="tag tag-primary" key={t}>
              {t}
            </p>
          );
        })}
      </div>
    </section>
  );
};


const ViewButton = ({
  label,
  clickCallback,
}: {
  label: string;
  clickCallback: MouseEventHandler;
}) => {
  const tagStyle = "tag-primary";

  const fontStyle = "text-primary-700";

  return (
    <button
      className={`flex gap-2 items-center !rounded-md hover:!bg-gray-100 ${
        " !bg-gray-50"
      }`}
      onClick={clickCallback}
    >
      <span
        className={`text-xs md:text-sm lg:text-lg font-semibold ${fontStyle}`}
      >
        {label}
      </span>
    </button>
  );
};

const DeleteButton = ({
  label,
  clickCallback,
}: {
  label: string;
  clickCallback: MouseEventHandler;
}) => {
  const tagStyle = "tag-primary";

  const fontStyle = "text-primary-700";

  return (
    <button
      className={`flex gap-2 items-center !rounded-md hover:!bg-gray-100 ${
        " !bg-gray-50"
      }`}
      onClick={clickCallback}
    >
      <span
        className={`text-xs md:text-sm lg:text-lg font-semibold ${fontStyle}`}
      >
        {label}
      </span>
    </button>
  );
};



export default CourseCard;
