"use client";
import { motion } from "framer-motion";

const LineAnimation = () => {
  return (
    <div style={{ width: "100%", height: "5px", overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            width: 0,
          },
          visible: {
            width: "100%",
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2, delay: 2 }}
        style={{
          height: "5px",
          backgroundColor: "#d52727",
        }}
      ></motion.div>
    </div>
  );
};

export default LineAnimation;
