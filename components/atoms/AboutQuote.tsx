interface Props {
  quote: string;
}

const AboutQuote = ({ quote }: Props) => {
  return (
    <div className="font-bai text-xl flex flex-col gap-5">
      <p>{quote}</p>
    </div>
  );
};

export default AboutQuote;
