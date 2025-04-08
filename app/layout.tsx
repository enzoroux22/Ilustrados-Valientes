import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Sueldos Uruguay",
  description: "Herramienta para liquidación de sueldos creada por Ilustrados & Valientes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
