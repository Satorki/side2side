import FadeUp from "@/components/atoms/FadeUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface ListProps {
  items: { id: number; title: string; content?: string }[];
}

const List = ({ items }: ListProps) => {
  return (
    <Accordion type="single" collapsible>
      {items.map((item) => (
        <FadeUp delay={0.5} duration={1 + item.id} key={item.id}>
          <AccordionItem value={`item-${item.id}`}>
            <AccordionTrigger className="py-1 text-start hover:text-red-400 transition-all duration-300 ease-in cursor-pointer text-[1.1rem]">
              {item.title}
            </AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        </FadeUp>
      ))}
    </Accordion>
  );
};

export default List;
