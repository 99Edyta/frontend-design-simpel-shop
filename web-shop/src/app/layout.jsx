import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata = {
  title: "Simpel Shop",
  description: "Se vores produkter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
