import React from "react";

function Bar({color = "bg-dark-color", row = true, width, height, className}) {

    const barWidth = width ? width : row ? "w-4/5" : "w-0.5";
    const barHeight = height ? height : row ? "h-1" : "h-48";

    return (

        <div className={`flex justify-center ${className}`}>
          <hr className={`bar-classes ${color} ${barWidth} ${barHeight}`}></hr>
        </div>
  
    )
}

export default Bar;