import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Providers from "../../providers";
import ClientWrapper from "./ClientWrapper";
import { Toaster } from "sonner";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Btcbots",
  description: "btcbots.us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased`}>
        <Providers>
          <Toaster richColors position="top-right" closeButton />
          <ClientWrapper>{children}</ClientWrapper>
        </Providers>
      </body>
    </html>
  );
}
