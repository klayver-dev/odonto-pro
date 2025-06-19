import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "OdontoPRO - Sistema de Agendamento para Clínicas",
  description: "Sistema de Agendamento para Clínicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
