import FadeUp from "./FadeUp";

interface Props {
  text: string;
}

const ReviewText = ({ text }: Props) => {
  return (
    <div className="italic">
      <FadeUp delay={1}>{text}</FadeUp>
    </div>
  );
};

export default ReviewText;
