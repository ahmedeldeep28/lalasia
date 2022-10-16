import React from "react";

function HeadSection({ name, title, text, center }) {
  if (center) {
    return (
      <div className="w-full lg:w-1/2  text-center mx-auto">
        <p className="text-h6 md:text-h5 mb-3 text-secondary">{name}</p>
        <h4 className="text-h3 md:text-h2 capitalize">{title}</h4>
        <p className="text-p3 md:text-p1 text-base">{text}</p>
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-30 xl:gap-x-44 items-center mb-12">
        <div>
          <p className="text-h6 lg:text-h5 mb-3 text-secondary">{name}</p>
          <h4 className="text-h3 lg:text-h2 capitalize">{title}</h4>
        </div>
        <div>
          <p className="text-p3 lg:text-p1 text-base">{text}</p>
        </div>
      </div>
    );
  }
}

export default HeadSection;
