import { useScroll, useTransform } from "framer-motion";
import { line } from "framer-motion/client";
import React, { useEffect } from "react";

const CarPath = () => {
  const { scrollYProgress } = useScroll();
  const linePrint = useTransform(scrollYProgress, [0, 0.4], [0, 400]);
  const lineAvoid = useTransform(scrollYProgress, [0.135, 0.16], [0, 28]);
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
          ctx.lineTo(linePrint.get(), 50);
          ctx.stroke();
          ctx.fillRect(138, 15, lineAvoid.get(), 70);
          // ctx.beginPath();
          // ctx.moveTo(-300, 50);
          // ctx.lineTo(linePrint.get(), lineAvoid.get());
          // ctx.stroke();
        }
      }
    };

    const unsubscribe = linePrint.onChange(() => {
      drawLine();
    });

    return () => unsubscribe();
  }, [linePrint]);

  return (
    <div>
      <canvas
        className="w-full h-[70px] absolute top-0 right-0 z-0"
        ref={canvasRef}
      />
    </div>
  );
};

export default CarPath;
