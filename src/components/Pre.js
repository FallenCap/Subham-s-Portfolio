import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

function Pre(props) {
  return (
    <div id={props.load ? "preloader" : "preloader-none"}>
      <div className='center'>
        <ThreeCircles
          height="100"
          width="100"
          color="#0fcfd6"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    </div>
  );
}

export default Pre;
