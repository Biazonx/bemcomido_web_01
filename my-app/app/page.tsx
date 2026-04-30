import RecipeSearch from "@/app/components/Home";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      
      {/* Cabeçalho fixo na página */}
      {/* CHAMADA DO COMPONENTE DE CADASTRO */}
      <RecipeSearch />
    </div>
  );
}