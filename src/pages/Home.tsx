import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [input, setInput] = useState<string>("");
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-[var(--base-profile)] flex flex-col justify-center items-center w-[864px] h-[212px] rounded-[10px] object-cover mt-[-100px] p-6 gap-4">
        <h1 className="text-[var(--base-title)] text-2xl font-bold">
          Buscar Usuário do GitHub
        </h1>

        <input
          className={twMerge(
            `p-2 rounded-md w-3xl outline-none bg-[var(--base-input)] text-[var(--base-label)] border-1
            border-[var(--base-border)] focus:border-[var(--blue)] transition-colors duration-200 ease-in-out`,
            input && "text-[var(--base-text)]"
          )}
          type="text"
          placeholder="Buscar pelo nome do Perfil"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className={twMerge(
            `bg-[var(--base-border)] rounded-md w-1/6 h-1/4 p-2transition-colors duration-200 ease-in-out
            text-[var(--base-title)] cursor-pointer disabled:cursor-not-allowed disabled:opacity-50`,
            input && "hover:bg-[#0b72e7]"
          )}
          disabled={!input}
          onClick={() => navigate(`/blog/${input}`)}
        >
          Buscar
        </button>
      </div>
      <span className="text-[var(--base-text)] font-semibold mt-2">
        Desenvolvido por{" "}
        <a
          href="https://github.com/Yan-CarlosIF"
          target="_blank"
          className="text-[var(--blue)]"
        >
          Yan Carlos
        </a>
      </span>
    </>
  );
};

export default Home;
