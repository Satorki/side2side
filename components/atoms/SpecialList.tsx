import React from "react";
import FadeUp from "@/components/atoms/FadeUp";
import { Check } from "lucide-react";

interface ListProps {
  items: { id: number; content?: string; title: string }[];
}

const SpecialList: React.FC<ListProps> = ({ items }) => {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <FadeUp key={item.id} delay={0.5} duration={1 + item.id}>
          <div className="flex items-center">
            <div className="text-lg font-bold">{item.title}</div>
            
          </div>
        </FadeUp>
      ))}
    </div>
  );
};

export default SpecialList;
