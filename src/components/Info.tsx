import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";

interface InfoProps {
  content: string;
  icon: IconDefinition;
  color?: string;
  hidden?: boolean;
}

const Info = ({ content, icon, color, hidden }: InfoProps) => {
  return (
    <div
      className={twMerge("flex items-center gap-2", hidden && "hidden sm:flex")}
    >
      <FontAwesomeIcon
        className="w-[12px] h-[12px] sm:w-[18px] sm:h-[18px]"
        icon={icon}
        color={color}
      />
      <span
        className="text-xs sm:text-base text-nowrap"
        style={{ lineHeight: "100%" }}
      >
        {content}
      </span>
    </div>
  );
};

export default Info;
