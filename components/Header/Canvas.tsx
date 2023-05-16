"use client";
import { useDraw } from "@/hooks/useDraws";
import React, { useEffect, useState } from "react";
import Title from "./Title";
import Tools from "./Tools";

type Props = {};

export default function Canvas({}: Props) {
  const [color, setColor] = useState<string>("#000");

  const { canvasRef, onMouseDown, onTouchStart, clear } = useDraw(drawLine);

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight * 0.7;
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [canvasRef]);

  function drawLine({ prevPoint, currentPoint, ctx }: Draw) {
    const { x: currX, y: currY } = currentPoint;
    const lineColor = color;
    const lineWidth = 5;

    let startPoint = prevPoint ?? currentPoint;
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = lineColor;
    ctx.moveTo(startPoint.x, startPoint.y);
    ctx.lineTo(currX, currY);
    ctx.stroke();

    ctx.fillStyle = lineColor;
    ctx.beginPath();
    ctx.arc(startPoint.x, startPoint.y, 2, 0, 2 * Math.PI);
    ctx.fill();
  }

  return (
    <>
      <div className=" bg-white flex justify-center items-center overflow-clip shadow-md">
        <div className="relative">
          <canvas
            ref={canvasRef}
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            className="shadow-md select-none"
            style={{ touchAction: "none" }}
          />

          <Title />
        </div>
      </div>

      <Tools color={color} setColor={setColor} clear={clear} />
    </>
  );
}
