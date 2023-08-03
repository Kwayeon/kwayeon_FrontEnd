import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { QueryClientProvider } from "@tanstack/react-query";
import { client } from "@/apis/instance";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
