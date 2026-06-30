"use client";
import { useEffect, useState } from "react";
import {
  listarPratos,
  criarPrato,
  atualizarPrato,
  deletarPrato,
  CATEGORIAS,
  type PratoResponse,
  type PratoRequest,
  type Categoria,
} from "@/services/cardapioService";

// ─── Formulário vazio padrão ──────────────────────────────────────────────────
const FORM_VAZIO: PratoRequest = {
  nome: "",
  descricao: "",
  preco: 0,
  categoria: "PRATO_PRINCIPAL",
  urlImagem: "",
  disponivel: true,
};

export default function CardapioPage() {
  const [pratos, setPratos]           = useState<PratoResponse[]>([]);
  const [carregando, setCarregando]   = useState(true);
  const [erro, setErro]               = useState("");
  const [modalAberto, setModalAberto] = useState(false);
  const [editando, setEditando]       = useState<PratoResponse | null>(null);
  const [form, setForm]               = useState<PratoRequest>(FORM_VAZIO);
  const [salvando, setSalvando]       = useState(false);
  const [filtroCat, setFiltroCat]     = useState<Categoria | "TODOS">("TODOS");

  // ─── Carregar pratos ────────────────────────────────────────────────────────
  const carregarPratos = async () => {
    try {
      setCarregando(true);
      const dados = await listarPratos();
      setPratos(dados);
    } catch {
      setErro("Não foi possível conectar à API. Verifique se o back-end está rodando.");
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => { carregarPratos(); }, []);

  // ─── Abrir modal ────────────────────────────────────────────────────────────
  const abrirCriar = () => {
    setEditando(null);
    setForm(FORM_VAZIO);
    setModalAberto(true);
  };

  const abrirEditar = (prato: PratoResponse) => {
    setEditando(prato);
    setForm({
      nome:       prato.nome,
      descricao:  prato.descricao,
      preco:      prato.preco,
      categoria:  prato.categoria,
      urlImagem:  prato.urlImagem,
      disponivel: prato.disponivel,
    });
    setModalAberto(true);
  };

  // ─── Salvar (criar ou atualizar) ────────────────────────────────────────────
  const salvar = async () => {
    if (!form.nome || form.preco <= 0) return;
    try {
      setSalvando(true);
      if (editando) {
        await atualizarPrato(editando.id, form);
      } else {
        await criarPrato(form);
      }
      setModalAberto(false);
      carregarPratos();
    } catch {
      setErro("Erro ao salvar prato.");
    } finally {
      setSalvando(false);
    }
  };

  // ─── Deletar ────────────────────────────────────────────────────────────────
  const remover = async (id: number) => {
    if (!confirm("Deseja remover este prato?")) return;
    try {
      await deletarPrato(id);
      carregarPratos();
    } catch {
      setErro("Erro ao remover prato.");
    }
  };

  // ─── Filtro de categoria ────────────────────────────────────────────────────
  const pratosFiltrados = filtroCat === "TODOS"
    ? pratos
    : pratos.filter((p) => p.categoria === filtroCat);

  // ─── Label da categoria ─────────────────────────────────────────────────────
  const labelCategoria = (cat: Categoria) =>
    CATEGORIAS.find((c) => c.value === cat)?.label ?? cat;

  // ─── Estilo base dos botões ─────────────────────────────────────────────────
  const btnBase =
    "border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-all font-bold";

  return (
    <main className="w-full flex-1 flex flex-col items-center justify-start pt-16 pb-16 bg-[#FDF1B8] min-h-[calc(100vh-160px)]">

      {/* ── Título ─────────────────────────────────────────────────────────── */}
      <h2 className="text-3xl italic font-serif text-gray-800 mb-2">
        Nosso Cardápio
      </h2>
      <p className="text-gray-600 mb-8 text-sm">Gerencie os pratos disponíveis</p>

      {/* ── Erro ───────────────────────────────────────────────────────────── */}
      {erro && (
        <div className="mb-6 px-5 py-3 bg-red-100 border-2 border-red-700 rounded-sm text-red-800 font-semibold max-w-2xl w-full mx-4">
           {erro}
        </div>
      )}

      {/* ── Barra de ações ─────────────────────────────────────────────────── */}
      <div className="flex flex-wrap gap-3 mb-8 w-full max-w-5xl px-4 items-center justify-between">

        {/* Filtro por categoria */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFiltroCat("TODOS")}
            className={`${btnBase} px-4 py-2 text-sm ${filtroCat === "TODOS" ? "bg-[#B91C1C] text-white" : "bg-white text-gray-800"}`}
          >
            Todos
          </button>
          {CATEGORIAS.map((c) => (
            <button
              key={c.value}
              onClick={() => setFiltroCat(c.value)}
              className={`${btnBase} px-4 py-2 text-sm ${filtroCat === c.value ? "bg-[#B91C1C] text-white" : "bg-white text-gray-800"}`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Botão adicionar */}
        <button
          onClick={abrirCriar}
          className={`${btnBase} bg-[#B91C1C] text-white px-6 py-2`}
        >
          + Adicionar Prato
        </button>
      </div>

      {/* ── Grid de pratos ─────────────────────────────────────────────────── */}
      {carregando ? (
        <p className="text-gray-600 italic">Carregando pratos...</p>
      ) : pratosFiltrados.length === 0 ? (
        <div className="flex flex-col items-center gap-4 mt-12">
          <p className="text-gray-500 italic text-lg">Nenhum prato encontrado.</p>
          <button onClick={abrirCriar} className={`${btnBase} bg-[#B91C1C] text-white px-6 py-3`}>
            Adicionar o primeiro prato
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl px-4">
          {pratosFiltrados.map((prato) => (
            <div
              key={prato.id}
              className="bg-white border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col"
            >
              {/* Imagem ou placeholder */}
              <div className="h-40 bg-[#FDF1B8] border-b-2 border-black flex items-center justify-center overflow-hidden">
                {prato.urlImagem ? (
                  <img src={prato.urlImagem} alt={prato.nome} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-5xl"></span>
                )}
              </div>

              {/* Conteúdo */}
              <div className="p-4 flex flex-col flex-1 gap-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">{prato.nome}</h3>
                  <span className={`text-xs px-2 py-0.5 border border-black rounded-sm font-semibold whitespace-nowrap ${prato.disponivel ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-500"}`}>
                    {prato.disponivel ? "Disponível" : "Indisponível"}
                  </span>
                </div>

                <span className="text-xs bg-[#FDF1B8] border border-black px-2 py-0.5 rounded-sm w-fit font-medium text-gray-700">
                  {labelCategoria(prato.categoria)}
                </span>

                {prato.descricao && (
                  <p className="text-gray-600 text-sm line-clamp-2">{prato.descricao}</p>
                )}

                <p className="text-[#B91C1C] font-bold text-xl mt-auto">
                  R$ {Number(prato.preco).toFixed(2).replace(".", ",")}
                </p>

                {/* Ações */}
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => abrirEditar(prato)}
                    className={`${btnBase} flex-1 bg-[#FDF1B8] text-gray-800 py-2 text-sm`}
                  >
                     Editar
                  </button>
                  <button
                    onClick={() => remover(prato.id)}
                    className={`${btnBase} flex-1 bg-[#B91C1C] text-white py-2 text-sm`}
                  >
                     Remover
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Modal Criar/Editar ──────────────────────────────────────────────── */}
      {modalAberto && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#FDF1B8] border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-sm w-full max-w-md">

            {/* Header modal */}
            <div className="bg-[#B91C1C] border-b-2 border-black px-6 py-4 flex items-center justify-between">
              <h3 className="text-white font-bold text-lg">
                {editando ? "Editar Prato" : "Novo Prato"}
              </h3>
              <button onClick={() => setModalAberto(false)} className="text-white font-bold text-xl hover:opacity-75">✕</button>
            </div>

            {/* Corpo modal */}
            <div className="px-6 py-5 flex flex-col gap-4">

              {/* Nome */}
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-800 text-sm">Nome *</label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="border-2 border-black rounded-sm px-3 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none text-gray-900"
                  placeholder="Ex: Frango Grelhado"
                />
              </div>

              {/* Descrição */}
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-800 text-sm">Descrição</label>
                <textarea
                  value={form.descricao}
                  onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                  className="border-2 border-black rounded-sm px-3 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none text-gray-900 resize-none"
                  rows={2}
                  placeholder="Descreva o prato..."
                />
              </div>

              {/* Preço + Categoria */}
              <div className="flex gap-3">
                <div className="flex flex-col gap-1 flex-1">
                  <label className="font-semibold text-gray-800 text-sm">Preço (R$) *</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    value={form.preco}
                    onChange={(e) => setForm({ ...form, preco: parseFloat(e.target.value) || 0 })}
                    className="border-2 border-black rounded-sm px-3 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none text-gray-900"
                  />
                </div>
                <div className="flex flex-col gap-1 flex-1">
                  <label className="font-semibold text-gray-800 text-sm">Categoria *</label>
                  <select
                    value={form.categoria}
                    onChange={(e) => setForm({ ...form, categoria: e.target.value as Categoria })}
                    className="border-2 border-black rounded-sm px-3 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none text-gray-900 bg-white"
                  >
                    {CATEGORIAS.map((c) => (
                      <option key={c.value} value={c.value}>{c.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* URL Imagem */}
              <div className="flex flex-col gap-1">
                <label className="font-semibold text-gray-800 text-sm">URL da Imagem</label>
                <input
                  type="text"
                  value={form.urlImagem}
                  onChange={(e) => setForm({ ...form, urlImagem: e.target.value })}
                  className="border-2 border-black rounded-sm px-3 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] focus:outline-none text-gray-900"
                  placeholder="https://..."
                />
              </div>

              {/* Disponível */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.disponivel}
                  onChange={(e) => setForm({ ...form, disponivel: e.target.checked })}
                  className="w-5 h-5 border-2 border-black rounded-sm"
                />
                <span className="font-semibold text-gray-800 text-sm">Disponível no cardápio</span>
              </label>

              {/* Botões */}
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => setModalAberto(false)}
                  className={`${btnBase} flex-1 bg-white text-gray-800 py-3`}
                >
                  Cancelar
                </button>
                <button
                  onClick={salvar}
                  disabled={salvando || !form.nome || form.preco <= 0}
                  className={`${btnBase} flex-1 bg-[#B91C1C] text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {salvando ? "Salvando..." : editando ? "Salvar" : "Criar Prato"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
