import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Simpel Shop",
  description: "Se vores produkter",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
