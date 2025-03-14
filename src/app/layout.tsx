import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Conversor de bases numéricas",
  description: "Converta números de binário para decimal e vice-versa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-dvh bg-gray-900 p-4 text-gray-200 max-w-[1270px] mx-auto my-1 flex flex-col justify-between items-center space-y-10 ${roboto.variable} antialiased`}
      >
        {children}
        <footer className="text-center text-md space-y-2">
          <p>
            Feito por <a target="_blank" className="hover:text-gray-500 hover:underline hover:underline-offset-1" href="https://www.github.com/DiegoSousa123">Diego Sousa</a>
          </p>
          <p className="text-sm text-gray-400">
            Este é um projeto criado para fins de estudo de conversão de bases numéricas da matéria de Arquitetura de Computadores, criado por alunos<br></br>
            do Centro Universitário Católica de Quixadá - UniCatólica.
          </p>
        </footer>
      </body>
    </html>
  );
}
