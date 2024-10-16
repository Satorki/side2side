import ButtonAction from "@/components/atoms/ButtonAction";
import ImageAbout from "@/components/atoms/ImageAbout";
import TitleSection from "@/components/atoms/TitleSection";
import AboutDescriptions from "@/components/molecules/AboutDescriptions";
import { motion, useScroll, useTransform } from "framer-motion";
import { CornerRightDown } from "lucide-react";
import { useRef } from "react";

const AboutMobile = () => {
  // ANIMATION
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const buttonScaleUpMobile = useTransform(scrollYProgress, [0.9, 0.1], [1, 0]);
  const quote1moveUpMobile = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const quote1opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const buttonOpacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);

  return (
    <div className="about-mobile" ref={container}>
      <div className="about-container">
        <div className="description-container">
          <div className="relative h-[100vh]">
            <div className="sticky top-[40vh] p-2">
              <TitleSection
                category=""
                titleBegining="Z nami Twój pojazd osiągnie pełnię możliwości."
                titleEnding=""
              />
            </div>
          </div>

          <ImageAbout />

          <div className="flex flex-col gap-3 text-xl font-bai leading-8 px-4 italic">
            <motion.div
              style={{
                opacity: quote1opacity,
                y: quote1moveUpMobile,
              }}
            >
              <AboutDescriptions />
            </motion.div>
          </div>
          <motion.div
            style={{
              scale: buttonScaleUpMobile,
              opacity: buttonOpacity,
              padding: "0rem 1rem",
            }}
          >
            <ButtonAction
              bgColor="#d52727"
              textColor="#FFF"
              text="Sprawdź"
              icon={<CornerRightDown />}
            />
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .description-container {
            position: relative;
            background: black;
            width: 100%;
            height: auto;

            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1.5rem;
          }
          .about-container {
            display: flex;
            flex-direction: column;
            padding: 1rem 0rem;
            height: auto;
          }
          .about-mobile {
            height: auto;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutMobile;
