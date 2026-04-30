"use client";
import { useState } from 'react';

export default function RecipeSearch() {
  const [ingredient, setIngredient] = useState('');

  const handleAdd = () => {
    console.log("Adicionando:", ingredient);
  };

  return (
    // Adicionado w-full para garantir que o bege cubra tudo de ponta a ponta
    <main className="w-full flex-1 flex flex-col items-center justify-start pt-20 bg-[#FDF1B8] min-h-[calc(100vh-160px)]">
      
      <h2 className="text-3xl italic font-serif text-gray-800 mb-8">
        Coloque a mão na massa...
      </h2>

      {/* Container da Busca */}
      <div className="flex w-full max-w-2xl px-4 gap-2">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            // Ajustado o text-gray-900 para o texto aparecer bem
            className="w-full pl-10 pr-4 py-3 border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] focus:outline-none text-lg text-gray-900 placeholder:text-gray-400"
            placeholder="Digite o ingrediente"
          />
        </div>

        <button
          onClick={handleAdd}
          className="bg-[#B91C1C] text-white px-6 py-3 border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all font-bold"
        >
          Adicionar
        </button>
      </div>
    </main>
  );
}