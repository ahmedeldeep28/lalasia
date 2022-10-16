import React from "react";

 function Row(props) {
  return <div className={`grid grid-cols-12 gap-3 ${props.className}`} >{props.children}</div>;
}

export default Row
