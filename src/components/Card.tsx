const Card = () => {
  return (
    <div
      className={`flex flex-col border-2 border-transparent bg-[var(--base-post)] w-0.70 h-64 p-8 max-w-[416px] gap-5 rounded-[10px]
     hover:border-[var(--base-label)] hover:cursor-pointer transition-colors duration-200 ease-in-out `}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-[var(--base-title)] text-xl font-bold">
          JavaScript data types and data structures
        </h1>
        <span className="text-[var(--base-span)] text-sm ml-10 whitespace-nowrap self-start mt-1">
          Há 1 dia
        </span>
      </div>
      <p className="text-[var(--base-text)] text-ellipsis line-clamp-4">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </div>
  );
};

export default Card;
