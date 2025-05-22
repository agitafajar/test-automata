import Header from "./components/layout/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NETS League",
  description: "Mobile Dashboard NETS League",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900" suppressHydrationWarning>
        <div
          className="mx-auto max-w-md w-full min-h-screen relative"
          suppressHydrationWarning
        >
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
