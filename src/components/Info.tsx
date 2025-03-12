import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InfoProps {
  content: string;
  icon: IconDefinition;
}

const Info = ({ content, icon }: InfoProps) => {
  return (
    <div className="flex items-center gap-2">
      <FontAwesomeIcon icon={icon} width={18} height={18} />
      <span>{content}</span>
    </div>
  );
};

export default Info;
