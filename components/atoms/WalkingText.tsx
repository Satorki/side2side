import { InfiniteSlider } from "./InfiniteSlider";

const WalkingText = () => {
  return (
    <div className="py-10">
      <div className="px-10 font-bai flex flex-col gap-4 text-white opacity-90">
        <h3 className="text-4xl font-semibold">Nasze specjalizacje</h3>
      </div>
      <div className="text-2xl md:text-9xl text-white opacity-70">
        <InfiniteSlider gap={24} duration={100}>
          <p className="p-5 md:py-10">Audi</p>
          <p className="p-5 md:py-10">BMW</p>
          <p className="p-5 md:py-10">Nissan</p>
          <p className="p-5 md:py-10">Toyota</p>
          <p className="p-5 md:py-10">Volkswagen</p>
        </InfiniteSlider>
      </div>
    </div>
  );
};

export default WalkingText;
