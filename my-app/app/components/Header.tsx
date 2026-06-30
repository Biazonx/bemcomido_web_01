import Link from 'next/link';

export default function Header() {
  const buttonStyle = "bg-[#B91C1C] text-white px-4 py-1 border-2 border-black rounded-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs font-bold hover:translate-y-0.5 transition-all whitespace-nowrap";

  return (
    <header className="w-full bg-[#B91C1C] border-b-4 border-black p-4 flex items-center">
      
      {/* Coluna Esquerda - Espaço para os botões (oculta em mobile) */}
      <div className="flex-1 flex justify-start gap-2 hidden md:flex">
        <button className={buttonStyle}>Top Receitas</button>
        <button className={buttonStyle}>Favoritos</button>
        <button className={buttonStyle}>Buscar Receitas</button>
        <Link href="/about" className={buttonStyle}>
          Sobre Nós
        </Link>
        <Link href="/cardapio" className={buttonStyle}>
          Cardápio
        </Link>
      </div>

      {/* Coluna Central - LOGO COM LINK PARA HOME */}
      <div className="flex-shrink-0">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <h1 className="text-white font-bold text-2xl md:text-4xl italic tracking-tighter cursor-pointer">
            Bem Comido
          </h1>
        </Link>
      </div>

      {/* Coluna Direita - Links de Acesso */}
      <div className="flex-1 flex justify-end gap-2 text-white font-bold">
        <Link href="/login" className={buttonStyle}>
          Entrar
        </Link>
        <Link href="/register" className={buttonStyle}>
          Registrar
        </Link>
      </div>

    </header>
  );
}