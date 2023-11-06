import React from "react";
import Button from "../Button/Button";

function Sections({ imgRight, img, text, event, label, onClick }) {
  return (
    <section className="flex flex-col lg:flex-row lg:space-x-10 space-y-5 p-2 lg:p-10 justify-center items-center">
      <div className={imgRight ? "hidden" : "inline lg:w-1/2 w-full"}>
        {!imgRight && <img src={img} className="rounded-lg" />}
      </div>
      <div className="lg:w-1/2 w-full">
        <p>{text}</p>
        {event && (
          <div className="mt-5">
            <Button label={label} onClick={onClick} />
          </div>
        )}
      </div>
      <div className={imgRight ? "inline lg:w-1/2 w-full" : "hidden"}>
        {imgRight && <img src={img} className="rounded-lg" />}
      </div>
    </section>
  );
}

export default Sections;
