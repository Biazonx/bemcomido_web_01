"use client";

export default function LoginForm() {
  // Estilo de input para combinar com a busca da Home
  const inputStyle = "w-full p-3 border-2 border-black rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] outline-none focus:translate-x-[1px] focus:translate-y-[1px] focus:shadow-none transition-all text-black";
  
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6 border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
      
      <div className="w-full text-center">
        <h2 className="text-3xl font-serif italic font-bold text-black">
          Faça login
        </h2>
        <div className="h-1 w-20 bg-[#B91C1C] mx-auto mt-2 border border-black"></div>
      </div>

      <form className="flex w-full flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold uppercase text-black">E-mail</label>
          <input type="email" placeholder="seu@email.com" className={inputStyle} />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-bold uppercase text-black">Senha</label>
          <input type="password" placeholder="••••••••" className={inputStyle} />
        </div>

        <button 
          type="button"
          className="mt-4 w-full border-2 border-black bg-[#B91C1C] p-3 font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}