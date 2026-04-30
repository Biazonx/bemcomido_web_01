"use client"; // Necessário para componentes com interação no Next.js

import Image from "next/image";

export default function RegisterForm() {
  return (
    <main className="mt-16 flex w-full max-w-md flex-col items-center gap-6 rounded-2xl bg-white p-8 shadow-xl dark:bg-zinc-900 sm:items-start">
      
      {/* Logo dentro do componente */}
      <div className="flex w-full justify-center pb-4">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={120}
          height={24}
          priority
        />
      </div>

      <div className="w-full text-center sm:text-left">
        <h2 className="text-2xl font-semibold text-black dark:text-zinc-50">
          Crie sua conta
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Preencha seus dados abaixo para se cadastrar.
        </p>
      </div>

      <form className="flex w-full flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Nome Completo
          </label>
          <input 
            type="text" 
            placeholder="Digite seu nome"
            className="rounded-lg border border-zinc-300 p-3 text-black outline-none focus:border-black focus:ring-1 focus:ring-black dark:border-zinc-700 dark:bg-black dark:text-white dark:focus:border-white dark:focus:ring-white"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            E-mail
          </label>
          <input 
            type="email" 
            placeholder="seu@email.com"
            className="rounded-lg border border-zinc-300 p-3 text-black outline-none focus:border-black focus:ring-1 focus:ring-black dark:border-zinc-700 dark:bg-black dark:text-white dark:focus:border-white dark:focus:ring-white"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Senha
          </label>
          <input 
            type="password" 
            placeholder="••••••••"
            className="rounded-lg border border-zinc-300 p-3 text-black outline-none focus:border-black focus:ring-1 focus:ring-black dark:border-zinc-700 dark:bg-black dark:text-white dark:focus:border-white dark:focus:ring-white"
          />
        </div>

        <button 
          type="button"
          className="mt-4 w-full rounded-lg bg-black p-3 font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
        >
          Cadastrar
        </button>
      </form>
    </main>
  );
}