import FadeUp from "@/components/atoms/FadeUp";
import { Check } from "lucide-react";


interface ListProps {
  items: { id: number; content?: string; title: string }[];
}

export const List = ({ items }: ListProps) => {

  return (
    <div className="w-full flex flex-col gap-3">
      {items.map((item) => (
        <FadeUp delay={0.5} duration={1 + item.id} key={item.id}>
          <div>
            <div className="flex gap-5 items-center relative">
              <div>
                <Check />
              </div>
              <div className="py-1 text-start hover:text-[#ffffff] transition-all duration-300 ease-in cursor-pointer text-[1.1rem]">
                {item.title}
              </div>
            </div>
          </div>
        </FadeUp>
      ))}
    </div>
  );
};

export default List;
