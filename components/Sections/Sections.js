import React from "react";
import Button from "../Button/Button";

function Sections({ imgRight, img, url, data, event, label, onClick }) {
  const containerClasses = `flex flex-col lg:flex-row lg:space-x-10 space-y-5 p-2 lg:p-10 justify-center items-center min-h-[100vh] py-10`;

  const imageContainerClasses = `lg:w-1/2 w-full ${
    imgRight ? "lg:order-1" : "lg:order-2"
  }`;

  const textContainerClasses = `lg:w-1/2 w-full lg:p-32 ${
    imgRight ? "lg:order-2" : "lg:order-1"
  }`;

  return (
    <section className={containerClasses}>
      <div className={imageContainerClasses}>
        <img src={img} className="rounded-lg max-h-[80vh] max-w-[80%] mx-auto" />
      </div>
      <div className={textContainerClasses}>
        {data.map(({ title, text, date }, index) => (
          <div
            className={`${
              data.length > 1 && index == data.length - 1 && "border-t"
            } py-5`}
          >
            <h1 className="font-extrabold text-2xl">{title}</h1>
            <div className="flex items-center justify-between">
              {text && <p className="whitespace-pre-line">{text}</p>}
              {date && <p>{date}</p>}
            </div>
          </div>
        ))}

        {label && (
          <div className="mt-5">
            <Button label={label} onClick={() => onClick(url)} />
          </div>
        )}
      </div>
    </section>
  );
}

export default Sections;
