import { InfiniteSlider } from "./InfiniteSlider";

const WalkingText = () => {
  return (
    <div className="text-2xl md:text-9xl text-white opacity-30">
      <InfiniteSlider gap={24}>
        <p className="p-5 md:p-10">500+ naprawionych samochodów</p>
      </InfiniteSlider>
    </div>
  );
};

export default WalkingText;
