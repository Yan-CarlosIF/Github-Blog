import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InfoProps {
  content: string;
  icon: IconDefinition;
  color?: string;
}

const Info = ({ content, icon, color }: InfoProps) => {
  return (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={icon} width={18} height={18} color={color} />
      <span style={{ lineHeight: "100%" }}>{content}</span>
    </div>
  );
};

export default Info;
