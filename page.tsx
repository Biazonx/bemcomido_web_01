import RegisterForm from "@/app/components/RegisterForm";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">
      
      {/* Cabeçalho fixo na página */}
      <header className="w-full bg-zinc-900 p-6 text-center text-white shadow-md">
        <h1 className="text-2xl font-bold tracking-widest">MEU PROJETO</h1>
      </header>

      {/* CHAMADA DO COMPONENTE DE CADASTRO */}
      <RegisterForm />

      <footer className="mt-auto py-8 text-sm text-zinc-500">
        © 2024 - Todos os direitos reservados
      </footer>
    </div>
  );
}