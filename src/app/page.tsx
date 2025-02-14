import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl w-4/5 bg-zinc-900 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1 className="text-4xl font-extrabold">Мастерская Кирилла</h1>
          <address>г.Москва, Соймоновский проезд, 7с1</address>
          <p>Открыто: с 9:00 до 18:00</p>
          <Link href="tel:89652429081" className="hover:underline">
            +7-965-242-90-81
          </Link>
        </div>
      </main>
    </div>
  );
}
