import LoginForm from "@/app/components/LoginForm";

export default function Login() {
  return (
    /* Fundo bege para manter a consistência com a Home */
    <main className="w-full flex-1 flex flex-col items-center justify-center bg-[#FDF1B8] py-20">
      <LoginForm />
    </main>
  );
}