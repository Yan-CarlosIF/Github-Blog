import { GithubRepo } from "../types/profile";
import { differenceInDays } from "date-fns";
interface CardProps {
  repo: GithubRepo;
}

const Card = ({ repo }: CardProps) => {
  const time = differenceInDays(new Date(), new Date(repo.created_at));

  return (
    <div
      className={`flex flex-col border-2 border-transparent bg-[var(--base-post)] w-[340px] h-64 p-8 sm:w-[325px] lg:w-[416px] gap-5 rounded-[10px]
     hover:border-[var(--base-label)] hover:cursor-pointer transition-colors duration-200 ease-in-out `}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[var(--base-title)] text-xl font-bold">
          {repo.name}
        </h1>
        <span className="text-[var(--base-span)] text-sm ml-10 whitespace-nowrap self-start mt-1">
          {time < 1
            ? "Criado hoje"
            : `Há ${time} ${time === 1 ? "dia" : "dias"}`}
        </span>
      </div>
      <p className="text-[var(--base-text)] text-ellipsis line-clamp-4">
        {repo.description}
      </p>
    </div>
  );
};

export default Card;
