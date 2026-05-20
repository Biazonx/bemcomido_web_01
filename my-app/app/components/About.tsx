"use client";
export default function AboutPage() {
  return (
    <main className="w-full flex-1 bg-[#FDF1B8] text-black font-sans py-16 px-4 md:px-8 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col gap-12">
        
        {/* Seção Superior: Logo Oval e Bloco 1 */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo Oval Estilizado conforme rascunho */}
          <div className="border-4 border-black bg-[#FDF1B8] rounded-[50%] p-8 px-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center rotate-[-5deg] flex-shrink-0">
            <span className="text-amber-600 font-black text-3xl font-serif">Bem</span>
            <span className="text-red-700 font-black text-4xl font-serif italic ml-4">Comido</span>
          </div>

          {/* Seta indicativa > (SVG Nativo) */}
          <svg className="hidden md:block w-10 h-10 stroke-[3px] text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>

          {/* Bloco de Texto 1 */}
          <div className="flex-1 max-w-xl bg-white border-4 border-black p-6 rounded-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-sm md:text-base font-semibold leading-relaxed text-gray-900">
              O objetivo do nosso site é fazer com que você consiga ser um cozinheiro com o que tem na sua casa! Esqueça ingredientes caros e técnicas complexas.
            </p>
          </div>
        </div>

        {/* Seção Central: Bloco 2 (Alinhado à esquerda para criar o zigue-zague) */}
        <div className="w-full flex flex-col md:flex-row items-center justify-start gap-6">
          {/* Bloco de Texto 2 */}
          <div className="flex-1 max-w-xl bg-white border-4 border-black p-6 rounded-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-sm md:text-base font-medium leading-relaxed text-gray-900">
              Aqui você <span className="text-red-600 font-bold">DIGITA</span> os ingredientes que você tem aí na sua casa, ou se está <span className="text-red-600 font-bold">ENJOADO</span> de fazer sempre as mesmas receitas com determinados ingredientes, <span className="text-red-600 font-bold">AQUI</span> você recebe uma variedade de receitas com seus ingredientes!
            </p>
          </div>

          {/* Seta indicativa < (SVG Nativo) */}
          <svg className="hidden md:block w-10 h-10 stroke-[3px] text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        {/* Seção Inferior: Bloco 3 */}
        <div className="w-full flex flex-col md:flex-row items-center justify-end gap-6">
          {/* Seta indicativa > (SVG Nativo) */}
          <svg className="hidden md:block w-10 h-10 stroke-[3px] text-black flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>

          {/* Bloco de Texto 3 */}
          <div className="flex-1 max-w-xl bg-white border-4 border-black p-6 rounded-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-sm md:text-base font-medium leading-relaxed text-gray-900">
              Além também de poder <span className="text-red-600 font-bold">POSTAR</span> suas próprias receitas e receber <span className="text-red-600 font-bold">SEGUIDORES</span> por isso, você também pode <span className="text-red-600 font-bold">SEGUIR</span> seus chefes favoritos e <span className="text-red-600 font-bold">ACOMPANHAR</span> suas postagens!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}