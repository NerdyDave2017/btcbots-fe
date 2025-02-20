import React from "react";
import TanstackProvider from "./tanstack-provider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AppContextProvider } from "@/src/context";

const Providers = async ({ children }: { children: React.ReactNode }) => {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <TanstackProvider>
      <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID! ?? ""}>
        <NextIntlClientProvider messages={messages}>
          <AppContextProvider>{children}</AppContextProvider>
        </NextIntlClientProvider>
      </GoogleOAuthProvider>
    </TanstackProvider>
  );
};

export default Providers;
