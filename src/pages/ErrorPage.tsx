const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-5">
      <h1 className="text-3xl text-[var(--base-title)] font-bold">
        Perfil ou repositório não encontrado ou inexistente
      </h1>

      <h2 className="text-[var(--base-text)] font-semibold">
        Ou você atingiu o máximo de requisições a API do GitHub
      </h2>
    </div>
  );
};

export default ErrorPage;
