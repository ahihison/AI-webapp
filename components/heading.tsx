import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface headingProps {
  title: string;
  description: string;
  iconColor?: string;
  bgColor?: string;
  icon: LucideIcon;
}

const Heading: React.FC<headingProps> = ({
  title,
  description,
  iconColor,
  bgColor,
  icon: Icon,
}) => {
  return (
    <div className="">
      <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
        <div className={cn("w-fit p-2 rounded-md flex ", bgColor)}>
          <Icon className={cn("w-10 h-10", iconColor)} />
        </div>
        <div>
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className=" text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="px-4 lg:px-8"></div>
    </div>
  );
};

export default Heading;
