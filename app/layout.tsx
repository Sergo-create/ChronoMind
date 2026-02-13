import type { Metadata } from "next";
import type { ReactElement, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Digital Consciousness MVP",
  description: "Baseline architecture for the Digital Consciousness project.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): ReactElement {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
