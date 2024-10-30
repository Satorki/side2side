import { InfiniteSlider } from "./InfiniteSlider";

const WalkingText = () => {
  return (
    <div className="">
      {/* <div className="max-w-[1200px] mx-auto px-10 font-bai flex flex-col gap-4 text-white opacity-90">
        <h3 className="text-xl md:text-3xl font-semibold">Nasze specjalizacje:</h3>
      </div> */}
      <div className="text-2xl md:text-7xl text-black opacity-70">
        <InfiniteSlider gap={24} duration={50} reverse>
          <p className="px-1 py-5 md:py-10">SERWIS</p>
          <p className="px-1 py-5 md:py-10">TUNNING</p>
          <p className="px-1 py-5 md:py-10">MOTORSPORT</p>
        </InfiniteSlider>
      </div>
    </div>
  );
};

export default WalkingText;
