import { useScroll, useTransform } from "framer-motion";
import React, { useEffect } from "react";

const CarPath = () => {
  const { scrollYProgress } = useScroll();
  const iconMove = useTransform(scrollYProgress, [0, 0.4], [0, 400]);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#ffffff";
      }
    }
  }, []);

  useEffect(() => {
    const drawLine = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.beginPath();
          ctx.moveTo(-300, 50);
          ctx.lineTo(iconMove.get(), 50);
          ctx.stroke();
        }
      }
    };

    const unsubscribe = iconMove.onChange(() => {
      drawLine();
    });

    return () => unsubscribe();
  }, [iconMove]);

  return (
    <div>
      <canvas
        className="w-full h-[70px] absolute top-0 right-0"
        ref={canvasRef}
      />
    </div>
  );
};

export default CarPath;
