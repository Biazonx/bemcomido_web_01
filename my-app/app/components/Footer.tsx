export default function Footer() {
  return (
    <footer className="w-full bg-gray-300 border-t-4 border-black p-2">
      <div className="flex justify-center items-center gap-4 text-xs font-bold">
        {/* Simulação dos traços de redimensionamento que aparecem no wireframe */}
        <div className="flex-1"></div>
        <p className="uppercase tracking-widest text-gray-700">
          © 2026 Bem Comido
        </p>
        <div className="flex-1 flex justify-end">
          <div className="w-4 h-4 border-r-2 border-b-2 border-gray-600 rotate-45 mr-2"></div>
        </div>
      </div>
    </footer>
  );
}
