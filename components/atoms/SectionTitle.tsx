import AnimatedText from "./AnimatedText";

const SectionTitle = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-12 font-bai">
      <p className="text-2xl md:text-3xl font-bai">O Nas</p>
      <h2 className="text-5xl md:text-6xl font-bold">
        Wznosimy motorsport na{" "}
        <span>
          <AnimatedText text="wyższy" />
        </span>{" "}
        poziom.
      </h2>
    </div>
  );
};

export default SectionTitle;
