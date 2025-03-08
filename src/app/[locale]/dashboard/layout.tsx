import type { Metadata } from "next";
import ChildrenWrapper from "./ChildrenWrapper";

export const metadata: Metadata = {
  title: "BTC Bots",
  description: "btcbots.us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </section>
  );
}
