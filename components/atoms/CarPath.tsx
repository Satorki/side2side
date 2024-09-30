import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect } from "react";

const CarPath = () => {
  const { scrollYProgress } = useScroll();
  const iconMove = useTransform(scrollYProgress, [0, 0.8], [400, 0]);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Ustawienia dla rysowania linii
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#FF0000"; // Kolor linii
      }
    }
  }, []);

  // Rysowanie linii, gdy samochód się porusza
  useEffect(() => {
    const drawLine = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height); // Czyścimy płótno

          // Rysujemy linię od prawej do lewej
          ctx.beginPath();
          ctx.moveTo(300, 50); // Punkt startowy
          ctx.lineTo(iconMove.get(), 50); // Aktualna pozycja samochodu
          ctx.stroke();
        }
      }
    };

    const unsubscribe = iconMove.onChange(() => {
      drawLine(); // Wywołaj rysowanie za każdym razem, gdy zmienia się pozycja samochodu
    });

    return () => unsubscribe();
  }, [iconMove]);

  return (
    <div>
      <canvas
        className="w-full h-10 absolute top-0 right-0"
        ref={canvasRef}
        style={{ border: "1px solid black" }}
      />
    </div>
  );
};

export default CarPath;
