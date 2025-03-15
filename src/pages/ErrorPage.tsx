import LinkComponent from "../components/LinkComponent";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5 px-5">
      <h1 className="text-2xl sm:text-3xl text-[var(--base-title)] text-center font-bold line-clamp-2">
        Perfil ou repositório não encontrado ou inexistente
      </h1>

      <h2 className="text-[var(--base-text)] text-xs sm:text-base text-center font-semibold my-1">
        Ou você atingiu o máximo de requisições a API do GitHub
      </h2>

      <LinkComponent content="Voltar a página inicial" toHome />
    </div>
  );
};

export default ErrorPage;
